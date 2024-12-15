import React, { useState } from 'react';
import './Modal.css';
import { FiXCircle } from "react-icons/fi";

const Modal = ({ video, onSave, onClose }) => {
  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal">
      <button className="close-modal" onClick={onClose}><FiXCircle />

      </button>
      <h2>Editar Card</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(formData);
        }}
      > 
        <h3>Titulo</h3><input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
        />
       <h3>Categoría</h3> <select
          name="category" className="categoriaopciones"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Innovación">Innovación y Gestión </option>
        </select>
       <h3>Url de la Imagen </h3>  <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL de la Imagen"
        />
        <h3>Descripción</h3>  <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <div className="button-group">
          <button className="guardar" type="submit">Guardar</button>
          <button className="limpiar" type="button" onClick={() => setFormData(video)}>Limpiar</button>
        </div>
      </form>
    
    </div>
  );
};

export default Modal;