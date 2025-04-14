import React, { useState } from "react";
import styles from "./radioButton.module.css";

const RadioButton = ({ id, name, onChange, label = "", ...otherProps }) => {
  const handleCheck = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <div className={styles.radioContainer}>
      <div className={styles.radio}>
        <input
          type="radio"
          name={name}
          id={id}
          onChange={handleCheck}
          className={styles.radioInput}
          {...otherProps}
        />
        <div className={styles.checked}></div>
      </div>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default RadioButton;
