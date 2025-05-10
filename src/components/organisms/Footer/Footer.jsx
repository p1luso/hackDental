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
import { color } from "framer-motion";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text fontSize="24px" fontSizeMobile="20px" color="white-cream" bold="semi-bold" s={{ fontFamily:"Bree Serif" }}>
        HackDental
      </Text>
      <div className={styles.links}>
        <div className={styles.linksDesktop}>
          <Link to={"#"}>
            <Text color="white-cream" fontSize="16px" bold="font-light">
              © 2025 HackDental LLC –{" "}
              <span className={styles.linksAviso}>
                Aviso Legal y Política de Privacidad
              </span>
            </Text>
          </Link>
        </div>
        <div className={styles.linksMob}>
          <Link to={"#"}>
            <Text
              color="white-cream"
              textAlign="center"
              textAlignMobile="center"
              fontSizeMobile="14px"
              fontSize="14px"

              bold="font-light"
            >
              © 2025 HackDental LLC
            </Text>{" "}
            <Text
              s={{ color: "#0fbfbf", textDecoration: "underline" }}
              textAlign="center"
              textAlignMobile="center"
              fontSize="14px"
              fontSizeMobile="14px"
              bold="font-light"
            >
              Aviso Legal y Política de Privacidad
            </Text>{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
