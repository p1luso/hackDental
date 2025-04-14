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
import Link from "../../components/atoms/Link/Link";

const LandingEBooks = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <Text size="xlg" fontFamily="font-terciary" s={{ color: "#25c19b" }}>
            Contenido 100% Gratuito
          </Text>
          <Text
            size="xbig"
            bold="semibold"
            s={{ color: "white", lineHeight: "1.1" }}
            textAlign="center"
          >
            Biblioteca de Marketing Dental
          </Text>
          <Text
            bold="font-light"
            size="lg"
            textAlign="center"
            s={{ color: "white" }}
          >
            Todos los recursos de HackDental, en 1 solo lugar
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
          </div>
        </Link>
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
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default LandingEBooks;
