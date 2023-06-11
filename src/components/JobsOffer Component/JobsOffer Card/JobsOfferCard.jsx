import react from "react";
import styles from "./JobsOfferCard.module.css";
import Image from "next/image";
import Link from "next/link";

const JobsOfferCard = ({ id, company, profilePicture, name, seniority }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.InfoContainer}>
        <div className={styles.CompanyNameContainer}>
          <Image src={profilePicture} alt="imagen" className={styles.image} />
          <span className={styles.span}>{company}</span>
        </div>
        <h1 className={styles.CompanyTitle}> {name} </h1>
        <span className={styles.span}> {seniority} </span>
      </div>
      <div className={styles.contenedorButton}>
        <Link href={`/profile/login`}>
          <button className={styles.button}>Apply!</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsOfferCard;
