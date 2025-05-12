import React, { useEffect, useState } from 'react';
import styles from "./daysCounter.module.css";

const DaysCounter = ({ targetDate, numberBoxes = false }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      {numberBoxes ? (
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            <div className={styles.box}>
              {timeLeft.days}
              <div className={styles.label}>Días</div>
            </div>
          </div>
          <span className={styles.separators}>:</span>
          <div className={styles.boxItem}>
            <div className={styles.box}>
              {timeLeft.hours}
              <div className={styles.label}>Horas</div>
            </div>
          </div>
          <span className={styles.separators}>:</span>
          <div className={styles.boxItem}>
            <div className={styles.box}>
              {timeLeft.minutes}
              <div className={styles.label}>Mins</div>
            </div>
          </div>
          <span className={styles.separators}>:</span>
          <div className={styles.boxItem}>
            <div className={styles.box}>
              {timeLeft.seconds}
              <div className={styles.label}>Segs</div>
            </div>
          </div>
        </div>
      ) : (
        <span className={styles.text}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      )}
    </div>
  );
};

export default DaysCounter;