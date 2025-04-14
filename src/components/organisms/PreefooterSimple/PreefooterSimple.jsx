import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./styles.module.css";
const PreefooterSimple = () => {
  return (
    <div className={styles.preefooter}>
      <Text type="subtitle" color="dark" bold="semibold">
        Impulsemos tu Clínica, Juntos
      </Text>

      <Text bold="font-light" color="dark">
        Te ayudamos con una auditoría 100% gratuita
      </Text>

      <IconTextButton size="300px">Pedir auditoría</IconTextButton>
    </div>
  );
};

export default PreefooterSimple;
