import React from "react";
import styles from "./drawer.module.css";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
const Drawer = ({ show, children, onClose, renderCloBtn, hideLogo }) => {
  return (
    <div
      className={`${styles.drawer} ${show && styles.show}`}
      onClick={onClose}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          {hideLogo ? (
            <div></div>
          ) : (
            <div className={styles.logo}>
              <Logo color="white" />
            </div>
          )}
          <div className={styles.close} onClick={onClose}>
            {renderCloBtn || (
              <Icon size="1.8rem" type={"close"} color="white" />
            )}
          </div>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
