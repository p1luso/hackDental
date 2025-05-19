import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import imgEspaña from "@assets/sectorSalud.svg";
import Text from "../../components/atoms/Text/Text";
import Footer from "../../components/organisms/Footer/Footer";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import { useNavigate } from "react-router-dom";
import checkIcon from "@assets/check.svg";
import TextLink from "../../components/molecules/TextLink/TextLink";

const Cumplimiento = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.bg}>
        <div className={styles.banner}>
          <img
            src={imgEspaña}
            alt="imagen españa"
            className={styles.imgEspaña}
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
                Somos expertos en el
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
                Sector Dental Español
              </Text>
            </div>
            <Text
              fontFamily="font-secondary"
              color="white-cream"
              textAlignMobile="center"
              bold="font-light"
              fontSize="17px"
              textAlign="start"
              s={{
                lineHeight: "1.2",
                fontFamily: "lexend",
                fontWeight: "300",
                letterSpacing: "-0.5px",
              }}
            >
              <em>“Nuestras estrategias de marketing están enfocadas solo en el
              sector de salud dental español”.</em>
            </Text>
            <div className={styles.contactBtn}>
              <TextLink
                variant="blue-link"
                textProps={{ color: "#0fbfbf", fontSize: "18px" }}
                to={"/contact"}
              >
                Pedir Auditoria Gratis
              </TextLink>
            </div>
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
                Importancia de trabajar con una agencia
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
                100% especializada en el sector dental español
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
                  Imagina que estás buscando una agencia de marketing para tu
                  clínica dental. Quieres a alguien que entienda tu negocio, tus
                  pacientes, tus retos. Pero la mayoría de las agencias son
                  generalistas. Un día trabajan con un restaurante, al siguiente
                  con una tienda online. ¿Cómo pueden entender realmente las
                  peculiaridades de una clínica dental en España?
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{ lineHeight: "1.75" }}
                >
                  Ahora imagina una agencia diferente. Una que vive y respira el
                  sector dental español. Que conoce las regulaciones, las
                  mejores prácticas, los desafíos únicos que enfrentas. Una
                  agencia así sería un verdadero aliado, ¿no crees?
                </Text>
                <Text
                  bold="font-light"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{ lineHeight: "1.75" }}
                >
                  Pues esa agencia existe. Somos HackDental. Y esto es lo que
                  nos hace diferentes:
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
                      Nos dedicamos exclusivamente al marketing para clínicas
                      dentales en España. No nos distraemos con nada más. Somos
                      100% dental.
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
                      Conocemos al dedillo las regulaciones específicas para el
                      sector dental en España, incluyendo el RGPD. Nos
                      mantenemos siempre actualizados
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
                      Entendemos los retos únicos de las clínicas dentales en
                      España, desde atraer nuevos pacientes hasta gestionar
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
                En HackDental, no somos una agencia de marketing más. Somos tu
                partner estratégico en el crecimiento de tu clínica dental.
                Entendemos tu negocio como nadie más porque es lo único que
                hacemos.
              </Text>
              <Text
                bold="font-light"
                color="white-secondary"
                fontSize="17px"
                fontSizeMobile="16px"
                textAlign="start"
                s={{ lineHeight: "1.75" }}
              >
                Si quieres trabajar con una agencia que realmente entiende tu
                clínica dental y sabe cómo hacerla crecer en el mercado español,
                hablemos. Estamos aquí para ayudarte a triunfar.
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

export default Cumplimiento;
