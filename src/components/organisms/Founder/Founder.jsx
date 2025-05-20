import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./founder.module.css";
import FounderImage from "@assets/imagenFundador.svg";
import FounderImageMobile from "@assets/imagenFundador.svg";
import { px } from "framer-motion";
import Icon from "../../atoms/Icon/Icon";
import TextLink from "../../molecules/TextLink/TextLink";

const Founder = () => {
  return (
    <div className={styles.founder}>
      <section className={styles.spainLocation}>
        <div className={styles.founderContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.mobileTitles}>
              <Text
                type="bigtitle"
                textAlign="center"
                color="light"
                fontFamily="lexend"
                fontSize="26px"
                fontSizeMobile="18px"
                s={{ lineHeight: "1", fontWeight: "400" }}
              >
                Conoce a Jose Whittembury
              </Text>
              <Text
                type="bigtitle"
                fontFamily="lexend"
                textAlign="center"
                color="light"
                bold="bold"
                fontSize="32px"
                fontSizeMobile="22px"
                s={{ lineHeight: "1", fontWeight: "700" }}
              >
                Fundador y CEO de HackDental
              </Text>
            </div>
            <div className={styles.imageWrapper}>
              <img id={styles.founderImg} src={FounderImage} />
              <img id={styles.founderImgMobile} src={FounderImageMobile} />
              <div className={styles.disponibilityBox}>
                <Text
                  color="white-lighter"
                  fontSize="16px"
                  fontSizeMobile="12px"
                  bold="font-light"
                  s={{ color: "#213343" }}
                >
                  Disponibilidad actual
                </Text>
                <Text
                  color="white-lighter"
                  fontSize="16px"
                  fontSizeMobile="12px"
                  bold="font-light"
                  s={{ color: "#213343", fontWeight: "400" }}
                >
                  10 clínicas en España
                </Text>
              </div>
            </div>
            <div className={styles.founderText}>
              <div className={styles.desktopTitles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="light"
                  fontFamily="lexend"
                  fontSize="26px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "400" }}
                >
                  Conoce a Jose Whittembury
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="light"
                  bold="bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "700" }}
                >
                  Fundador y CEO de HackDental
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="white-lighter"
                fontSize="17px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                <i>
                  "Me dedico única y exclusivamente al marketing de servicios
                  dentales en España."
                </i>
              </Text>
              <Text
                fontFamily="Lexend"
                color="white-lighter"
                fontSize="17px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                <strong style={{fontWeight:"400"}}>Contáctame</strong> si te interesa lo siguiente:
              </Text>
              <div className={styles.beneficios}>
                <div className={styles.beneficiosIcon}>
                  <Icon size={"1.2rem"} color="#008060" type={"check"} />
                </div>
                <Text
                  color="white-lighter"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  bold="font-light"
                  s={{ fontWeight: "400" }}
                >
                  Reunión 1 a 1 conmigo para discutir el futuro de tu
                  consultorio.
                </Text>
              </div>

              <div className={styles.founderButton}>
                <TextLink
                  variant="blue-link"
                  textProps={{ color: "#0fbfbf", fontSize: "18px" }}
                  to={"https://wa.me/51914727355"}
                >
                  Contactar a Jose →
                </TextLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
