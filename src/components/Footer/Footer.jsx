import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { useLanguage } from '../LanguageContext';

function Footer() {
  const { obtenerTraduccion } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    whatsapp: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if required fields are empty
    if (!formData.name || !formData.lastName || !formData.email || !formData.whatsapp || !formData.subject) {
      // Show an error message with SweetAlert
      Swal.fire({
        icon: 'error',
        title: obtenerTraduccion('¡Oops! Algo salió mal.'),
        text: obtenerTraduccion('Por favor, completa todos los campos.'),
      });
      return; // Exit the function if any required field is empty
    }
  
    try {
      // Construir el mensaje del correo electrónico con los datos del formulario
      const mensajeCorreo = `
        Nuevo mensaje de contacto:
        Nombre: ${formData.name}
        Apellido: ${formData.lastName}
        Correo Electrónico: ${formData.email}
        WhatsApp: ${formData.whatsapp}
        Asunto: ${formData.subject}
      `;
  
      // Envía los datos del formulario por correo electrónico
      await emailjs.send(
        'desarrolloweb',
        'template_5gwkug9',
        { message: mensajeCorreo },
        'YRbXL0fyz2xjYW-ln'
      );
  
      // Limpia el formulario después del envío
      setFormData({
        name: '',
        lastName: '',
        email: '',
        whatsapp: '',
        subject: '',
      });
  
      // Muestra un mensaje de éxito con SweetAlert
      Swal.fire({
        icon: 'success',
        title: obtenerTraduccion('¡Mensaje enviado correctamente!'),
        text: obtenerTraduccion('Nos pondremos en contacto contigo pronto.'),
      });
    } catch (error) {
      // Muestra un mensaje de error con SweetAlert si hay un problema
      Swal.fire({
        icon: 'error',
        title: obtenerTraduccion('¡Oops! Algo salió mal.'),
        text: obtenerTraduccion('Por favor, inténtalo de nuevo más tarde.'),
      });
    }
  };
  

  return (
    <>
      <div id='contacto' className="footer">
        <div>
          <h3>{obtenerTraduccion("Envíanos un correo y resolveremos todas tus dudas!")}</h3>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              {obtenerTraduccion("Nombre:")}
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              {obtenerTraduccion("Apellido:")}
              <input className='input' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <label>
              {obtenerTraduccion("Correo Electrónico:")}
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              {obtenerTraduccion("WhatsApp:")}
              <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
            </label>
            <label>
              {obtenerTraduccion("Asunto:")}
              <textarea name="subject" value={formData.subject} onChange={handleChange}></textarea>
            </label>
            <button className='btn-enviar' type="submit">{obtenerTraduccion("Enviar")}</button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;
