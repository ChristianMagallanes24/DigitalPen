import React from 'react';
import res from '../../assets/monitor.gif';
import opt from '../../assets/configuracion.gif';
import des from '../../assets/sensible.gif';
import test from '../../assets/mockup.png';

function Servicios() {
  return (
    <>
      <div id="servicios" className='test'>
        <img className="test-img" src={test} alt="Diseño web" />
      </div>


      <main className="servicios-container">


        <div className="card-servicio">

          <div className="servicios-informacion">

            <div className='servicio-logo'>
              <img className="serv-logo" src={des} alt="Diseño web" />
            </div>
            <div>
              <h3 className='serv-titulo'>Desarrollo de Aplicaciones Web Personalizadas</h3>
              <p>
                Impulsa tu presencia en línea con nuestras aplicaciones web personalizadas. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas. Desde sistemas de gestión de contenido (CMS) hasta plataformas de comercio electrónico, nuestro equipo experto combina tecnologías de vanguardia con un diseño funcional para ofrecer aplicaciones web robustas, seguras y eficientes que potencian tu negocio.
              </p>
            </div>
          </div>
        </div>

        <div className="card-servicio">

          <div className="servicios-informacion">
            <div className='servicio-logo'>
              <img className="serv-logo" src={res} alt="Diseño web" />
            </div>
            <div>
              <h3 className='serv-titulo'>Web Responsive</h3>
              <p>
                Transformamos tus ideas en experiencias digitales impactantes. Nuestro servicio de diseño web responsivo garantiza que tu sitio sea accesible y visualmente atractivo en cualquier dispositivo, desde computadoras de escritorio hasta smartphones y tabletas. Con un enfoque centrado en el usuario, creamos interfaces intuitivas y atractivas para mejorar la experiencia del usuario y maximizar la retención.
              </p>
            </div>
          </div>

        </div>

        <div className="card-servicio">

          <div className="servicios-informacion">
            <div className='servicio-logo'>
              <img className="serv-logo" src={opt} alt="Diseño web" />
            </div>
            <div>
              <h3 className='serv-titulo'>Optimizacion de Rendimiento Web</h3>
              <p>
                Haz que tu sitio web alcance su máximo potencial con nuestro servicio de optimización de rendimiento web. Nos especializamos en acelerar la velocidad de carga, mejorar el tiempo de respuesta del servidor y optimizar los recursos para una experiencia de usuario más rápida y eficiente. Desde la compresión de imágenes hasta la implementación de técnicas avanzadas de almacenamiento en caché, trabajamos para garantizar que tu sitio web funcione de manera óptima, mejore la retención de usuarios y aumente la satisfacción del cliente.
              </p>
            </div>
          </div>

        </div>



      </main>

      <div className='elegirnos-container'>
        <h2>por que elegirnos?</h2>

        <div className='cards-container'>

          <div className='cardss'>


            <div className='card'>
            <div>
            img1
            </div>
            <div>
              <h3>Experiencia y Profesionalismo:</h3>
              <p>DigitalPen cuenta con un equipo altamente calificado y con amplia experiencia en el desarrollo web. Nuestros profesionales están actualizados con las últimas tendencias tecnológicas y metodologías de desarrollo, lo que garantiza la entrega de productos de alta calidad.</p>
            </div>
            </div>


            <div className='card'>
            <div>
            img1
            </div>
            <div>
              <h3>
              Enfoque Personalizado: 
              </h3>
              <p>
              ntendemos que cada empresa es única, por lo que ofrecemos soluciones personalizadas para satisfacer las necesidades específicas de nuestros clientes. Trabajamos de cerca con cada cliente para comprender sus objetivos y diseñar soluciones web que impulsen su crecimiento y éxito en línea.
              </p>
            </div>
            </div>
          </div>

         <div className='cardss'>
            <div className='card'>
            <div>
            img2
            </div>
            <div>
              <h3>
              Tecnología Innovadora:
              </h3>
              <p>
              En DigitalPen, nos mantenemos a la vanguardia de la tecnología. Utilizamos las últimas herramientas y tecnologías de desarrollo web para asegurarnos de que los sitios web que creamos sean modernos, rápidos, seguros y completamente funcionales. Esto garantiza una experiencia óptima para los usuarios finales.
              </p>
            </div>
            </div>


            <div className='card'>
            <div>
           img3
            </div>
            <div>
              <h3>
              Compromiso con la Calidad: 
              </h3>
              <p>
              La calidad es una prioridad en cada etapa del desarrollo. Realizamos pruebas exhaustivas para garantizar que los sitios web sean robustos, seguros y cumplan con los estándares de rendimiento. Nos esforzamos por entregar productos finales que no solo satisfacen, sino que superan las expectativas de nuestros clientes.
              </p>
            </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Servicios;
