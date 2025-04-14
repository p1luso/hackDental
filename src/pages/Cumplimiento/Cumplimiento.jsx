import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import imgEspaña from "@assets/imagen españa.svg";
import Text from "../../components/atoms/Text/Text";
import Footer from "../../components/organisms/Footer/Footer";
import PreefoterSimple from "../../components/organisms/PreefooterSimple/PreefooterSimple";
const Cumplimiento = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.banner}>
        <img src={imgEspaña} alt="imagen españa" className={styles.imgEspaña} />
        <div className={styles.desc}>
          <Text
            fontFamily="font-secondary"
            color="light"
            type="ultrabigtitle"
            textAlign="center"
          >
            Cumplimiento
            <br /> del RGPD
          </Text>
          <Text
            color="primary-light"
            fontFamily="font-terciary"
            type="subtitle"
          >
            para clínicas dentales en España
          </Text>
        </div>
      </div>
      <main className={styles.main}>
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
          Además, te proporcionamos herramientas y asesoramiento para responder
          con rapidez a las solicitudes de los pacientes (acceso, rectificación,
          supresión), fortaleciendo su confianza y mejorando la reputación de tu
          clínica
        </Text>
        <Text bold="font-light" color="dark">
          Nosotros nos encargamos del cumplimiento normativo y la seguridad,
          para que tú puedas concentrarte en lo más importante: ofrecer una
          atención odontológica de calidad a tus pacientes en un entorno de
          absoluta confianza.
        </Text>
      </main>
      <PreefoterSimple />
      <Footer />
    </div>
  );
};

export default Cumplimiento;
