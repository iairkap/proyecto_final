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

// id, name, secondname, lastname, secondlastname, birth, age, working, cv, email, password, enfoque1, enfoque2, aboutme, titulos, seniority, profilePicture
const usersTemplate = [
  {
    id: 1,
    name: "Juan",
    secondname: "Pablo",
    lastname: "Perez",
    birth: "1990-01-01",
    age: 31,
    working: false,
    cv: false,
    email: "iairkap@gmail.com",
    enfoque1: "Frontend",
    enfoque2: "Backend",
    programmingLanguages: ["Javascript", "Python", "C++"],
    aboutme:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    titulos: "Universidad de Chile, Ingenieria Civil en Computacion",
    seniority: "Junior",
    profilePicture:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Mike",
    lastname: "Wazowski",
    birth: "1994-06-01",
    age: 27,
    working: false,
    cv: false,
    email: "iairkap@gmail.com",
    enfoque1: "data science",
    enfoque2: "machine learning",
    programmingLanguages: ["Python", "R", "C++"],
    aboutme:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae al",
    titulos: "Universidad de Chile, Ingenieria Civil en Computacion",
    seniority: "Senior",
    profilePicture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default jobsTemplate;
