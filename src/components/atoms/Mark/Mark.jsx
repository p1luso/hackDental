import React from "react";
import styles from "./mark.module.css";
const Mark = ({ children, color = "dark", bold = "semibold" }) => {
  return (
    <span className={`${styles.mark} ${styles[color]} ${styles[bold]}`}>
      {children}
    </span>
  );
};

export default Mark;
