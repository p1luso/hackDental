import React, { useEffect, useRef, useState } from 'react';
import styles from './progressBar.module.css';
const ProgressBar = ({ totalElements = 4, onInit }) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const step = useRef(100 / totalElements);
    const handleNextStep = () => {
        setCurrentProgress((prev) =>
            prev + step.current >= 100 ? 100 : prev + step.current
        );
    };

    useEffect(() => {
        onInit({ nextStep: handleNextStep });
        return () => onInit({});
    }, []);
    return (
        <div className={styles.progressBar}>
            <div
                className={styles.progess}
                style={{ width: `${currentProgress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
