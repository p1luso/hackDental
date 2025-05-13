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
                color="black"
                fontFamily="lexend"
                bold="font-light"
                fontSize="26px"
                fontSizeMobile="18px"
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
                fontSizeMobile="22px"
                s={{ lineHeight: "1", fontWeight: "600" }}
              >
                Fundador y CEO de HackDental
              </Text>
            </div>
            <div className={styles.imageWrapper}>
              <img id={styles.founderImg} src={FounderImage} />
              <img id={styles.founderImgMobile} src={FounderImageMobile} />
              <div className={styles.disponibilityBox}>
                <Text
                  color="white"
                  fontSize="16px"
                  fontSizeMobile="12px"
                  bold="font-light"
                  s={{color: "#213343"}}
                >
                  Disponibilidad actual
                </Text>
                <Text
                  color="white"
                  fontSize="16px"
                  fontSizeMobile="12px"
                  bold="font-light"
                  s={{color: "#213343"}}
                >
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
                  fontSize="26px"
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
              <Text
                fontFamily="Lexend"
                color="black-lighter"
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
                color="black-lighter"
                fontSize="17px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                <strong>Contáctame</strong> si te interesa lo siguiente:
              </Text>
              <div className={styles.beneficios}>
                <div className={styles.beneficiosIcon}>
                  <Icon size={"1.2rem"} color="#008060" type={"check"} />
                </div>
                <Text
                  color="black-lighter"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  bold="font-light"
                >
                  <strong>
                    Reunión 1 a 1 conmigo para discutir el futuro de tu consultorio.
                  </strong>
                </Text>
              </div>

              <div className={styles.founderButton}>
                <TextLink
                  variant="primary-green"
                  textProps={{ color: "#005fa3", fontSize: "18px" }}
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
