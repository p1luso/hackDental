import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./styles.module.css";

const PreFooterFounder = () => {
  return (
    <div className={styles.preefooter}>
      <Text color="black-lighter" fontFamily="Lexend Medium" fontSize="24px" fontSizeMobile="18px" s={{lineHeight: "1.2"}}>
      ¿Te interesa una auditoria de marketing
        </Text>
        <Text type="subtitle" color="black-lighter" bold="semibold" fontFamily="Lexend" s={{lineHeight: "1.2"}} fontSize="28px" fontSizeMobile="21px">
      100% gratuita?
        </Text>
        <div className={styles.subtitle}>
      <Text bold="font-light" color="black-lighter">
      Cuéntanos sobre tu consultorio y demos el siguiente paso juntos.
      </Text>
      </div>
      <IconTextButton colorVariant="primary-optional" size="300px">Pedir auditoría</IconTextButton>
    </div>
  );
};

export default PreFooterFounder;
