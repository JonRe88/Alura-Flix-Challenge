import React from 'react';
import './Card.css';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Card = ({ video, onEdit, onDelete }) => {

  return (
    <div className={`card card-${video.category.toLowerCase()}`}>

        <iframe 
          width="400px" 
          height="200px" 
          src={`https://www.youtube.com/embed/${video.videoId}?controls=0`}
          title={video.title || 'Video'}
          FrameBorder="0" 
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      <div className="actions">
        <button onClick={() => onEdit(video)}><GoPencil/>Editar</button>
        <button onClick={() => onDelete(video.id)}>Eliminar<RiDeleteBin6Line/></button>
      </div>
    </div>
  );
};

export default Card;
