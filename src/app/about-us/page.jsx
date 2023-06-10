import React from "react";
import styles from "./about-us.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { au1, au2, au3, au4, au5, au6, au7, au8 } from "../../assets/page";
import UsContainer from "../../components/UsContainer/UsContainer";

const us = [
  {
    name: "Christian Villegas",
    github: "https://github.com/Blessed0314",
    linkedin: "",
    image: au3,
  },
  {
    name: "Ignacio Cenni",
    github: "https://github.com/ignaciocenni",
    linkedin: "",
    image: au5,
  },
  {
    name: "Jorge Acosta",
    github: "https://github.com/jacosta1111",
    linkedin: "",
    image: au1,
  },
  {
    name: "Natalia Malvicino",
    github: "https://github.com/Aafterlife17",
    linkedin: "",
    image: au4,
  },
  {
    name: "Iair Kaplun",
    github: "https://github.com/iairkap",
    linkedin: "",
    image: au8,
  },
  {
    name: "Iván Scarsella",
    github: "https://github.com/IvanScarsella",
    linkedin: "",
    image: au6,
  },
  {
    name: "Julián González",
    github: "https://github.com/Uruvsereg",
    linkedin: "",
    image: au7,
  },
  {
    name: "Michelle Díaz",
    github: "https://github.com/Michellemishna",
    linkedin: "",
    image: au2,
  },
];

const aboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Meet the team!</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptas, tempore dolores quos.
          </h3>
        </div>
        <div className={styles.UsContainer}>
          <UsContainer us={us} />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
