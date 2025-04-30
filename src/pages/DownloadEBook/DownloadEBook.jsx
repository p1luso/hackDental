import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../components/molecules/Modal/Modal";
import DownloadForm from "./components/DownloadForm/DownloadForm";
import Logo from "../../components/atoms/Logo/Logo";
import Icon from "../../components/atoms/Icon/Icon";
import EBookImg from "@assets/imgEbook.svg";
import EbookPortada from "@assets/ImgPortadaEbook.svg";
import Link from "../../components/atoms/Link/Link";
import ebookData from "../../services/api/ebookData";
import { useParams } from "react-router-dom";

import MedicsCard from "../../components/organisms/MedicsCard/MedicsCard";
const DownloadEBook = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { slug } = useParams();
  const ebook = ebookData[slug];

  if (!ebook) {
    return <p style={{ padding: "2rem" }}>Ebook no encontrado.</p>;
  }

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <main className={styles.main}>
        <div className={styles.banner}>
          <section className={styles.banner__desc}>
            <Text color="black-lighter" size="sm">
              Ebook escrito en el 2025
            </Text>
            <Text color="black" type="title" bold>
              {ebook.title}
            </Text>
            <div className={styles.desc}>
              <Text color="black" bold="font-light" size="sm">
                {ebook.desc}
              </Text>
            </div>
            <div className={styles.downloadEBook}>
              <IconTextButton colorVariant="white-green" size="100%" onClick={() => setModalOpened(true)}>
                Descargar Ahora
              </IconTextButton>
            </div>
            <div className={styles.medicosCard}>
              <MedicsCard transparentBg={true}/>
            </div>
          </section>
          <img className={styles.ebook} src={EBookImg} />
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.info}>
            <div className={styles.titles}>
              <Text
                type="bigtitle"
                textAlign="start"
                color="black"
                textAlignMobile="center"
                fontFamily="lexend"
                bold="font-light"
                fontSize="24px"
                fontSizeMobile="16px"
                s={{ lineHeight: "1", fontWeight: "500" }}
              >
                ¿Quieres atraer pacientes con WhatsApp?
              </Text>
              <Text
                type="bigtitle"
                fontFamily="lexend"
                textAlign="start"
                textAlignMobile="center"
                color="black"
                bold="semi-bold"
                fontSize="28px"
                fontSizeMobile="21px"
                s={{ lineHeight: "1", fontWeight: "600" }}
              >
                En el Ebook aprenderás:
              </Text>
            </div>
            <div className={styles.lines}>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"0.7rem"}
                />{" "}
                <Text bold="font-light" color="black-lighter" fontSize="16px" fontSizeMobile="14px">
                  Panorama de las ventas por chat para el 2023
                </Text>
              </div>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"0.7rem"}
                />{" "}
                <Text bold="font-light" color="black-lighter" fontSize="16px" fontSizeMobile="14px">
                  Cuáles son las industrias que más venden por chat aprendiendo
                  a vender por medio de Facebook.
                </Text>
              </div>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"0.7rem"}
                />{" "}
                <Text bold="font-light" color="black-lighter" fontSize="16px" fontSizeMobile="14px">
                  Aprendiendo a vender por medio de WhatsApp, Telegram e
                  Instagram
                </Text>
              </div>
            </div>
          </div>
          <img src={EbookPortada} className={styles.imgPortada} />
        </div>
      </main>
      <section className={styles.prefooter}>
        <Text color="black" fontSize="28px" fontSizeMobile="24px">
          ¿Listo para empezar?
        </Text>
        <div className={styles.downloadBtn}>
          <IconTextButton
            size="100%"
            colorVariant="white-green"
            textProps={{ size: "sm" }}
            onClick={() => setModalOpened(true)}
          >
            Obten tu Guia Gratis
          </IconTextButton>
        </div>
      </section>
      <footer className={styles.footer}>
        <Text size="sm" color="white-cream" bold="font-light">
          Copyright © {new Date().getFullYear()}, HackDental.com
        </Text>
        <div className={styles.links}>
          <Link to={"#"}>
            <Text color="white-cream" size="ty" bold="font-light">
              Politica de Privacidad
            </Text>
          </Link>
          <hr className={styles.separator} />
          <Link to={"#"}>
            <Text color="white-cream" size="ty" bold="font-light">
              Cumplimiento del RGPD
            </Text>{" "}
          </Link>
        </div>
      </footer>
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} pdfPath={ebook.pdfPath}/>
      </Modal>
    </div>
  );
};

export default DownloadEBook;
