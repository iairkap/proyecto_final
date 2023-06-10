import React from "react";
import PricingTable from "../../components/PricingTable/PricingTable";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./services.module.css";

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
      <NavBar />
      <div className={styles.ServicesContainer}>
        <div>
          <h1>Services</h1>
        </div>
        <div className={styles.plansContainer}>
          <PricingTable plan={plans} />
        </div>
      </div>
    </div>
  );
};

export default Page;
