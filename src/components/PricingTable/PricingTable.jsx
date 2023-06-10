import React from "react";
import PricingPlan from "../pricingPlan/pricingPLan";
import styles from "./pricingTable.module.css";

const PricingTable = ({ plan }) => {
  return (
    <div className={styles.Container}>
      {plan.map((plan, index) => (
        <PricingPlan key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingTable;
