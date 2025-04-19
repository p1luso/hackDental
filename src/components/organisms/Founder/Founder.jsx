import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./founder.module.css";
import PreefooterSimple from "../PreefooterSimple/PreefooterSimple";
import FounderImage from "@assets/FounderImage.svg";
import FounderImageMobile from "@assets/FounderImageMobile.svg";
import PreFooter from "../PreFooter/PreFooter";
import { px } from "framer-motion";
import Icon from "../../atoms/Icon/Icon";

const Founder = () => {
  return (
    <div>
      <section className={styles.spainLocation}>
        <div className={styles.founderContainer}>
          <div className={styles.contentContainer}>
          <div className={styles.mobileTitles}>
                <Text
                  type="bigtitle"
                  textAlign="center"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "500" }}
                >
                  Conoce a Jose Whittembury
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="center"
                  color="black"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  Fundador y CEO de HackDental
                </Text>
              </div>
            <div className={styles.imageWrapper}>
              <img id={styles.founderImg} src={FounderImage} />
              <img id={styles.founderImgMobile} src={FounderImageMobile} />
              <div className={styles.disponibilityBox}>
                <span className={styles.badge}>1</span>
                <Text color="white" fontSize="16px" bold="font-light">
                  Disponibilidad actual
                </Text>
                <Text color="white" fontSize="16px" bold="font-light">
                  <strong>10 clínicas en España</strong>
                </Text>
              </div>
            </div>
            <div className={styles.founderText}>
              <div className={styles.desktopTitles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "500" }}
                >
                  Conoce a Jose Whittembury
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="black"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  Fundador y CEO de HackDental
                </Text>
              </div>
              <Text fontFamily="Lexend" color="black-lighter" bold="font-light">
                <i>
                  "Me dedico única y exclusivamente al marketing de servicios
                  dentales en España."
                </i>
              </Text>
              <Text fontFamily="Lexend" color="black-lighter" bold="font-light">
                <strong>Contáctame</strong> si te interesa lo siguiente:
              </Text>
              <div className={styles.beneficios}>
                <Icon
                  size={"1.3rem"}
                  color="var(--primary-darker)"
                  type={"check"}
                />
                <Text color="black-lighter" fontSize="18px" bold="font-light">
                  <strong>
                    Reuniones semanales contigo y tu personal del consultorio.
                  </strong>
                </Text>
              </div>
              <div className={styles.beneficios}>
                <Icon
                  size={"1.3rem"}
                  color="var(--primary-darker)"
                  type={"check"}
                />
                <Text color="black-lighter" fontSize="18px" bold="font-light">
                  <strong>
                    Mi disponibilidad los 7 días de la semana para tus
                    consultas.{" "}
                  </strong>
                </Text>
              </div>
              <div className={styles.beneficios}>
                <Icon
                  size={"1.3rem"}
                  color="var(--primary-darker)"
                  type={"check"}
                />
                <Text color="black-lighter" fontSize="18px" bold="font-light">
                Que trabaje 6 meses en el crecimiento de tu consultorio.
                </Text>
              </div>
              <div className={styles.founderButton}>
                <IconTextButton colorVariant="primary-greenDark">
                  Contactar a José →
                </IconTextButton>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <PreFooter />
      </div>
    </div>
  );
};

export default Founder;
