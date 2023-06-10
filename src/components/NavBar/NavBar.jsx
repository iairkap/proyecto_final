import React from "react";
import Image from "next/image";
import {
  home,
  Vector,
  search,
  notification,
  favorites,
} from "../../assets/page";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.MenuContainer}>
        <Image src={Vector} alt="image" className={styles.Menu} />
        <br />
      </div>
      <div className={styles.IconsContainer}>
        <Image src={home} alt="image" className={styles.Icons} />
        <Image src={search} alt="image" className={styles.Icons} />
        <Image src={notification} alt="image" className={styles.Icons} />
        <Image src={favorites} alt="image" className={styles.Icons} />
      </div>
    </div>
  );
};

export default NavBar;
