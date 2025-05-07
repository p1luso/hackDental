import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import imgAcercaDe from "@assets/imagenEquipo.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Icon from "../../components/atoms/Icon/Icon";
import Link from "../../components/atoms/Link/Link";
import CoberturaDental from "@assets/imagen_dentistLandind.svg";
import DaysCounter from "../../components/organisms/DaysCounter/DaysCounter";
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideBottomMenu={false} />
      <div className={styles.bg}>
        <div className={styles.banner}>
          <img
            src={imgAcercaDe}
            alt="imagen españa"
            className={styles.imgAcerca}
          />

          <div className={styles.desc}>
            <div className={styles.desc__texts}>
              <Text
                fontFamily="lexend"
                color="white"
                fontSize="26px"
                fontSizeMobile="18px"
                textAlignMobile="center"
                textAlign="start"
                s={{
                  lineHeight: "1",
                  fontFamily: "lexend",
                  fontWeight: "500",
                  letterSpacing: "-0.5px",
                }}
              >
                Conoce a Jose Whittembury
              </Text>
              <Text
                fontFamily="lexend"
                fontSize="32px"
                fontSizeMobile="22px"
                textAlign="start"
                textAlignMobile="center"
                color="white"
                s={{ lineHeight: "1", fontWeight: "600" }}
              >
                Fundador y CEO de HackDental
              </Text>
            </div>
            <Text
              fontFamily="font-secondary"
              color="white-cream"
              textAlignMobile="center"
              bold="font-light"
              fontSize="16px"
              textAlign="start"
              s={{
                lineHeight: "1.2",
                fontFamily: "lexend",
                fontWeight: "300",
                letterSpacing: "-0.5px",
              }}
            >
              “Me dedico única y exclusivamente al marketing de servicios
              dentales en España.”
            </Text>
            <div className={styles.contactBtn}>
              <IconTextButton
                colorVariant="white"
                onClick={() =>
                  window.open("https://wa.me/51914727355", "_blank")
                }
              >
                Contactar a José
              </IconTextButton>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.texts}>
          <div className={styles.titleDeskt}>
            <Text type="subtitle" color="black">
              Trabajemos juntos
            </Text>
          </div>
          <div className={styles.titleMob}>
            <Text type="subtitle" color="black">
              Áreas de expertise
            </Text>
          </div>
          <Text bold="font-light" color="black-lighter">
            Puedes ponerte en contacto con nosotros por correo electrónico a{" "}
            <u>jaka@.design</u> y te responderemos en un plazo de 24 horas
          </Text>
          <div className={styles.spainLocation__items}>
            <div className={styles.spainLocation__items__item}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

              <Text color="black-lighter" fontSize="17px" bold="font-light">
                <strong>
                  Reuniones semanals contigo y tu personal de consultorio
                </strong>
              </Text>
            </div>
            <div className={styles.spainLocation__items__item}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

              <Text color="black-lighter" fontSize="17px" bold="font-light">
                
                  Mi disponiblidad los 7 días de la semana para tus consultas.
               
              </Text>
            </div>
            <div className={styles.spainLocation__items__item}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

              <Text color="black-lighter" fontSize="17px" bold="font-light">
                Que trabaje 6 meses en el crecimiento de tu consultorio.
              </Text>
            </div>
          </div>
        </div>
      </main>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderText}>
              <div className={styles.titles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="26px"
                  fontSizeMobile="18px"
                  s={{ fontWeight: "500", lineHeight: "1.1" }}
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
                  fontSizeMobile="22px"
                  s={{ lineHeight: "1.1", fontWeight: "600" }}
                >
                  ¿Te interesa una auditoría gratuita?
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                fontSize="17px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Averigua si tu consultorio califica para nuestros servicios
              </Text>

              <div className={styles.founderButton}>
                <div className={styles.btn_founder}>
                  <IconTextButton
                    size="100%"
                    colorVariant="white-green"
                    onClick={() => navigate("/contact")}
                  >
                    Pedir auditoría
                  </IconTextButton>
                </div>{" "}
                <div className={styles.daysCounter}>
                  <DaysCounter targetDate="2025-06-01" />
                </div>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>
            <div className={styles.founderButtonMobile}>
              <div className={styles.btn_founder}>
                <IconTextButton size="100%" colorVariant="white-green">
                  Pedir auditoría
                </IconTextButton>
              </div>{" "}
              <div className={styles.daysCounter}>
                <DaysCounter targetDate="2025-06-01" />
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

export default AcercaDe;
