import React from 'react';
import res from '../../assets/monitor.gif';
import opt from '../../assets/configuracion.gif';
import des from '../../assets/sensible.gif';
import exp from '../../assets/experiencia.gif';
import enfoc from '../../assets/cuestionario.gif';
import inov from '../../assets/motivacion.gif';
import ojo from '../../assets/ojo.gif';
import nav from '../../assets/navegador-web.gif';
import test from '../../assets/mockup.png';
import testEnglish from '../../assets/mockupenglish.png';

import { useLanguage } from '../LanguageContext';
import { FaAngleDoubleDown } from "react-icons/fa";
function Servicios() {
  const { idioma, obtenerTraduccion } = useLanguage();
  const testImage = idioma === 'es' ? test : testEnglish;
  return (
    <>
       <div id="servicios" className='test'>
        <img className="test-img" src={testImage} alt="Diseño web" />
      </div>


      <main className="servicios-container">


        <div className="card-servicio">

          <div className="servicios-informacion">

            
            <div>
            <div className='servicio-logo'>
              <img className="serv-logo" src={des} alt="Diseño web" />
            </div>
              <h3 className='serv-titulo'>{obtenerTraduccion("Desarrollo de Aplicaciones Web Personalizadas")}</h3>
              <p>{obtenerTraduccion("Impulsa tu presencia en línea con nuestras aplicaciones web personalizadas. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas. Desde sistemas de gestión de contenido (CMS) hasta plataformas de comercio electrónico, nuestro equipo experto combina tecnologías de vanguardia con un diseño funcional para ofrecer aplicaciones web robustas, seguras y eficientes que potencian tu negocio.")}
                
              </p>
            </div>
          </div>
        </div>

        <div className="card-servicio">

          <div className="servicios-informacion">
           
            <div>
            <div className='servicio-logo'>
              <img className="serv-logo" src={res} alt="Diseño web" />
            </div>
              <h3 className='serv-titulo'>{obtenerTraduccion("Web Responsive")}</h3>
              <p>{obtenerTraduccion("Transformamos tus ideas en experiencias digitales impactantes. Nuestro servicio de diseño web responsivo garantiza que tu sitio sea accesible y visualmente atractivo en cualquier dispositivo, desde computadoras de escritorio hasta smartphones y tabletas. Con un enfoque centrado en el usuario, creamos interfaces intuitivas y atractivas para mejorar la experiencia del usuario y maximizar la retención.")}
                
              </p>
            </div>
          </div>

        </div>

        <div className="card-servicio">

          <div className="servicios-informacion">
           
            <div>
            <div className='servicio-logo'>
              <img className="serv-logo" src={opt} alt="Diseño web" />
            </div>
              <h3 className='serv-titulo'>{obtenerTraduccion("Optimizacion de Rendimiento Web")}</h3>
              <p>{obtenerTraduccion("Haz que tu sitio web alcance su máximo potencial con nuestro servicio de optimización de rendimiento web. Nos especializamos en acelerar la velocidad de carga, mejorar el tiempo de respuesta del servidor y optimizar los recursos para una experiencia de usuario más rápida y eficiente. Desde la compresión de imágenes hasta la implementación de técnicas avanzadas de almacenamiento en caché, trabajamos para garantizar que tu sitio web funcione de manera óptima, mejore la retención de usuarios y aumente la satisfacción del cliente.")}
                
              </p>
            </div>
          </div>
          

        </div>

        <div className="card-servicio">

          <div className="servicios-informacion">
           
            <div>
            <div className='servicio-logo'>
              <img className="serv-logo" src={nav} alt="Diseño web" />
            </div>
              <h3 className='serv-titulo'>{obtenerTraduccion("Seo")}</h3>
              <p>{obtenerTraduccion("Maximiza el rendimiento de tu sitio web con nuestra optimización SEO. Aceleramos la velocidad de carga, mejoramos el tiempo de respuesta del servidor y optimizamos recursos. Desde la compresión de imágenes hasta técnicas avanzadas de almacenamiento en caché, trabajamos para ofrecer una experiencia de usuario rápida y eficiente. ¡Optimiza tu presencia en línea y destaca en los resultados de búsqueda!")}
                
              </p>
            </div>
          </div>
          

        </div>




      </main>

      <div className='elegirnos-container'>
        
      <h2 className='elegirnos-ctitulo'>{obtenerTraduccion("por que elegirnos?")} <FaAngleDoubleDown /> </h2>
      

          <div className='cardss'>


            <div className='card'>
            <div className='elegirnos-icon'>
            <img className="elegirnos-img" src={exp} alt="Diseño web" />
            </div>
            <div className='elegirnos-info'>
              <h3 className='elegirnos-titulo'>{obtenerTraduccion("Experiencia y Profesionalismo:")}</h3>
              <p>{obtenerTraduccion("DigitalPen cuenta con un equipo altamente calificado y con amplia experiencia en el desarrollo web. Nuestros profesionales están actualizados con las últimas tendencias tecnológicas y metodologías de desarrollo, lo que garantiza la entrega de productos de alta calidad.")}</p>
            </div>
            </div>


            <div className='card'>
            <div className='elegirnos-icon'>
            <img className="elegirnos-img" src={enfoc} alt="Diseño web" />
            </div>
            <div className='elegirnos-info'>
              <h3 className='elegirnos-titulo'>{obtenerTraduccion("Enfoque Personalizado:")}</h3>
              <p>{obtenerTraduccion("Nos destacamos por comprender las necesidades únicas de cada cliente. Adoptamos un enfoque personalizado en cada proyecto, asegurándonos de que nuestras soluciones se alineen perfectamente con los objetivos y valores de su empresa. Nuestra atención individualizada garantiza resultados que no solo cumplen, sino que superan las expectativas.")}</p>
            </div>
            </div>

          </div>

         <div className='cardss'>

         <div className='card'>
            <div className='elegirnos-icon'>
            <img className="elegirnos-img" src={inov} alt="Diseño web" />
            </div>
            <div className='elegirnos-info'>
              <h3 className='elegirnos-titulo'>{obtenerTraduccion("Innovación Constante:")}</h3>
              <p>{obtenerTraduccion("Mantenemos un compromiso inquebrantable con la innovación. En un mundo digital en constante evolución, ofrecemos soluciones web vanguardistas y actualizadas. Desde tecnologías emergentes hasta las últimas tendencias de diseño, nos aseguramos de que su presencia en línea sea siempre moderna y efectiva.")}</p>
            </div>
            </div>



            <div className='card'>
            <div className='elegirnos-icon'>
            <img className="elegirnos-img" src={ojo} alt="Diseño web" />
            </div>
            <div className='elegirnos-info'>
              <h3 className='elegirnos-titulo'>{obtenerTraduccion("Transparencia y Comunicación Eficiente:")}</h3>
              <p id='precios'>{obtenerTraduccion("Valoramos la transparencia en todas nuestras interacciones. Desde el inicio del proyecto hasta la entrega final, mantenemos líneas abiertas de comunicación constante. Usted estará informado en cada etapa del proceso de desarrollo, garantizando una colaboración fluida y una comprensión clara de cómo estamos trabajando para alcanzar sus metas.")}</p>
            </div>
            </div>

          </div>
          <h2  className='elegirnos-ctitulo'>{obtenerTraduccion("precios")}<FaAngleDoubleDown /> </h2>
        </div>
      

    </>
  );
}

export default Servicios;
