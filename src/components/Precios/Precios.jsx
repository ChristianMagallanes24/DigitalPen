import React from 'react';
import { useLanguage } from '../LanguageContext';

const Precios = () => {
  const { obtenerTraduccion } = useLanguage();
  const phoneNumber = '+59897068041';

  const planes = [
    {
      title: obtenerTraduccion('Landig page'),
      price: '$300 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('⛔ Carrito de compras'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
        obtenerTraduccion('✅ 1 Página'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar información'),
    },
    {
      title: obtenerTraduccion('Sitio web estático'),
      price: '$800 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('⛔ Carrito de compras'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
        obtenerTraduccion('✅ 3 Páginas'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar información'),
    },
    {
      title: obtenerTraduccion('Tienda online'),
      price: '$1200 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('✅ Carrito de compras'),
        obtenerTraduccion('✅ Catálogo de productos'),
        obtenerTraduccion('✅ Proceso de pago seguro'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar información'),
    },
  ];

  const handleWhatsAppClick = (plan) => {
    const message = encodeURIComponent(`Buenas, quisiera obtener más información sobre el plan ${plan.title}. Precio: ${plan.price}. Características: ${plan.features.join(', ')}.`);
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="precios-card-container">
      {planes.map((plan, index) => (
        <div key={index} className="precios-card">
          <div className="precios-card-title">{plan.title}</div>
          <div className="precios-card-price">{plan.price}</div>
          <div className="precios-card-features">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="precios-feature">
                {feature}
              </div>
            ))}
          </div>
          <button className="precios-button" onClick={() => handleWhatsAppClick(plan)}>
            Solicitar información
          </button>

        </div>
      ))}
    </div>
  );
};

export default Precios;
