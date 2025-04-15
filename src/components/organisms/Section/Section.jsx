import React from "react";
import { useScrollProgress } from "../../../hooks/useScrollProgress";
import { motion } from "framer-motion";
import styles from "./section.module.css";
import Check from "@assets/check.svg";

const Section = ({
  number,
  title,
  subtitle,
  description,
  image,
  steps = [],
  paso,
  className = "",
  textLeft = false,
  lastSection = false,
}) => {
  const { progress, ref } = useScrollProgress();

  return (
    <section ref={ref} className={`${styles.section} ${className}`}>

     {!lastSection && (
        <div className={styles.verticalLine}>
          <div
            className={styles.progressLine}
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      )}

      <div className={styles.numberCircle}>
        <div className={styles.numberCircleBG}>
          <div className={styles.circle}>{number}</div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.grid} ${textLeft ? styles.reverse : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.imageContainer}
          >
            {image && <div className={styles.imageWrapper}>{image}</div>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.textContainer}
          >
            <div className={styles.paso}>{paso}</div>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            {description && <p className={styles.description}>{description}</p>}

            {steps.length > 0 && (
              <div className={styles.steps}>
                {steps.map((step, index) => (
                  <div key={index} className={styles.stepItem}>
                    <div className={styles.checkIcon}>
                      <img src={Check} className={styles.check} />
                    </div>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
