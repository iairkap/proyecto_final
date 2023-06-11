/* id, company, name, requires, description, salary, start, end  */
import { wix, GoogleBlack, meta, windows } from "../assets/page";

const jobsTemplate = [
  {
    id: 1,
    company: "Google",
    profilePicture: GoogleBlack,
    name: "Frontend Developer",
    seniority: "Junior",
    requires: "React, Redux, CSS, HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2023-05-20",
    end: "2024-01-31",
  },
  {
    id: 2,
    company: "Wix",
    profilePicture: wix,
    name: "Backend Developer",
    seniority: "Trainee",
    requires: "Node, Express, MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2023-01-01",
    end: "2024-01-31",
  },
  {
    id: 3,
    company: "Meta",
    profilePicture: meta,
    name: "Data Scientist",
    seniority: "Senior",
    requires: "Python, Pandas, Numpy, Matplotlib",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2022-01-01",
    end: "2024-01-31",
  },
  {
    id: 4,
    company: "Windows",
    profilePicture: windows,
    name: "Fullstack Developer",
    seniority: "Senior",
    requires: "React, Redux, CSS, HTML, Node, Express, MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2022-01-01",
    end: "2024-01-31",
  },
  {
    id: 5,
    company: "Google",
    profilePicture: GoogleBlack,
    name: "Frontend Developer",
    seniority: "Junior",
    requires: "React, Redux, CSS, HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2023-05-20",
    end: "2024-01-31",
  },
  {
    id: 6,
    company: "Wix",
    profilePicture: wix,
    name: "Backend Developer",
    seniority: "Trainee",
    requires: "Node, Express, MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2023-01-01",
    end: "2024-01-31",
  },
  {
    id: 7,
    company: "Meta",
    profilePicture: meta,
    name: "Data Scientist",
    seniority: "Senior",
    requires: "Python, Pandas, Numpy, Matplotlib",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2022-01-01",
    end: "2024-01-31",
  },
  {
    id: 8,
    company: "Windows",
    profilePicture: windows,
    name: "Fullstack Developer",
    seniority: "Senior",
    requires: "React, Redux, CSS, HTML, Node, Express, MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    salary: 50000,
    start: "2022-01-01",
    end: "2024-01-31",
  },
];

export default jobsTemplate;
