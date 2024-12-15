import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import { fetchVideos, deleteVideo, updateVideo, categoryClasses } from '../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Home.css';
import 'swiper/css';
import 'swiper/css/navigation';


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchVideos();
        setVideos(data);
      } catch (err) {
        console.error('Error in loadVideos:', err);
        setError('Error loading videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, [location.key]); // Esto hará que los videos se recarguen cada vez que se navegue a esta página

  const handleDelete = async (id) => {
    const success = await deleteVideo(id);
    if (success) {
      setVideos(videos.filter((video) => video.id !== id));
    } else {
      setError('Error deleting video. Please try again.');
    }
  };

  const handleSave = async (updatedVideo) => {
    const result = await updateVideo(updatedVideo);
    if (result) {
      setVideos(videos.map((video) => (video.id === result.id ? result : video)));
      setEditingVideo(null);
    } else {
      setError('Error updating video. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>

      <Banner />
      <main className="categories">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {['Frontend', 'Backend', 'Innovación y Gestión'].map((category) => (
          <section key={category} className="mb-8">
            <button className={`categoria ${categoryClasses[category]}`}>{category}</button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {videos
                .filter((video) => video.category === category)
                .map((video) => (
                  <SwiperSlide key={video.id}>
                    <Card
                      video={video}
                      onEdit={setEditingVideo}
                      onDelete={handleDelete} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </section>
        ))}
      </main>

      {editingVideo && (
        <Modal
          video={editingVideo}
          onSave={handleSave}
          onClose={() => setEditingVideo(null)} />
      )}
    </>
  );
}

export default Home;