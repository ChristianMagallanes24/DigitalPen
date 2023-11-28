import React from 'react';
import redes from '../../assets/redes.avif';
import web from '../../assets/web.avif';

function Servicios() {
  return (
    <>
      <div id="servicios" className="servicios-titulo">
        <h3 className="titulo">⭐nuestros servicios⭐</h3>
      </div>
      <main className="servicios-container">
        <div className="redes">
          <img className="img-servicios" src={redes} alt="Diseño web" />
          <div className="servicios-informacion">
            <h3>Diseño web</h3>
            <p>
              Construimos comunidades digitales sólidas y comprometidas. Desde
              estrategias de contenido hasta la gestión diaria, aseguramos que
              tu marca destaque en plataformas como Facebook, Instagram, TikTok,
              entre otras.
            </p>
          </div>
        </div>

        <div className="web">
          <img className="img-servicios" src={web} alt="Desarrollo web" />
          <div className="servicios-informacion">
            <h3>Desarrollo web</h3>
            <p>
              Construimos comunidades digitales sólidas y comprometidas. Desde
              estrategias de contenido hasta la gestión diaria, aseguramos que
              tu marca destaque en plataformas como Facebook, Instagram, TikTok,
              entre otras.
            </p>
          </div>
        </div>
      </main>
      <div className="otros-servicios">
        <h3>Tus ideas las hacemos realidad!</h3>
      </div>
    </>
  );
}

export default Servicios;
