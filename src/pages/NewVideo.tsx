import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import VideoForm from '../components/VideoForm';

export default function NewVideo() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const videoData = {
      id: crypto.randomUUID(),
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      videoUrl: formData.get('videoUrl') as string,
      description: formData.get('description') as string,
    };

    // Get existing videos from localStorage or initialize empty object
    const existingVideos = JSON.parse(localStorage.getItem('videos') || '{}');
    
    // Add new video to appropriate category
    if (!existingVideos[videoData.category]) {
      existingVideos[videoData.category] = [];
    }
    existingVideos[videoData.category].push(videoData);
    
    // Save back to localStorage
    localStorage.setItem('videos', JSON.stringify(existingVideos));

    // Show success message
    setShowSuccess(true);

    // Redirect to home after delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="max-w-3xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Check className="h-5 w-5" />
          Video creado exitosamente
        </div>
      )}
      <h1 className="text-3xl text-white font-bold mb-8">NUEVO VIDEO</h1>
      <VideoForm onSubmit={handleSubmit} submitLabel="Crear Video" />
    </div>
  );
}