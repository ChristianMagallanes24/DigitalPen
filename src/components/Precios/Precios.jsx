import React from 'react';
import { useLanguage } from '../LanguageContext';

const Precios = () => {
  const { obtenerTraduccion } = useLanguage();

  const planes = [
    {
      title: obtenerTraduccion('Landig page'),
      price: '$500 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('⛔ Carrito de compras'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
        obtenerTraduccion('✅ 1 Pagina'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar informacion'),
    },
    {
      title: obtenerTraduccion('Sitio web estático'),
      price: '$800 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('⛔ Carrito de compras'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
        obtenerTraduccion('✅ 3 Paginas'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar informacion'),
    },
    {
      title: obtenerTraduccion('Tienda online'),
      price: '$1200 USD',
      features: [
        obtenerTraduccion('✅ Diseño Responsivo'),
        obtenerTraduccion('✅ Carrito de compras'),
        obtenerTraduccion('✅ Catalogo de productos'),
        obtenerTraduccion('✅Proceso de pago seguro'),
        obtenerTraduccion('✅ Hosting'),
        obtenerTraduccion('✅ Dominio Personalizado'),
      ],
      buttonLabel: obtenerTraduccion('Solicitar informacion'),
    },
  ];

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
          <button className="precios-button">{plan.buttonLabel}</button>
        </div>
      ))}
    </div>
  );
};

export default Precios;
