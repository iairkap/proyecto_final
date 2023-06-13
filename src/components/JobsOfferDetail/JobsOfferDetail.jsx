import Image from "next/image";
import Link from "next/link";
import styles from "./JobsOfferDetail.module.css";
import jobsTemplate from "../../helpers/provisionalDB";
import { useEffect, useState } from "react";

const JobsOfferDetail = ({ selectedJobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (selectedJobId) {
      const jobDetail = jobsTemplate.find(
        (job) => job.id === Number(selectedJobId)
      );
      setJob(jobDetail);
    }
  }, [selectedJobId]);

  if (!job) {
    return <div>Hola soy el contenedor!</div>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.InfoContainer}>
        <div className={styles.CompanyNameContainer}>
          <Image
            src={job.profilePicture}
            alt="imagen"
            className={styles.image}
          />
          <span className={styles.span}>{job.company}</span>
        </div>
        <h1 className={styles.CompanyTitle}> {job.name} </h1>
        <span className={styles.span}> {job.seniority} </span>
      </div>
      <div className={styles.contenedorButton}>
        <Link href={`/profile/login`}>
          <button className={styles.button}>Apply!</button>
        </Link>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.requires}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.description}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.salary}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.end}</span>
      </div>
    </div>
  );
};

export default JobsOfferDetail;
