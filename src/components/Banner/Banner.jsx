import React from 'react';
import './Banner.css';

const Banner = () => (
  <section className="banner">
    <div className="txtContainer">
      <button className="btnfront">Frontend</button>
      <h1>Challenge React</h1>
      <p>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
        comprometerte en la resolución de un problema para poder aplicar todos
        los conocimientos adquiridos en la formación React.
      </p>
    </div>
    <div className="videoContainer">
    <div className="videoSection">
      <iframe 
        width="460" 
        height="215" 
        src="https://www.youtube.com/embed/ov7vA5HFe6w?si=a1QhUFPgisnveTCl" 
        title="YouTube video player" 
        frameborder="10" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
    </div>
  </section>
);

export default Banner;