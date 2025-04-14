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

import MedicsCard from "../../components/organisms/MedicsCard/MedicsCard";
const DownloadEBook = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <main className={styles.main}>
        <div className={styles.banner}>
          <section className={styles.banner__desc}>
            <Text color="primary" size="sm">
              {new Date().getFullYear()}
            </Text>
            <Text color="black" type="title" bold>
              Como Mejorar la Aceptación de
              <br /> Casos de tu Clinica
            </Text>
            <div className={styles.desc}>
              <Text color="black" bold="font-light" size="sm">
                Save thousands of engineering hours by using the NexHealth
                <br />
                Synchronizer API to sync bidirectionally
              </Text>
            </div>
            <div className={styles.downloadEBook}>
              <IconTextButton
                size="100%"
                textProps={{ size: "sm" }}
                onClick={() => setModalOpened(true)}
              >
                Descargar Ahora
              </IconTextButton>
            </div>
            <div className={styles.medicosCard}>
              <MedicsCard bgColor={"#8fc29f33"} />
            </div>
          </section>
          <img className={styles.ebook} src={EBookImg} />
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.info}>
            <Text size="xxxlg" color="black">
              Adentro aprenderás:
            </Text>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"0.7rem"}
              />{" "}
              <Text bold="font-light" size="sm">
                Panorama de las ventas por chat para el 2023
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"0.7rem"}
              />{" "}
              <Text bold="font-light" size="sm">
                Cuáles son las industrias que más venden por chat aprendiendo a
                vender por medio de Facebook.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"0.7rem"}
              />{" "}
              <Text bold="font-light" size="sm">
                Aprendiendo a vender por medio de WhatsApp, Telegram e Instagram
              </Text>
            </div>
          </div>
          <img src={EbookPortada} className={styles.imgPortada} />
        </div>
      </main>
      <section className={styles.prefooter}>
        <Text color="black" size="xxxlg">
          ¿Listo para empezar?
        </Text>
        <div className={styles.downloadBtn}>
          <IconTextButton
            size="100%"
            textProps={{ size: "sm" }}
            onClick={() => setModalOpened(true)}
          >
            Obten tu Guia Gratis
          </IconTextButton>
        </div>
      </section>
      <footer className={styles.footer}>
        <Text size="sm" color="black" bold="font-light">
          Copyright © {new Date().getFullYear()}, HackDental.com
        </Text>
        <div className={styles.links}>
          <Link to={"#"}>
            <Text color="black" size="ty" bold="font-light">
              Politica de Privacidad
            </Text>
          </Link>
          <hr className={styles.separator} />
          <Link to={"#"}>
            <Text color="black" size="ty" bold="font-light">
              Cumplimiento del RGPD
            </Text>{" "}
          </Link>
        </div>
      </footer>
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} />
      </Modal>
    </div>
  );
};

export default DownloadEBook;
