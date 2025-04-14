import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./iconTextButton.module.css";
import Icon from "../../atoms/Icon/Icon";
const IconTextButton = ({
  variant = "full",
  size = "auto",
  textProps,
  colorVariant = "primary",
  icon,
  onClick,
  children,
  ...otherProps
}) => {
  return (
    <button
      style={{ width: size, height: "100%" }}
      className={`${styles[colorVariant]} ${styles.iconTextButton} ${styles[variant]}`}
      onClick={onClick}
      {...otherProps}
    >
      {icon && <Icon size={"1.5rem"} type={icon} />}
      <Text {...textProps} color="inherit">
        {children}
      </Text>
    </button>
  );
};

export default IconTextButton;
