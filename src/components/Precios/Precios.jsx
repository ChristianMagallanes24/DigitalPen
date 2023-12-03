// Precios.js
import React from 'react';

const Precios = () => {
  const planes = [
    {
      title: 'Plan Básico',
      price: '$499',
      features: ['Diseño Responsivo', '3 Páginas', 'Dominio Personalizado'],
      buttonLabel: 'Seleccionar',
    },
    {
      title: 'Plan Estándar',
      price: '$799',
      features: ['Diseño Responsivo', '5 Páginas', 'Dominio Personalizado', 'Hosting Incluido'],
      buttonLabel: 'Seleccionar',
    },
    {
      title: 'Plan Premium',
      price: '$1299',
      features: ['Diseño Responsivo', 'Páginas Ilimitadas', 'Dominio Premium', 'Hosting Premium'],
      buttonLabel: 'Seleccionar',
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
          <div className="precios-button-container">
            <button className="precios-button">{plan.buttonLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Precios;
