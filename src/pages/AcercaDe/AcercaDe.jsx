import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import imgAcercaDe from "@assets/Imagen acerca.svg";
import Text from "../../components/atoms/Text/Text";
import Footer from "../../components/organisms/Footer/Footer";
import PreefoterSimple from "../../components/organisms/PreefooterSimple/PreefooterSimple";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";

const AcercaDe = () => {
  return (
    <div className={styles.page}>
      <Nav hideBottomMenu={false} />
      <div className={styles.banner}>
        <img
          src={imgAcercaDe}
          alt="imagen españa"
          className={styles.imgAcerca}
        />

        <div className={styles.desc}>
          <Text
            fontFamily="font-secondary"
            color="white"
            size="xxbig"
            textAlign="center"
            s={{
              lineHeight: "0.95",
              fontFamily: "queens",
              fontWeight: "800",
              letterSpacing: "-0.5px",
            }}
          >
            Jose {screen.availWidth > 1024 && <br />}
            Whittembury
          </Text>
          <Text
            fontFamily="font-terciary"
            size="lg"
            textAlign="center"
            s={{ lineHeight: "1.1", color: "#8fc29f" }}
          >
            Director de Marketing, Hackdental
          </Text>
          <div className={styles.contactBtn}>
            <IconTextButton colorVariant="white">
              Contactar a José →
            </IconTextButton>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.texts}>
          <Text bold="font-light" color="dark">
            En nuestra agencia de marketing dental conocemos bien la realidad de
            las clínicas odontológicas en España. Sabemos que el tratamiento de
            los datos de tus pacientes exige el máximo cuidado y un cumplimiento
            estricto del Reglamento General de Protección de Datos (RGPD).
          </Text>
          <Text bold="font-light" color="dark">
            Hemos adaptado todas nuestras medidas de seguridad, documentos y
            procesos a las necesidades del sector dental español. De esta forma,
            todos los datos personales y médicos de tus pacientes se gestionan
            siguiendo la normativa vigente, con sistemas cifrados, accesos
            controlados y proveedores igualmente comprometidos con la protección
            de datos.
          </Text>
          <Text bold="font-light" color="dark">
            Con nuestro Acuerdo de Encargo de Tratamiento (DPA) integrado en los
            Términos de Uso, simplificamos la gestión del cumplimiento legal.
            Además, te proporcionamos herramientas y asesoramiento para
            responder con rapidez a las solicitudes de los pacientes (acceso,
            rectificación, supresión), fortaleciendo su confianza y mejorando la
            reputación de tu clínica
          </Text>
          <Text bold="font-light" color="dark">
            Nosotros nos encargamos del cumplimiento normativo y la seguridad,
            para que tú puedas concentrarte en lo más importante: ofrecer una
            atención odontológica de calidad a tus pacientes en un entorno de
            absoluta confianza.
          </Text>
        </div>
      </main>
      <PreefoterSimple />
      <Footer />
    </div>
  );
};

export default AcercaDe;
