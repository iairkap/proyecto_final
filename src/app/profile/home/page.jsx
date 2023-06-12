import SearchBar from "../../../components/SearchBar/searchBar";
import JobsOfferCardsContainer from "../../../components/JobsOfferCardsComponents/JobsOfferCardsContainer/JobsOfferCardsContainer";
import styles from "./homePage.module.css";
import jobsTemplate from "../../../helpers/provisionalDB";

const jobs = jobsTemplate;

function homePage() {
  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <JobsOfferCardsContainer jobs={jobs} />
    </div>
  );
}

export default homePage;
