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
import Footer from "../../components/organisms/Footer/Footer";
import TextLink from "../../components/molecules/TextLink/TextLink";
import checkIcon from "@assets/check.svg";
import crossIcon from "@assets/equis.svg";

const AcercaDe = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideBottomMenu={false} hideTopMenu={true} />
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
                fontWeight: "400",
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
              s={{ lineHeight: "1", fontWeight: "700" }}
            >
              Fundador y CEO de HackDental
            </Text>
          </div>
          <Text
            fontFamily="font-secondary"
            color="white-cream"
            textAlignMobile="center"
            bold="font-light"
            fontSize="17px"
            fontSizeMobile="16px"
            textAlign="start"
            s={{
              lineHeight: "1.2",
              fontFamily: "lexend",
              fontWeight: "300",
              letterSpacing: "-0.5px",
            }}
          >
            <em>
              “Me dedico única y exclusivamente al marketing de servicios
              dentales en España.”
            </em>
          </Text>
          <div className={styles.contactBtn}>
            <TextLink
              variant="blue-link"
              textProps={{ color: "#0fbfbf", fontSize: "18px" }}
              to={"https://wa.me/51914727355"}
            >
              Contactar a Jose →
            </TextLink>{" "}
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.moreInfo}>
          <div className={styles.info}>
            <div className={styles.titles}>
              <Text
                fontFamily="lexend"
                color="black"
                fontSize="21px"
                fontSizeMobile="18px"
                textAlignMobile="center"
                textAlign="center"
                s={{
                  lineHeight: "1",
                  fontFamily: "lexend",
                  fontWeight: "400",
                }}
              >
                Importancia de tener un fundador que
              </Text>
              <Text
                fontFamily="lexend"
                fontSize="28px"
                fontSizeMobile="22px"
                textAlign="center"
                textAlignMobile="center"
                color="black"
                s={{ lineHeight: "1", fontWeight: "700" }}
              >
                Trabaje directamente con tu consultorio.
              </Text>
            </div>
            <div className={styles.info__desc}>
              <div className={styles.lines}>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{ lineHeight: "1.75" }}
                >
                  Imagina que contratas a una agencia de marketing dental. Estás
                  emocionado. ¡Por fin vas a hacer crecer tu clínica! Pero hay
                  un problema... Tu cuenta se la dan a alguien con poca
                  experiencia. El fundador, el que realmente sabe, está muy
                  ocupado para atenderte. Así que la ayuda experta que
                  esperabas, nunca llega. Menuda decepción, ¿no?
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{ lineHeight: "1.75" }}
                >
                  Pero, ¿y si hubiera otra forma de hacer las cosas? Una donde
                  el fundador, en vez de ser alguien lejano, fuera tu aliado
                  número uno. Alguien que está contigo en todo momento, para
                  hacer crecer tu clínica.
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{ lineHeight: "1.75" }}
                >
                  Pues tengo buenas noticias. Esa es exactamente la visión con
                  la que creé HackDental:
                </Text>

                <div className={styles.checksTexts}>
                  <div className={styles.line}>
                    <img src={checkIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"
                      s={{ lineHeight: "1.75" }}
                    >
                      Reuniones de estrategia cada semana directamente conmigo,
                      no con un empleado nuevo.
                    </Text>
                  </div>
                  <div className={styles.line}>
                    <img src={checkIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"
                      s={{ lineHeight: "1.75" }}
                    >
                      Acceso directo a mí por Whatsapp, los 7 días de la semana.
                      ¿Tienes una duda? Pregunta. Estoy aquí para ayudarte.
                    </Text>
                  </div>
                  <div className={styles.line}>
                    <img src={checkIcon} alt="" />
                    <Text
                      bold="font-light"
                      color="white-secondary"
                      fontSize="17px"
                      fontSizeMobile="16px"
                      s={{ lineHeight: "1.75" }}
                    >
                      Un compromiso total con tu éxito, por eso solo trabajo con
                      10 clínicas cada 6 meses. Calidad, no cantidad.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info__desc}>
              <Text
                bold="font-light"
                color="white-secondary"
                fontSize="17px"
                fontSizeMobile="16px"
                textAlign="start"
                s={{ lineHeight: "1.75" }}
              >
                Mira, sé que dirigir una clínica dental es un reto constante. Mi
                trabajo es hacerte la vida más fácil, no darte más dolores de
                cabeza. Si quieres un aliado de verdad, alguien que realmente se
                preocupa por ti y por tu clínica, no dudes en contactarme
                directamente.
              </Text>
              <div className={styles.freeGuide}>
                <IconTextButton
                  colorVariant="white-green"
                  size="100%"
                  onClick={() => setModalOpened(true)}
                >
                  Pedir Auditoria Gratis
                </IconTextButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcercaDe;
