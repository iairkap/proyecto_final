import React from "react";
import PricingTable from "../../../components/PricingTable";

const plans = [
  {
    title: "Básico",
    price: 29,
    features: ["ABC", "DEF", "GHI"],
  },
  {
    title: "Intermedio",
    price: 99,
    features: ["ABC", "DEF", "GHI"],
  },
  {
    title: "Avanzado",
    price: 199,
    features: ["ABC", "DEF", "GHI"],
  },
];

const Page = () => {
  return (
    <div>
      <h1>Nuestros Planes</h1>
      <PricingTable plan={plans} />
    </div>
  );
};

export default Page;
