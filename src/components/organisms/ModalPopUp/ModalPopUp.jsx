import styles from "./popup.module.css";
import { useNavigate } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import Mark from "../../atoms/Mark/Mark";
import { OUR_PROGRAM } from "../../../constants/routes";
import Medicos from "@assets/Medicos.svg";

export default function ModalPopUp({ showPopup, setShowPopup, navMobileMenuIsShow }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.popupContainer} ${
        showPopup && !navMobileMenuIsShow ? styles.show : ""
      }`}
    >
      <div className={styles.popupcard}>
        <div className={styles.tagSupIzq}></div>
        <div className={styles.tagSupDer}></div>
        <div className={styles.tagInfIzq}></div>
        <div className={styles.tagInfDer}></div>

        <span
          className={styles.popupMobileCloseBtn}
          onClick={() => setShowPopup(false)}
        >
          <Icon size={"2rem"} type={"close"} color="var(--black)" />
        </span>

        <div className={styles.popupDesc}>
          <span
            className={styles.popupCloseBtn}
            onClick={() => setShowPopup(false)}
          >
            <Icon size={"2rem"} type={"close"} color="var(--gray)" />
          </span>

          <div className={styles.title}>
            <Text
              type="bigtitle"
              textAlign="center"
              color="black"
              fontFamily="lexend"
              bold="font-light"
              fontSize="26px"
              fontSizeMobile="21px"
              s={{ lineHeight: "1.2", fontWeight: "500" }}
            >
              Descubre si tu consultorio califica para
            </Text>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="center"
              color="black"
              bold="semi-bold"
              fontSize="32px"
              fontSizeMobile="24px"
              s={{ lineHeight: "1.2", fontWeight: "600" }}
            >
              una auditoría de Marketing Gratuita
            </Text>
          </div>

          <div className={styles.desc}>
            <Text textAlign="center" color="black" bold="font-light">
              Tenemos un servicio{" "}
              <strong>exclusivo para consultorios que:</strong>
            </Text>
          </div>

          <div className={styles.beneficios__items}>
            <div className={styles.beneficios}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />
              <Text color="black" bold="font-light">
                Está ubicado en <strong>España.</strong>
              </Text>
            </div>
            <div className={styles.beneficios}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />
              <Text color="black" bold="font-light">
                Factura <strong>10,000 euros</strong> o más al mes
              </Text>
            </div>
            <div className={styles.beneficios}>
              <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />
              <Text color="black" bold="font-light">
                Quiere crecer rápidamente en el <strong>2025</strong>.
              </Text>
            </div>
          </div>

          <div className={styles.popupBtns}>
            <IconTextButton size="100%" onClick={() => navigate(OUR_PROGRAM)}>
              Pedir auditoría
            </IconTextButton>
          </div>

          <div className={styles.popUp_footer_card}>
            <img src={Medicos} className={styles.popUp_footer_img} alt="medicos" />
            <div className={styles.footer__desc}>
              <Text
                textAlignMobile="center"
                fontSizeMobile="15px"
                s={{ color: "black", lineHeight: "1.33" }}
              >
                Únete a los dentistas
              </Text>
              <Text
                fontSizeMobile="15px"
                textAlignMobile="center"
                bold="font-light"
                s={{ color: "black", lineHeight: "1.33" }}
              >
                que usan nuestro método.{" "}
                <Mark bold="regular" color="darker-green">
                  Cupos limitados.
                </Mark>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
