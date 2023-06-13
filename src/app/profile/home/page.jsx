"use client";
import SearchBar from "../../../components/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../../components/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import jobsTemplate from "../../../helpers/provisionalDB";
import JobsOfferDetail from "../../../components/JobsOfferDetail/JobsOfferDetail";
import React, { useState } from "react";
import SelectsContainer from "../../../components/SelectContainer/SelectContainer";

const jobs = jobsTemplate;
function homePage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (jobId) => {
    const jobDetail = jobs.find((job) => job.id === jobId);
    setSelectedJob(jobDetail);
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <br />
      <SelectsContainer />
      <div className={styles.jobsContainer}>
        <JobsOfferCardsContainerForHome
          jobs={jobs}
          onJobSelect={handleJobSelect}
        />
        <JobsOfferDetail job={selectedJob} className={styles.detailContainer} />
      </div>
    </div>
  );
}
export default homePage;
