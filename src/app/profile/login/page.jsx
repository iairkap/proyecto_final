import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import Vector from "../../../images/Vector.png";
import home from "../../../images/home.svg";
import search from "../../../images/search.svg";
import notification from "../../../images/notification.svg";
import favorites from "../../../images/favorites.svg";
import google from "../../../images/google.svg";
import linkedin from "../../../images/linkedin.svg";
import github from "../../../images/github.svg";
import signinvector from "../../../images/signinvector.png";
function login(props) {
  return (
    <div>
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
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock your potential in tech!</h1>
            <h4 className={styles.subtitle}>Create an account or Sign in</h4>
          </div>
          <div className={styles.inPutsContainer}>
            <div className={styles.email}>
              <label htmlFor="email">
                <h2 className={styles.labelInput}>Email </h2>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={styles.input}
                />
              </label>
              <label htmlFor="Password">
                <h2 className={styles.labelInput}>Password </h2>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.input}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
          <button className={styles.ButtonSignIn}>Sing In</button>
          <br />
          <br />
          <div className={styles.Separator}>
            <div className={styles.line}> </div>
            <span className={styles.or}>Or</span>
            <div className={styles.line}> </div>
          </div>
          <div className={styles.ButtonAuthenticationOptions}>
            <button className={styles.ButtonAuth}>
              <Image src={google} alt="image"></Image>{" "}
            </button>
            <button className={styles.ButtonAuth}>
              <Image src={linkedin} alt="image"></Image>{" "}
            </button>
            <button className={styles.ButtonAuth}>
              <Image src={github} alt="image"></Image>{" "}
            </button>
          </div>
          <div>
            <br />
            <br />
            <button className={styles.ButtonB}>
              New to HighTech Fusion? Join now
            </button>
          </div>
        </div>
        <div className={styles.imagenContenedor}>
          <Image src={signinvector} alt="image" className={styles.Vector} />
        </div>
      </div>
    </div>
  );
}

export default login;
