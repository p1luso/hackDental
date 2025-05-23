import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import CoberturaDental from "@assets/imagen_dentistLandind.svg";
import DaysCounter from "../../components/organisms/DaysCounter/DaysCounter";
import { useLocation, useNavigate } from "react-router-dom";
import Medicos from "@assets/Medicos.svg";
import Mark from "../../components/atoms/Mark/Mark";
import Footer from "../../components/organisms/Footer/Footer";
import { registerEbookDownload } from "../../services/api/sendContactForm";

const ConfirmDownload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pdfPath, title, email } = location.state || {};

  const handleDownload = async () => {
    if (window.fbq) {
      window.fbq("trackCustom", "EbookDescargado", {
        content_name: title,
        content_category: "Ebook",
      });
    }

    try {
      const ebookMap = {
        "7 secretos del marketing dental": "ebook_secrets",
        "IA para Consultorios Dentales": "ebook_ia",
        "WhatsApp para Consultorios en 5 minutos": "ebook_whatsapp",
      };

      const ebookKey = ebookMap[title];

      if (ebookKey) {
        await registerEbookDownload(ebookKey, email);
      } else {
        console.warn("No se encontró mapeo para el título:", title);
      }

      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfPath.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Hubo un error al registrar la descarga.");
      console.error(err);
    }
  };

  if (!pdfPath || !title) {
    return <p>No se encontró el archivo o el título del ebook.</p>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.bg}>
        <div className={styles.banner}>
          <div className={styles.desc}>
            <div className={styles.desc__texts}>
              <div className={styles.line}></div>
              <Text
                fontFamily="lexend"
                color="white"
                fontSize="24px"
                fontSizeMobile="18px"
                textAlignMobile="center"
                textAlign="center"
                s={{
                  lineHeight: "1",
                  fontFamily: "lexend",
                  fontWeight: "500",
                  letterSpacing: "-0.5px",
                  color: "#cfe1df",
                }}
              >
                Gracias por confiar en hackdental.com
              </Text>
              <Text
                fontFamily="lexend"
                fontSize="40px"
                fontSizeMobile="22px"
                textAlign="center"
                textAlignMobile="center"
                color="white"
                s={{ lineHeight: "1", fontWeight: "600" }}
              >
                ¡Tu ebook está listo!
              </Text>
            </div>
            <Text
              fontFamily="font-secondary"
              color="white-cream"
              textAlignMobile="center"
              bold="font-light"
              fontSize="16px"
              fontSizeMobile="14px"
              textAlign="center"
              s={{
                lineHeight: "1.2",
                fontFamily: "lexend",
                fontWeight: "300",
                letterSpacing: "-0.5px",
              }}
            >
              Puede acceder a "{title}" con el botón de abajo en cualquier
              momento.
            </Text>
            <div className={styles.contactBtn}>
              <IconTextButton colorVariant="white" onClick={handleDownload}>
                Descargar Gratis
              </IconTextButton>
            </div>
            <div className={styles.spainLocation_footer__card}>
              <img src={Medicos} className={styles.spainLocation_footer__img} />
              <div className={styles.footer__desc}>
                <Text
                  textAlignMobile="start"
                  fontSizeMobile="12px"
                  fontSize="14px"
                  s={{ color: "white", lineHeight: "1.33" }}
                >
                  Únete a los dentistas
                </Text>
                <Text
                  textAlignMobile="start"
                  bold="font-light"
                  fontSize="14px"
                  fontSizeMobile="12px"
                  s={{ color: "#d9d9d9", lineHeight: "1.33" }}
                >
                  que usan nuestro método.{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderText}>
              <div className={styles.titles}>
                <div className={styles.darkLine}></div>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="26px"
                  fontSizeMobile="18px"
                  s={{ fontWeight: "500", lineHeight: "1.1", color: "#01443a" }}
                >
                  Dueño de Consultorio Dental
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="white-secondary"
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
      <Footer />
    </div>
  );
};

export default ConfirmDownload;
