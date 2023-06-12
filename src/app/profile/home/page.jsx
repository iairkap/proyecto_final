"use client";
import SearchBar from "../../../components/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../../components/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import jobsTemplate from "../../../helpers/provisionalDB";
import JobsOfferDetail from "../../../components/JobsOfferDetail/JobsOfferDetail";
import { useState } from "react";

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
      <div className={styles.jobsContainer}>
        <JobsOfferCardsContainerForHome
          jobs={jobs}
          onJobSelect={handleJobSelect}
        />
        <JobsOfferDetail job={selectedJob} />
      </div>
    </div>
  );
}
export default homePage;
