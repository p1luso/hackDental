import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import Footer from "../../components/organisms/Footer/Footer";
import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import TextLink from "../../components/molecules/TextLink/TextLink";
import Icon from "../../components/atoms/Icon/Icon";
import { DOWNLOAD_EBOOK } from "../../constants/routes";
import imgEbookPrueba from "@assets/imgEbookPrueba.svg";
import { useNavigate } from "react-router-dom";
import CoberturaDental from "@assets/coberturaDental.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";

import Link from "../../components/atoms/Link/Link";

const LandingEBooks = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <Text
            type="bigtitle"
            textAlign="center"
            color="white"
            textAlignMobile="center"
            fontFamily="lexend"
            bold="font-light"
            fontSize="28px"
            fontSizeMobile="21px"
            s={{ fontWeight: "500" }}
          >
            ¿Quieres llevar tu consultorio al siguiente nivel?
          </Text>
          <Text
            type="bigtitle"
            fontFamily="lexend"
            textAlign="center"
            textAlignMobile="center"
            color="white"
            bold="semi-bold"
            fontSize="32px"
            fontSizeMobile="24px"
            s={{ fontWeight: "600" }}
          >
            Aprende de Marketing Dental
          </Text>
          <Text
            bold="font-light"
            textAlign="center"
            color="white"
            fontSize="18px"
            fontSizeMobile="14px"
            s={{ fontWeight: "300" }}
          >
            Todos los ebooks de HackDental 100% gratuitos
          </Text>
        </section>
      </header>
      <main className={styles.main}>
        <Link to={DOWNLOAD_EBOOK} target="_blank">
          <div className={styles.mainEBook}>
            <div className={styles.mainEbookCard}>
              <div className={styles.tag}>
                <Text size="ty" color="light">
                  Empieza Aqui
                </Text>
              </div>
              <img className={styles.ebookImg} src={imgEbookPrueba} />
              <div className={styles.desc}>
                <Text size="ty" s={{ color: "#006a43" }}>
                  EBOOK
                </Text>
                <Text type="smallsubtitle" color="black">
                  Marketing Dental: La Guia Definitiva
                </Text>
                <Text bold="font-light" size="ty">
                  Transforma tu clínica dental con nuestros ebooks, redactados
                  por líderes en marketing digital.
                </Text>
                <TextLink
                  marked
                  variant="secondary"
                  to={DOWNLOAD_EBOOK}
                  textProps={{
                    size: "sm",
                  }}
                >
                  Descargar la Guia{" "}
                  <span style={{ position: "relative", top: "2px" }}>
                    <Icon type={"arrowSquare"} size={"1rem"} />
                  </span>
                </TextLink>
              </div>
            </div>
            <div className={styles.books}>
              <EBookCard
                img={imgEbookPrueba}
                title={"Email Marketing Dental"}
                desc={"Transforma tu clínica dental con nuestros ebooks."}
              />
              <EBookCard
                img={imgEbookPrueba}
                title={"Aceptación de Casos Dentales"}
                desc={
                  "Transforma tu clínica dental con nuestros ebooks, redactados."
                }
              />
              <EBookCard
                img={imgEbookPrueba}
                title={"Marketing de Tratamientos Premium"}
                desc={
                  "Transforma tu clínica dental con nuestros ebooks, redactados."
                }
              />
            </div>
          </div>
        </Link>
      </main>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderButtonMobile}>
              <IconTextButton size="100%" colorVariant="primary-darker">
                Pedir auditoría
              </IconTextButton>{" "}
            </div>
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>

            <div className={styles.founderText}>
              <div className={styles.titles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ fontWeight: "500" }}
                >
                  Dueño de Consultorio Dental
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
                  ¿Te interesa una auditoría gratuita?
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Averigua si tu consultorio califica para nuestros servicios
              </Text>

              <div className={styles.founderButton}>
                <IconTextButton size="260px" colorVariant="primary-darker">
                  Pedir auditoría
                </IconTextButton>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>      
      <Footer />
    </div>
  );
};

export default LandingEBooks;
