import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import imgAcercaDe from "@assets/imagenEquipo.svg";
import Text from "../../components/atoms/Text/Text";
import Footer from "../../components/organisms/Footer/Footer";
import PreefoterSimple from "../../components/organisms/PreefooterSimple/PreefooterSimple";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Icon from "../../components/atoms/Icon/Icon";

const AcercaDe = () => {
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
              <IconTextButton colorVariant="white">
                Contactar a José →
              </IconTextButton>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.texts}>
          <div className={styles.titleDeskt}>
            <Text bold="bold  " type="subtitle" color="black">
              Trabajemos juntos
            </Text>
          </div>
          <div className={styles.titleMob}>
            <Text bold="bold  " type="subtitle" color="black">
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

              <Text color="black-lighter" bold="font-light">
                <strong>
                  Reuniones semanals contigo y tu personal de consultorio
                </strong>
              </Text>
            </div>
            <div className={styles.spainLocation__items__item}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

              <Text color="black-lighter" bold="font-light">
                <strong>
                  Mi disponiblidad los 7 días de la semana para tus consultas.
                </strong>
              </Text>
            </div>
            <div className={styles.spainLocation__items__item}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

              <Text color="black-lighter" bold="font-light">
                Que trabaje 6 meses en el crecimiento de tu consultorio.
              </Text>
            </div>
          </div>
        </div>
      </main>
      <PreefoterSimple />
      <Footer />
    </div>
  );
};

export default AcercaDe;
