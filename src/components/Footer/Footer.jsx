import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Footer() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envía los datos del formulario por correo electrónico
    emailjs.send(
      'desarrolloweb',  // Reemplaza con tu Service ID
      'template_5gwkug9',  // Reemplaza con tu Template ID
      formData,
      'YRbXL0fyz2xjYW-ln'  // Reemplaza con tu User ID
    );

    // Limpia el formulario después del envío
    setFormData({
      name: '',
      lastName: '',
      email: '',
      whatsapp: '',
      subject: '',
    });
  };

  return (
    <>
      <div id='contacto' className="footer">
        <div>
          <h3>Envíanos un correo y resolveremos todas tus dudas!</h3>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input className='input' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <label>
              Correo Electrónico:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              WhatsApp:
              <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
            </label>
            <label>
              Asunto:
              <textarea name="subject" value={formData.subject} onChange={handleChange}></textarea>
            </label>
            <button className='btn-enviar' type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;
