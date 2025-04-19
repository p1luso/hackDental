import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./founder.module.css";
import PreefooterSimple from "../PreefooterSimple/PreefooterSimple";
import FounderImage from "@assets/FounderImage.svg";
import FounderImageMobile from "@assets/FounderImageMobile.svg";
import PreFooter from "../PreFooter/PreFooter";
import { px } from "framer-motion";



const Founder = () => {
  return (
    <div>
      <section className={styles.spainLocation}>
        <div className={styles.founderContainer}>
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
        <div className={styles.contentContainer}>
        <img id={styles.founderImg} src={FounderImage}/>
        <img id={styles.founderImgMobile} src={FounderImageMobile}/>
        <div className={styles.founderText}>
            <Text fontFamily="Lexend" color="black" bold="font-light">
            <i>"Me dedico única y exclusivamente al marketing de servicios
            dentales en España."</i>
            </Text>
            <Text fontFamily="Lexend" color="black" bold="font-light">
              <strong>Contáctame</strong> si te interesa lo siguiente: 
            </Text>
          <div className={styles.founderButton}>
          <IconTextButton colorVariant="dark-green" >
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
