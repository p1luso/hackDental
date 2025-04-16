import React from "react";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import styles from "./founder.module.css";
import PreefooterSimple from "../PreefooterSimple/PreefooterSimple";
import FounderImage from "@assets/FounderImage.svg";
import PreFooter from "../PreFooter/PreFooter";



const Founder = () => {
  return (
    <div>
      <section className={styles.spainLocation}>
        <div className={styles.founderContainer}>
        <Text
          type="bigtitle"
          textAlign="center"
          color="black"
          fontFamily="Lexend"
          s={{ lineHeight: "1.3" }}
        >
          Sobre nuestro fundador
        </Text>
        <div className={styles.contentContainer}>
        <img src={FounderImage}/>
        <div className={styles.founderText}>
            <Text fontFamily="Lexend" color="black" bold="font-light">
              Hola, soy <span><strong>Jose Whittembury</strong></span>, marketero digital y fundador de
              HackDental. <strong>Me dedico única y exclusivamente al marketing de
              servicios dentales en España.</strong> Mi rol en esta agencia es crear y
              hacer seguimiento a distintas estrategias de adquisición de
              pacientes para tu clínica dental.
            </Text>
            <Text fontFamily="Lexend" color="black" bold="font-light">
              Si te interesa reunirte conmigo o aplicar a uno de nuestros
              servicios, no dudes en contactarme.
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
