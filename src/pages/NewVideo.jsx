import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVideo } from '../services/api';
import './NewVideo.css';

const NewVideo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Frontend',
    image: '',
    video: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.title) errors.title = 'El título es obligatorio.';
    if (!formData.image) errors.image = 'La URL de la imagen es obligatoria.';
    if (!formData.video) errors.video = 'La URL del video es obligatoria.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createVideo(formData);
      if (result) {
        alert('Video creado exitosamente.');
        navigate('/'); // Redirige a la página principal después de guardar
      } else {
        alert('Ocurrió un error al guardar el video.');
      }
    } catch (error) {
      console.error(error);
      alert('Error al conectarse con el servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <main className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center">Nuevo Video</h1>
        <h2 className="parrafo">Complete el formulario para crear una nueva tarjeta de video</h2>
        <h3 classNanme="nuevo">Crear Tarjeta</h3>
        <form
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block font-medium text-gray-700"
            >
              Categoría
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación y Gestión">Innovación y Gestión </option>

            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium text-gray-700">
              URL de la Imagen
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block font-medium text-gray-700">
              URL del Video
            </label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.video ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            />
            {errors.video && (
              <p className="text-red-500 text-sm">{errors.video}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>
          {isSubmitting && (
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-500 h-2.5 rounded-full animate-pulse"
                style={{ width: '50%' }}
              ></div>
            </div>
          )}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              disabled={isSubmitting}
            >
              Guardar
            </button>
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  title: '',
                  category: 'Frontend',
                  video: '',
                  description: '',
                })
              }
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Limpiar
            </button>
          </div>
        </form>
      </main>

    </>
  );
};

export default NewVideo;