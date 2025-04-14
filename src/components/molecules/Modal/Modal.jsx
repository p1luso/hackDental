import React from "react";
import styles from "./modal.module.css";
import IconButton from "../IconButton/IconButton";
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div
      className={`${styles.modal} ${isOpen && styles.show}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modalContent} ${isOpen && styles.show}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <IconButton icon="close" size="1.5rem" onClick={onClose} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Modal;
