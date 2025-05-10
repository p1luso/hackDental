import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import TextLink from "../../components/molecules/TextLink/TextLink";
import Icon from "../../components/atoms/Icon/Icon";
import imgEbook7 from "@assets/7SecretosEbook.svg";
import imgIAEbook from "@assets/IAEbook.svg";
import imgWppEbook from "@assets/WhatsappEbook.svg";
import imgEbookProximamente from "@assets/ImagenProximamente.svg";
import { useNavigate } from "react-router-dom";
import CoberturaDental from "@assets/coberturaDental.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Link from "../../components/atoms/Link/Link";
import { useLocation } from "react-router-dom";

const LandingEBooks = () => {
   const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <div className={styles.educationText}>
          <Text
            type="bigtitle"
            textAlign="center"
            color="white"
            textAlignMobile="center"
            fontFamily="lexend"
            bold="font-light"
            fontSize="28px"
            fontSizeMobile="18px"
            s={{ fontWeight: "500", lineHeight: 1 }}
          >
            Educación para dueños de consultorios
          </Text>
          </div>
          <div className={styles.educationTextMob}>
          <Text
            type="bigtitle"
            textAlign="center"
            color="white"
            textAlignMobile="center"
            fontFamily="lexend"
            bold="font-light"
            fontSize="28px"
            fontSizeMobile="18px"
            s={{ fontWeight: "500", lineHeight: 1 }}
          >
            Educación para dentistas
          </Text>
          </div>
          <Text
            type="bigtitle"
            fontFamily="lexend"
            textAlign="center"
            textAlignMobile="center"
            color="white"
            bold="bold"
            fontSize="42px"
            fontSizeMobile="24px"
            s={{ fontWeight: "700", lineHeight: 1 }}
          >
            Aprende de Marketing Dental
          </Text>
          <Text
            bold="font-light"
            textAlign="center"
            color="white-lighter"
            fontSize="18px"
            fontSizeMobile="14px"
            s={{ fontWeight: "300", lineHeight: 1.3 }}
          >
            Todos los ebooks de HackDental 100% gratuitos
          </Text>
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.mainEBook}>
          <div className={styles.mainEbookCard} onClick={() => navigate("/ebooks/7-secretos-marketing-dental")}>
            <div className={styles.tag}>
              <Text size="ty" color="light">
                Empieza Aqui
              </Text>
            </div>
            <img className={styles.ebookImg} src={imgEbook7} />
            <div className={styles.desc}>
              <Text type="smallsubtitle" color="black">
                7 secretos del marketing dental
              </Text>
              <Text bold="font-light" size="ty">
                Transforma tu clínica dental con nuestros ebooks, redactados por
                líderes en marketing digital.
              </Text>
              <TextLink
                marked
                variant="blue-secondary"
                to={`/ebooks/7-secretos-marketing-dental`}
                textProps={{
                  size: "sm",
                  color: "#005fa3",
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
              bookType={false}
              slug="ia-para-consultorios"
              img={imgIAEbook}
              textLinkColor="green-black"
              textColor="green-black"
              title={"IA para Consultorios Dentales"}
              desc={"Transforma tu clínica dental con nuestros ebooks."}
            />
            <EBookCard
              bookType={false}
              textLinkColor="green-black"
              slug="wpp-para-consultorios"
              textColor="green-black"
              img={imgWppEbook}
              title={"Whatsapp para Consultorios"}
              desc={
                "Transforma tu clínica dental con nuestros ebooks, redactados."
              }
            />
            <div className={styles.nextEbook}>
              <div className={styles.tag}>
                <Text size="ty" color="light">
                  Próximamente
                </Text>
              </div>
              <EBookCard
                bookType={false}
                slug="proximamente"
                img={imgEbookProximamente}
                textLinkColor="green-black"
                textColor="green-black"
                title={"Próximamente"}
                desc={
                  "Transforma tu clínica dental con nuestros ebooks, redactados."
                }
              />
            </div>
          </div>
        </div>
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
                  fontSize="26px"
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
    </div>
  );
};

export default LandingEBooks;
