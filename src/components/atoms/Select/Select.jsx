import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
const Select = ({
  elements = [],
  id,
  size = "100%",
  value,
  onError,
  variant = "primary",
  icon,
  labelColor = "standard",
  listPosition = "bottom",
  onChange,
  label,
  placeholder,
  onClear = () => {},
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const btn = useRef();
  const handleChange = (value) => {
    onChange(id, value);
    setShow(false);
  };
  const handleClear = (e) => {
    onClear(id);
    setShow(false);
    e.stopPropagation();
  };
  const handleClick = () => {
    setShow((prev) => !prev);
    btn.current.focus();
  };
  const handleCloseOnBlur = (e) => {
    setShow(false);
  };
  useEffect(() => {
    onError(id, !value ? "ingrese un valor por favor" : "");
  }, [value]);
  return (
    <div
      className={`${styles[variant]} ${styles.select}`}
      style={{ width: size }}
      onBlur={handleCloseOnBlur}
    >
      {value === "" && (
        <div className={styles.errorIcon}>
          <Icon type="alert" color="var(--error)" size="1rem" />
        </div>
      )}
      {label && (
        <div className={styles.label}>
          <Text size={"sm"} bold="regular" fontSize="14px" color={labelColor}>
            {label}
          </Text>
        </div>
      )}
      <div className={styles.header} onClick={handleClick} {...otherProps}>
        <div className={styles.placeholder}>
          <Text size="ty" bold={!value && "font-light"}>
            {value || placeholder}
          </Text>
          {icon && (
            <div className={styles.icon}>
              <Icon size={"1rem"} color="#7691ad" type={icon} />
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className={`${styles.elementsList} ${styles[listPosition]}`}>
          <div className={styles.subElementList}>
            {elements.map((e) => (
              <div className={styles.hover}>
                <p style={{fontFamily:"lexend", fontWeight:"500"}} onClick={() => handleChange(e)}>{e}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
