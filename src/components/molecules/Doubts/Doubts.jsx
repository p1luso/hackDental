import React, { useState } from "react";
import styles from "./doubts.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../IconTextButton/IconTextButton";
import FlechaAbajo from "@assets/flechaAbajo.svg";
import { style } from "framer-motion/client";

const Doubts = ({ title, content }) => {
  const [faqExpanded, setFaqExpanded] = useState(false);

  return (
    <div className={styles.faqContainer}>
      <div
        className={styles.faqHeader}
        onClick={() => setFaqExpanded(!faqExpanded)}
      >
        <Text className={styles.faqTitle}>
          {title}
        </Text>
        <div className={styles.faqArrow}>
        <img 
          src={FlechaAbajo}
          className={`${styles.faqArrow} ${faqExpanded ? styles.expanded : ""}`}
          alt="flecha abajo"
        />
        </div>
      </div>
      <div
        className={`${styles.faqContent} ${faqExpanded ? styles.expanded : ""}`}
      >
        <Text className={styles.faqText}>
          {content}
        </Text>
      </div>
    </div>
  );
};

export default Doubts;
