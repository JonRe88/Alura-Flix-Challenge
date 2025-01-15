import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SnowEffect from './components/SnowEffect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <SnowEffect />
    <App />
  </StrictMode>
);
