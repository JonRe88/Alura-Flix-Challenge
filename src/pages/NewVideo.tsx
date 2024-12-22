import React from 'react';
import VideoForm from '../components/VideoForm';

export default function NewVideo() {
  const handleSubmit = (data: any) => {
    // Implement submit functionality
    console.log('Submit new video:', data);
  };

  return (
    <div className="max-w-3xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl text-white font-bold mb-8">NUEVO VIDEO</h1>
      <VideoForm onSubmit={handleSubmit} submitLabel="Crear Video" />
    </div>
  );
}