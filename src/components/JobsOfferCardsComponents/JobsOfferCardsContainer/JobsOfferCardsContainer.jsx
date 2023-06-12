import React from "react";
import styles from "./JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";

const JobsOfferCardsContainer = ({ jobs }) => {
  const firstFiveJobs = jobs.slice(0, 4);

  return (
    <div className={styles.Container}>
      <ul style={{ maxHeight: '300px', overflowY: 'auto', color: 'gray', textShadow: 'white' }}>
        {firstFiveJobs.map((job, index) => (
          <JobsOfferCard
            key={index}
            id={job.id}
            company={job.company}
            profilePicture={job.profilePicture}
            name={job.name}
            seniority={job.seniority}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobsOfferCardsContainer;
