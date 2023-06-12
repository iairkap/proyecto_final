import React, { useState } from "react";
import styles from "../JobsOfferCardsContainer/JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";
import formatDate from "../../../helpers/formatDate";
import JobsOfferDetail from "../../JobsOfferDetail/JobsOfferDetail";

const JobsOfferCardsContainerForHome = ({ jobs }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const onJobSelected = (id) => {
    setSelectedJobId(id);
  };

  return (
    <div className={styles.Container}>
      <div
        style={{
          maxHeight: "572px",
          overflowY: "auto",
          display: "flex", // Asegura que el contenedor se comporte como una columna
        }}
      >
        <ul
          style={{
            flex: "1", // Permite que la lista crezca y ocupe todo el espacio restante
            color: "gray",
            textShadow: "white",
          }}
        >
          {jobs.map((job, index) => {
            const formatStart = formatDate(job.start); // Llama a formatDate aquí
            return (
              <JobsOfferCard
                key={index}
                id={job.id}
                company={job.company}
                profilePicture={job.profilePicture}
                name={job.name}
                seniority={job.seniority}
                start={formatStart}
                showSpan={true}
                onJobSelected={onJobSelected}
              />
            );
          })}
        </ul>
      </div>
      <JobsOfferDetail selectedJobId={selectedJobId} />
    </div>
  );
};

export default JobsOfferCardsContainerForHome;
