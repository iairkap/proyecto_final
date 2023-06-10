import React from "react";
import styles from "./pricingPlan.module.css";

const PricingPlan = ({ plan }) => {
  return (
    <div>
      <div className={styles.Contenedor}>
        <h1 className={styles.title}>{plan.title}</h1>
        <h2>{plan.price}</h2>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button>Seleccionar</button>
      </div>
    </div>
  );
};

export default PricingPlan;
