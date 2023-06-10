import React from "react";
import PricingPlan from "./PricingPlan";

const PricingTable = ({ plan }) => {
  return (
    <div>
      {plan.map((plan, index) => (
        <PricingPlan key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingTable;
