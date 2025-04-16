import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./styles.module.css";

const PreFooterFounder = () => {
  return (
    <div className={styles.preefooter}>
      <Text color="dark" fontFamily="Lexend Medium" fontSize="28px">
      ¿TE INTERESA UNA AUDITORÍA DE MARKETING
        </Text>
        <Text type="subtitle" color="dark" bold="semibold" fontFamily="Lexend" fontSize="32px">
      100% GRATUITA?
        </Text>
        <div className={styles.subtitle}>
      <Text bold="font-light" color="dark">
      Cuéntanos sobre tu consultorio y demos el siguiente paso juntos.
      </Text>
      </div>
      <IconTextButton size="300px">Pedir auditoría</IconTextButton>
    </div>
  );
};

export default PreFooterFounder;
