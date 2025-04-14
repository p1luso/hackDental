import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
const Dropdown = ({ children, title }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={() => setShow((prev) => !prev)}>
        <Text bold="font-bold" size="sm">
          {title}
        </Text>
        <span className={`${styles.icon} ${show && styles.inverted}`}>
          <Icon color="var(--black)" type={"arrowDown"} size={"2rem"} />
        </span>
      </div>

      <div className={`${styles.content} ${show && styles.show}`}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
