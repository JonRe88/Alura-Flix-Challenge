import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import Modal from '../components/Modal';
import { COLORS } from '../styles/colors';

// Sample data with video URLs and thumbnails
const initialVideos = {
  frontend: [
    {
      id: '1',
      title: 'Cuándo usar let, var y const?',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=PztCEdIJITY&t=406s',
      description: '¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.',
    },
    // ... (rest of the initial videos)
  ],
  backend: [
    // ... (backend videos)
  ],
  innovation: [
    // ... (innovation videos)
  ],
};

export default function Home() {
  const [videos, setVideos] = useState(initialVideos);
  const [editingVideo, setEditingVideo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load videos from localStorage on component mount
  useEffect(() => {
    const savedVideos = localStorage.getItem('videos');
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  const handleEditVideo = (id: string) => {
    const video = Object.values(videos)
      .flat()
      .find((v) => v.id === id);
    setEditingVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = (id: string) => {
    const updatedVideos = Object.fromEntries(
      Object.entries(videos).map(([category, categoryVideos]) => [
        category,
        categoryVideos.filter(video => video.id !== id)
      ])
    );
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const handleSaveVideo = (data: any) => {
    const updatedVideos = { ...videos };

    // Remove the video from its old category if it exists
    if (editingVideo) {
      updatedVideos[editingVideo.category] = updatedVideos[editingVideo.category].filter(
        (video: any) => video.id !== editingVideo.id
      );
    }

    // Add the video to its new category
    if (!updatedVideos[data.category]) {
      updatedVideos[data.category] = [];
    }
    updatedVideos[data.category].push(data);

    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    setIsModalOpen(false);
    setEditingVideo(null);
  };

  return (
    <div>
      <Banner />
      {Object.entries(videos).map(([category, categoryVideos]) => (
        <div key={category} className="uppercase max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategorySection
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            color={COLORS[category.toUpperCase()]}
            videos={categoryVideos}
            onEditVideo={handleEditVideo}
            onDeleteVideo={handleDeleteVideo}
            category={category}
          />
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoData={editingVideo}
        onSave={handleSaveVideo}
      />
    </div>
  );
}