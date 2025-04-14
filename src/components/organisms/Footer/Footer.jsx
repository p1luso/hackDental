import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import Icon from "../../atoms/Icon/Icon";
import {
  CONTACT_FORM,
  OUR_PROGRAM,
  LANDING_EBOOKS,
} from "../../../constants/routes";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__desc}>
        <header className={styles.header}>
          <section className={styles.section}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </section>
          <div className={styles.linkSection}>
            <section className={styles.section}>
              <Text color="black" size="xlg" fontFamily="font-terciary">
                Contacta a un Representante
              </Text>
              <Text bold="font-light" size="sm" s={{ paddingBottom: "28px" }}>
                Te responderemos en menos de 24 horas
              </Text>
              <div className={styles.section__links}>
                <Link to={CONTACT_FORM}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "end",
                    }}
                  >
                    <Icon size={"1rem"} type={"form"} />
                    <Text color="black" size="sm" bold="regular">
                      Forma de Contacto
                    </Text>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "end",
                    }}
                  >
                    <Icon size={"1rem"} type={"email"} />
                    <Text color="black" size="sm" bold="regular">
                      Email
                    </Text>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "end",
                    }}
                  >
                    <Icon size={"1rem"} type={"wp"} />
                    <Text color="black" size="sm" bold="regular">
                      Whatsapp
                    </Text>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </header>
        <div className={styles.separator} style={{ marginTop: "36px" }}></div>
        <div className={styles.copy}>
          <Text color="black" bold="font-light" size="sm">
            Copyright © {new Date().getFullYear()}, hackdental.com
          </Text>
          <div className={styles.links}>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Politica de Privacidad
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Manejo de Cookies
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Cosas Legales
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
