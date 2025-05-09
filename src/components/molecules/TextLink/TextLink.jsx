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
    <Link
    to={to}
    extern={extern}
    target={extern ? "_blank" : undefined} // Abre en una nueva pestaña si extern es true
    rel={extern ? "noopener noreferrer" : undefined} // Mejora la seguridad
  >
      <div
        className={`${styles[variant]} ${styles.textLink} ${
          marked && styles.marked
        }`}
      >
        <Text  fontSize="16px" fontSizeMobile="14px" {...textProps}>{children}</Text>
      </div>
    </Link>
  );
};

export default TextLink;
