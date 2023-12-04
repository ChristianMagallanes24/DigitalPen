import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser utilizado dentro de un proveedor de LanguageContext');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  // Traducciones
  const traducciones = {
    es: {
      'Enviar' : 'Enviar' ,
      'Por favor, inténtalo de nuevo más tarde.': 'Por favor, inténtalo de nuevo más tarde.',
      '¡Oops! Algo salió mal.' :  '¡Oops! Algo salió mal.',
      'Nos pondremos en contacto contigo pronto.': 'Nos pondremos en contacto contigo pronto.',
      '¡Mensaje enviado correctamente!' : '¡Mensaje enviado correctamente!',
      'Somos una agencia digital enfocada en potenciar tu negocio': 'Somos una agencia digital enfocada en potenciar tu negocio',
      'Nuestro objetivo principal es ayudarte a adaptarte a la era digital, lo cual implica mejorar y potenciar tu presencia online para alcanzar tus objetivos': 'Nuestro objetivo principal es ayudarte a adaptarte a la era digital, lo cual implica mejorar y potenciar tu presencia online para alcanzar tus objetivos',
      'Agendar una asesoría gratuita': 'Agendar una asesoría gratuita',
      'por que elegirnos?': 'por que elegirnos?',
      'Inicio': 'Inicio',
      'Servicios': 'Servicios',
      'Precios': 'Precios',
      'Contacto': 'Contacto',
      'que ofrecemos': 'que ofrecemos',
      'Desarrollo de Aplicaciones Web Personalizadas': 'Desarrollo de Aplicaciones Web Personalizadas',
      'Web Responsive': 'Web Responsive',
      'Optimizacion de Rendimiento Web': 'Optimizacion de Rendimiento Web',
      'Experiencia y Profesionalismo:': 'Experiencia y Profesionalismo',
      'Enfoque Personalizado:': 'Enfoque Personalizado',
      'Innovación Constante:': 'Innovación Constante',
      'Transparencia y Comunicación Eficiente:': 'Transparencia y Comunicación Eficiente:',
      'Seo': 'Seo',
      'Maximiza el rendimiento de tu sitio web con nuestra optimización SEO. Aceleramos la velocidad de carga, mejoramos el tiempo de respuesta del servidor y optimizamos recursos. Desde la compresión de imágenes hasta técnicas avanzadas de almacenamiento en caché, trabajamos para ofrecer una experiencia de usuario rápida y eficiente. ¡Optimiza tu presencia en línea y destaca en los resultados de búsqueda!': 'Maximiza el rendimiento de tu sitio web con nuestra optimización SEO. Aceleramos la velocidad de carga, mejoramos el tiempo de respuesta del servidor y optimizamos recursos. Desde la compresión de imágenes hasta técnicas avanzadas de almacenamiento en caché, trabajamos para ofrecer una experiencia de usuario rápida y eficiente. ¡Optimiza tu presencia en línea y destaca en los resultados de búsqueda!',
      'Impulsa tu presencia en línea con nuestras aplicaciones web personalizadas. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas. Desde sistemas de gestión de contenido (CMS) hasta plataformas de comercio electrónico, nuestro equipo experto combina tecnologías de vanguardia con un diseño funcional para ofrecer aplicaciones web robustas, seguras y eficientes que potencian tu negocio.': 'Impulsa tu presencia en línea con nuestras aplicaciones web personalizadas. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas. Desde sistemas de gestión de contenido (CMS) hasta plataformas de comercio electrónico, nuestro equipo experto combina tecnologías de vanguardia con un diseño funcional para ofrecer aplicaciones web robustas, seguras y eficientes que potencian tu negocio.',
      
      'Transformamos tus ideas en experiencias digitales impactantes. Nuestro servicio de diseño web responsivo garantiza que tu sitio sea accesible y visualmente atractivo en cualquier dispositivo, desde computadoras de escritorio hasta smartphones y tabletas. Con un enfoque centrado en el usuario, creamos interfaces intuitivas y atractivas para mejorar la experiencia del usuario y maximizar la retención.': 'Transformamos tus ideas en experiencias digitales impactantes. Nuestro servicio de diseño web responsivo garantiza que tu sitio sea accesible y visualmente atractivo en cualquier dispositivo, desde computadoras de escritorio hasta smartphones y tabletas. Con un enfoque centrado en el usuario, creamos interfaces intuitivas y atractivas para mejorar la experiencia del usuario y maximizar la retención.',

      'Haz que tu sitio web alcance su máximo potencial con nuestro servicio de optimización de rendimiento web. Nos especializamos en acelerar la velocidad de carga, mejorar el tiempo de respuesta del servidor y optimizar los recursos para una experiencia de usuario más rápida y eficiente. Desde la compresión de imágenes hasta la implementación de técnicas avanzadas de almacenamiento en caché, trabajamos para garantizar que tu sitio web funcione de manera óptima, mejore la retención de usuarios y aumente la satisfacción del cliente.': 'Haz que tu sitio web alcance su máximo potencial con nuestro servicio de optimización de rendimiento web. Nos especializamos en acelerar la velocidad de carga, mejorar el tiempo de respuesta del servidor y optimizar los recursos para una experiencia de usuario más rápida y eficiente. Desde la compresión de imágenes hasta la implementación de técnicas avanzadas de almacenamiento en caché, trabajamos para garantizar que tu sitio web funcione de manera óptima, mejore la retención de usuarios y aumente la satisfacción del cliente.',

      'DigitalPen cuenta con un equipo altamente calificado y con amplia experiencia en el desarrollo web. Nuestros profesionales están actualizados con las últimas tendencias tecnológicas y metodologías de desarrollo, lo que garantiza la entrega de productos de alta calidad.': 'DigitalPen cuenta con un equipo altamente calificado y con amplia experiencia en el desarrollo web. Nuestros profesionales están actualizados con las últimas tendencias tecnológicas y metodologías de desarrollo, lo que garantiza la entrega de productos de alta calidad.',

      'Nos destacamos por comprender las necesidades únicas de cada cliente. Adoptamos un enfoque personalizado en cada proyecto, asegurándonos de que nuestras soluciones se alineen perfectamente con los objetivos y valores de su empresa. Nuestra atención individualizada garantiza resultados que no solo cumplen, sino que superan las expectativas.': 'Nos destacamos por comprender las necesidades únicas de cada cliente. Adoptamos un enfoque personalizado en cada proyecto, asegurándonos de que nuestras soluciones se alineen perfectamente con los objetivos y valores de su empresa. Nuestra atención individualizada garantiza resultados que no solo cumplen, sino que superan las expectativas.',

      'Mantenemos un compromiso inquebrantable con la innovación. En un mundo digital en constante evolución, ofrecemos soluciones web vanguardistas y actualizadas. Desde tecnologías emergentes hasta las últimas tendencias de diseño, nos aseguramos de que su presencia en línea sea siempre moderna y efectiva.': 'Mantenemos un compromiso inquebrantable con la innovación. En un mundo digital en constante evolución, ofrecemos soluciones web vanguardistas y actualizadas. Desde tecnologías emergentes hasta las últimas tendencias de diseño, nos aseguramos de que su presencia en línea sea siempre moderna y efectiva.',

      'Valoramos la transparencia en todas nuestras interacciones. Desde el inicio del proyecto hasta la entrega final, mantenemos líneas abiertas de comunicación constante. Usted estará informado en cada etapa del proceso de desarrollo, garantizando una colaboración fluida y una comprensión clara de cómo estamos trabajando para alcanzar sus metas.': 'Valoramos la transparencia en todas nuestras interacciones. Desde el inicio del proyecto hasta la entrega final, mantenemos líneas abiertas de comunicación constante. Usted estará informado en cada etapa del proceso de desarrollo, garantizando una colaboración fluida y una comprensión clara de cómo estamos trabajando para alcanzar sus metas.',
      // Agrega más traducciones aquí según sea necesario
      'Diseño de Landing Page': 'Diseño de Landing Page',
      'Landig page': 'Landing page',
      'price': 'Precio',
      'precios': 'precios',
      'features': 'Características',
      '✅ Diseño Responsivo': '✅ Diseño Responsivo',
      '⛔ Carrito de compras': '⛔ Carrito de compras',
      '✅ Hosting': '✅ Hosting',
      '✅ Dominio Personalizado': '✅ Dominio Personalizado',
      '✅ 1 Pagina': '✅ 1 Página',
      'Solicitar informacion': 'Solicitar información',
  
      'Sitio web estático': 'Sitio web estático',
      '$800 USD': '$800 USD',
      '✅ 3 Paginas': '✅ 3 Páginas',
  
      'Tienda online': 'Tienda online',
      '$1200 USD': '$1200 USD',
      '✅ Carrito de compras': '✅ Carrito de compras',
      '✅ Catalogo de productos': '✅ Catálogo de productos',
      '✅ Proceso de pago seguro': '✅ Proceso de pago seguro',
      'Envíanos un correo y resolveremos todas tus dudas!': 'Envíanos un correo y resolveremos todas tus dudas!',
      'Nombre:' : 'Nombre:',
      'Apellido:' : 'Apellido:',
      'Correo Electrónico:' : 'Correo Electrónico:',
      'WhatsApp:' : 'WhatsApp:',
      'Asunto:' : 'Asunto:',
    },
    en: {
      'Somos una agencia digital enfocada en potenciar tu negocio': 'We are a digital agency focused on boosting your business',
      'Nuestro objetivo principal es ayudarte a adaptarte a la era digital, lo cual implica mejorar y potenciar tu presencia online para alcanzar tus objetivos': 'Our main goal is to help you adapt to the digital age, which involves improving and enhancing your online presence to achieve your goals',
      'Agendar una asesoría gratuita': 'Schedule a free consultation',
      'Inicio': 'Home',
      'Servicios': 'Services',
      'Precios': 'Prices',
      'Contacto': 'Contact',
      'que ofrecemos?': 'what we offer?',
      'por que elegirnos?': 'why choose us?',
      'Desarrollo de Aplicaciones Web Personalizadas': 'Custom Web Application Development',
      'Web Responsive': 'Responsive Web Design',
      'Optimizacion de Rendimiento Web': 'Web Performance Optimization',
      'Experiencia y Profesionalismo:': 'Experience and Professionalism',
      'Enfoque Personalizado:': 'Personalized Approach:',
      'Innovación Constante:': 'Constant Innovation',
      'Transparencia y Comunicación Eficiente:': 'Transparency and Efficient Communication',
      // Agrega más traducciones aquí según sea necesario
      'Impulsa tu presencia en línea con nuestras aplicaciones web personalizadas. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas. Desde sistemas de gestión de contenido (CMS) hasta plataformas de comercio electrónico, nuestro equipo experto combina tecnologías de vanguardia con un diseño funcional para ofrecer aplicaciones web robustas, seguras y eficientes que potencian tu negocio.': 'Boost your online presence with our custom web applications. We develop tailored solutions that adapt to your specific needs. From content management systems (CMS) to e-commerce platforms, our expert team combines cutting-edge technologies with functional design to deliver robust, secure and efficient web applications that power your business.',

      'Transformamos tus ideas en experiencias digitales impactantes. Nuestro servicio de diseño web responsivo garantiza que tu sitio sea accesible y visualmente atractivo en cualquier dispositivo, desde computadoras de escritorio hasta smartphones y tabletas. Con un enfoque centrado en el usuario, creamos interfaces intuitivas y atractivas para mejorar la experiencia del usuario y maximizar la retención.': 'We transform your ideas into impactful digital experiences. Our responsive web design service ensures your site is accessible and visually appealing on any device, from desktop computers to smartphones and tablets. With a user-centric approach, we create intuitive and engaging interfaces to improve user experience and maximize retention.',

      'Haz que tu sitio web alcance su máximo potencial con nuestro servicio de optimización de rendimiento web. Nos especializamos en acelerar la velocidad de carga, mejorar el tiempo de respuesta del servidor y optimizar los recursos para una experiencia de usuario más rápida y eficiente. Desde la compresión de imágenes hasta la implementación de técnicas avanzadas de almacenamiento en caché, trabajamos para garantizar que tu sitio web funcione de manera óptima, mejore la retención de usuarios y aumente la satisfacción del cliente.': 'Make your website reach its full potential with our web performance optimization service. We specialize in accelerating loading speed, improving server response time, and optimizing resources for a faster, more efficient user experience. From image compression to implementing advanced caching techniques, we work to ensure your website performs optimally, improves user retention and increases customer satisfaction.',

      'DigitalPen cuenta con un equipo altamente calificado y con amplia experiencia en el desarrollo web. Nuestros profesionales están actualizados con las últimas tendencias tecnológicas y metodologías de desarrollo, lo que garantiza la entrega de productos de alta calidad.': 'DigitalPen has a highly qualified team with extensive experience in web development. Our professionals are up-to-date with the latest technological trends and development methodologies, ensuring the delivery of high-quality products.',

      'Nos destacamos por comprender las necesidades únicas de cada cliente. Adoptamos un enfoque personalizado en cada proyecto, asegurándonos de que nuestras soluciones se alineen perfectamente con los objetivos y valores de su empresa. Nuestra atención individualizada garantiza resultados que no solo cumplen, sino que superan las expectativas.': 'We excel at understanding the unique needs of each client. We take a customized approach to each project, ensuring our solutions align perfectly with your company',

      'Maximiza el rendimiento de tu sitio web con nuestra optimización SEO. Aceleramos la velocidad de carga, mejoramos el tiempo de respuesta del servidor y optimizamos recursos. Desde la compresión de imágenes hasta técnicas avanzadas de almacenamiento en caché, trabajamos para ofrecer una experiencia de usuario rápida y eficiente. ¡Optimiza tu presencia en línea y destaca en los resultados de búsqueda!': 'Maximize the performance of your website with our SEO optimization. We accelerate loading speed, improve server response time and optimize resources. From image compression to advanced caching techniques, we work to deliver a fast and efficient user experience. Optimize your online presence and stand out in search results!',

      'Mantenemos un compromiso inquebrantable con la innovación. En un mundo digital en constante evolución, ofrecemos soluciones web vanguardistas y actualizadas. Desde tecnologías emergentes hasta las últimas tendencias de diseño, nos aseguramos de que su presencia en línea sea siempre moderna y efectiva.': 'We maintain an unwavering commitment to innovation. In a constantly evolving digital world, we offer cutting-edge and updated web solutions. From emerging technologies to the latest design trends, we ensure your online presence is always modern and effective.',


 'Valoramos la transparencia en todas nuestras interacciones. Desde el inicio del proyecto hasta la entrega final, mantenemos líneas abiertas de comunicación constante. Usted estará informado en cada etapa del proceso de desarrollo, garantizando una colaboración fluida y una comprensión clara de cómo estamos trabajando para alcanzar sus metas.': 'We value transparency in all our interactions. From the beginning of the project to the final delivery, we maintain open lines of constant communication. You will be informed at every stage of the development process, ensuring seamless collaboration and a clear understanding of how we are working to achieve your goals.',

 'Diseño de Landing Page': 'Landing Page Design',
 'Landig page': 'Landing page',
 'price': 'Price',
 'precios': 'prices',
 'features': 'Features',
 '✅ Diseño Responsivo': '✅ Responsive Design',
 '⛔ Carrito de compras': '⛔ Shopping Cart',
 '✅ Hosting': '✅ Hosting',
 '✅ Dominio Personalizado': '✅ Custom Domain',
 '✅ 1 Pagina': '✅ 1 Page',
 'Solicitar informacion': 'Request Information',

 'Sitio web estático': 'Static Website',
 '$800 USD': '$800 USD',
 '✅ 3 Paginas': '✅ 3 Pages',

 'Tienda online': 'Online Store',
 '$1200 USD': '$1200 USD',
 '✅ Carrito de compras': '✅ Shopping Cart',
 '✅ Catalogo de productos': '✅ Product Catalog',
 '✅ Proceso de pago seguro': '✅ Secure Payment Process',
 'Envíanos un correo y resolveremos todas tus dudas!': 'Send us an email and we will answer all your questions!',
 'Nombre:' : 'Name:',
 'Apellido:' : 'Last name:',
 'Correo Electrónico:' : 'Email:',
 'WhatsApp:' : 'WhatsApp:',
 'Asunto:' : 'Subject:',
 'Seo': 'Seo',
 '¡Mensaje enviado correctamente!' : 'Message sent succesfully!',
 'Nos pondremos en contacto contigo pronto.': 'We will contact you soon',
 '¡Oops! Algo salió mal.' : 'Oops! Something went wrong.',
 'Por favor, inténtalo de nuevo más tarde.' : 'Please try again later.',
 'Enviar' : 'Send' ,
    },
  };

  return (
    <LanguageContext.Provider value={{ idioma, cambiarIdioma, obtenerTraduccion: (key) => traducciones[idioma][key] }}>
      {children}
    </LanguageContext.Provider>
  );
};
