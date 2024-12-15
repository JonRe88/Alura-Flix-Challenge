import { staticVideos } from './staticData.js';

const USE_MOCK_DATA = true; // Siempre true para usar datos estáticos
const API_BASE_URL = ''; // No se necesita para datos estáticos
export const fetchVideos = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(staticVideos.videos), 500));
};

export const deleteVideo = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = staticVideos.videos.findIndex((video) => video.id === id);
      if (index !== -1) {
        staticVideos.videos.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
};

export const updateVideo = async (video) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = staticVideos.videos.findIndex((v) => v.id === video.id);
      if (index !== -1) {
        staticVideos.videos[index] = { ...staticVideos.videos[index], ...video };
        resolve(staticVideos.videos[index]);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const createVideo = async (videoData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newVideo = {
        ...videoData,
        id: staticVideos.videos.length + 1
      };
      staticVideos.videos.push(newVideo);
      resolve(newVideo);
    }, 500);
  });
};
export const categoryClasses = {
  'Frontend': 'Frontend',
  'Backend': 'Backend',
  'Innovación y Gestión': 'Innovacion',
};
