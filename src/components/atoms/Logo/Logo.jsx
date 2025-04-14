import React from "react";
import styles from "./styles.module.css";
import LogoImg from "@assets/Logo.svg";
import LogoImgBlanco from "@assets/Logo Blanco.svg";

const Logo = ({ color = "black" }) => {
  if (color === "black")
    return <img src={LogoImg} alt="Logo" className={styles.logo} />;
  else return <img src={LogoImgBlanco} alt="Logo" className={styles.logo} />;
};

export default Logo;
