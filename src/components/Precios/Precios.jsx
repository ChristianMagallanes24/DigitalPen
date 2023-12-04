// Precios.js

import React from 'react';

const Precios = () => {
  const planes = [
    {
      title: 'Landig page',
      price: '$500 USD',
      features: ['✅ Diseño Responsivo','⛔ Carrito de compras', '✅ Hosting','✅ Dominio Personalizado', '✅ 1 Pagina'],
      buttonLabel: 'Solicitar informacion',
    },
    {
      title: 'Sitio web estático',
      price: '$800 USD',
      features: ['✅ Diseño Responsivo','⛔ Carrito de compras','✅ Hosting','✅ Dominio Personalizado', '✅ 3 Paginas'],
      buttonLabel: 'Solicitar informacion',
    },
    {
      title: 'Tienda online',
      price: '$1200 USD',
      features: ['✅ Diseño Responsivo', '✅ Carrito de compras','✅ Catalogo de productos','✅Proceso de pago seguro', '✅ Hosting','✅ Dominio Personalizado'],
      buttonLabel: 'Solicitar informacion',
    },
  ];

  return (
    <div  className="precios-card-container">
        
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
         
          
            <button className="precios-button">{plan.buttonLabel}</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Precios;
