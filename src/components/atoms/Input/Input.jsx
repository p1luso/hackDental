import React, { useEffect, useRef, useState } from "react";
import styles from "./input.module.css";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const Input = ({
  id,
  onChange,
  onError,
  variant = "primary",
  label = "",
  labelColor = "standard",
  icon,
  size = "100%",
  errorMsg = "",
  setFocus = false,
  validators = [],
  onEnterPressed = () => {},
  ...otherProps
}) => {
  const input = useRef(null);

  const handleChange = (e) => {
    onChange(id, e.target.value);
    handleError(e.target.value);
  };

  const handleError = (value) => {
    let error = "";
    for (const validator of validators) {
      error = validator(value);
      if (error) break;
    }

    onError(id, error);
  };
  useEffect(() => {
    if (setFocus) input.current.focus();
    else input.current.blur();
  }, []);
  return (
    <div
      className={`${styles[variant]} ${styles.container} ${
        errorMsg ? styles.error : ""
      }`}
    >
      {icon && (
        <div className={styles.icon}>
          <Icon type={icon} size={"1.4rem"} />
        </div>
      )}

      {label && (
        <div className={styles.label}>
          <Text
            size={"sm"}
            bold="font-light"
            color={errorMsg ? "error" : labelColor}
          >
            {label}
          </Text>
        </div>
      )}
      <input
        ref={input}
        style={{ width: size }}
        className={styles.input}
        id={id}
        onKeyDown={(e) => {
          e.key === "Enter" && onEnterPressed();
        }}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
