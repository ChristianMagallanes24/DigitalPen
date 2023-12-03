// Precios.js

import React from 'react';

const Precios = () => {
  const planes = [
    {
      title: 'Landig page',
      price: '$500',
      features: ['✅ Diseño Responsivo', '✅ Hosting','✅ Dominio Personalizado', 'Hosting Incluido','✅ 1 Pagina'],
      buttonLabel: 'Seleccionar',
    },
    {
      title: 'Plan Estándar',
      price: '$800',
      features: ['✅ Diseño Responsivo','✅ Hosting','✅ Dominio Personalizado', 'Hosting Incluido','✅ 5 Paginas'],
      buttonLabel: 'Seleccionar',
    },
    {
      title: 'Tienda online',
      price: '$1200',
      features: ['✅ Diseño Responsivo', '✅ Hosting','✅ Dominio Personalizado', 'Hosting Incluido','✅ Catalogo de productos'],
      buttonLabel: 'Seleccionar',
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
