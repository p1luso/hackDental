import React from "react";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
import styles from "./styles.module.css";
const TextLink = ({
  to,
  extern,
  variant = "primary",
  textProps,
  marked = false,
  children,
}) => {
  return (
    <Link to={to} extern={extern}>
      <div
        className={`${styles[variant]} ${styles.textLink} ${
          marked && styles.marked
        }`}
      >
        <Text {...textProps}>{children}</Text>
      </div>
    </Link>
  );
};

export default TextLink;
