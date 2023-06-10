import React from "react";

const PricingPlan = ({ plan }) => {
  return (
    <div>
      <h2>{plan.title}</h2>
      <h2>{plan.price}</h2>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Seleccionar</button>
    </div>
  );
};

export default PricingPlan;
