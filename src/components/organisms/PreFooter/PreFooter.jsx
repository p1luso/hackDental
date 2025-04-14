import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";

import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../../constants/routes";
import PartnersCarousel from "../PartnersCarousel/PartnersCarousel";
const PreFooter = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <section className={styles.banner}>
        <Text
          type="subtitle"
          color="black"
          textAlign="center"
          bold="semibold"
          s={{ lineHeight: "1.3" }}
        >
          En HackDental utilizamos las mejores <br /> herramientas de Marketing
        </Text>
        <Text color="black" size="sm" bold="font-light">
          Pide una auditoría para tu consultorio dental, es 100% gratis
        </Text>
        <PartnersCarousel />
        <div className={styles.btn}>
          <IconTextButton colorVariant="primary" variant="bordered" size="100%">
            Ver programa
          </IconTextButton>
        </div>
      </section>
      <section className={styles.prefooterContainer}>
        <section className={styles.preFooter}>
          <div className={styles.desc}>
            <Text
              type="subtitle"
              color="black"
              textAlign="center"
              bold="semibold"
            >
              Impulsemos tu Clínica Dental, Juntos
            </Text>
            <Text color="black" size="sm" bold="font-light">
              Pide una auditoría para tu consultorio dental, es 100% gratis
            </Text>
            <div className={styles.btn}>
              <IconTextButton
                size="100%"
                onClick={() => navigate(CONTACT_FORM)}
              >
                Solicita una reunión
              </IconTextButton>
            </div>
          </div>
          {/*  <img className={styles.preFooterImg} src={PreFooterImg} /> */}
        </section>
      </section>
    </div>
  );
};

export default PreFooter;
