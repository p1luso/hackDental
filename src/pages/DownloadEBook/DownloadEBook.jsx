import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../components/molecules/Modal/Modal";
import DownloadForm from "./components/DownloadForm/DownloadForm";
import Logo from "../../components/atoms/Logo/Logo";
import Icon from "../../components/atoms/Icon/Icon";
import EBookImg from "@assets/imgEbook.svg";
import EbookPortada from "@assets/imagenAnimadaWhatsapp.svg";
import Link from "../../components/atoms/Link/Link";
import ebookData from "../../services/api/ebookData";
import { useParams } from "react-router-dom";

import MedicsCard from "../../components/organisms/MedicsCard/MedicsCard";
import Footer from "../../components/organisms/Footer/Footer";
import checkIcon from "@assets/check.svg";
import crossIcon from "@assets/equis.svg";

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
            <Text color="black-lighter" fontSize="20px" fontSizeMobile="16px">
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
              <IconTextButton
                colorVariant="white-green"
                size="100%"
                onClick={() => setModalOpened(true)}
              >
                Descargar Ahora
              </IconTextButton>
            </div>
            <div className={styles.medicosCard}>
              <MedicsCard transparentBg={true} />
            </div>
          </section>
          <img className={styles.ebook} src={ebook.img} />
        </div>
      </main>
      {ebook.title === "WhatsApp para Consultorios en 5 minutos" && (
        <section className={styles.moreInfo}>
          <div className={styles.info}>
            <div className={styles.info__desc}>
              <div className={styles.titles}>
                <Text
                  textAlign="center"
                  color="black"
                  textAlignMobile="center"
                  fontFamily="lexend"
                  fontSize="28px"
                  fontSizeMobile="16px"
                  s={{
                    lineHeight: "1",
                    fontWeight: "500",
                    marginBottom: "0.5rem",
                  }}
                >
                  El <strong style={{ fontWeight: "600" }}>problema</strong> que
                  este Ebook{" "}
                  <strong style={{ fontWeight: "600" }}>Resuelve:</strong>
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  textAlign="center"
                >
                  "Los pacientes no van con el mejor dentista. Van con el que
                  responde primero"
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  textAlign="center"
                >
                  - Jose Whittembury (CEO de HackDental)
                </Text>
              </div>
              <img src={EbookPortada} className={styles.imgPortada} />
              <div className={styles.lines}>
                <div className={styles.checksTexts}>
                  <div className={styles.line}>
                    <img src={checkIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"
                    >
                      Eres un dentista excepcional.
                    </Text>
                  </div>
                  <div className={styles.line}>
                    <img src={checkIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"
                    >
                      Tus manos son precisas. Tu técnica es impecable. Tus
                      empastes duran décadas.
                    </Text>
                  </div>
                  <div className={styles.line}>
                    <img src={crossIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"                    >
                      Y aun así, tu agenda tiene huecos. Tu sala de espera no
                      está llena. Y cada mes, tu preocupación por los ingresos
                      crece.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.downTexts}>
              <Text
                bold="font-light"
                color="white-secondary"
                fontSize="17px"
                fontSizeMobile="16px"
                textAlign="center"
              >
                <strong>El problema no es que no sepas de odontología.</strong>
              </Text>
              <Text
                bold="font-light"
                color="white-secondary"
                fontSize="17px"
                fontSizeMobile="16px"
                textAlign="center"
              >
                <strong>
                  El problema es que nadie te ha enseñado a usar tu WhatsApp
                  para captar pacientes.
                </strong>{" "}
              </Text>
              <div className={styles.freeGuide}>
                <IconTextButton
                  colorVariant="white-green"
                  size="100%"
                  onClick={() => setModalOpened(true)}
                >
                  Obten tu Guía de WhatsApp Gratis
                </IconTextButton>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} pdfPath={ebook.pdfPath} />
      </Modal>
    </div>
  );
};

export default DownloadEBook;
