import styles from "./popup.module.css";
import { useNavigate } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import Mark from "../../atoms/Mark/Mark";
import { CONTACT_FORM, OUR_PROGRAM } from "../../../constants/routes";
import Medicos from "@assets/Medicos.svg";
import DaysCounter from "../DaysCounter/DaysCounter";

export default function ModalPopUp({
  showPopup,
  setShowPopup,
  navMobileMenuIsShow,
}) {

  return (
    <div
      className={`${styles.popupContainer} ${
        showPopup && !navMobileMenuIsShow ? styles.show : ""
      }`}
    >
      <div className={styles.popupcard}>
        <span
          className={styles.popupMobileCloseBtn}
          onClick={() => setShowPopup(false)}
        >
          <Icon size={"4rem"} type={"close"} color="var(--white)" />
        </span>

        <div className={styles.popupDesc}>
          <span
            className={styles.popupCloseBtn}
            onClick={() => setShowPopup(false)}
          >
            <Icon size={"2rem"} type={"close"} color="var(--gray)" />
          </span>

          <div className={styles.title}>
            <div className={styles.title__mobile}>
              <Text
                type="bigtitle"
                textAlign="center"
                color="black"
                fontFamily="lexend"
                bold="font-light"
                fontSize="24px"
                fontSizeMobile="18px"
                s={{ lineHeight: "1.2", fontWeight: "400" }}
              >
                Si tu consultorio está en España
              </Text>
            </div>
            <div className={styles.title__desktop}>
            <Text
              type="bigtitle"
              textAlign="center"
              color="black"
              fontFamily="lexend"
              bold="font-light"
              fontSize="24px"
              fontSizeMobile="18px"
              s={{ lineHeight: "1", fontWeight: "400" }}
            >
              Solo si tu consultorio se ubica en España
            </Text>
            </div>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="center"
              color="black"
              bold="semi-bold"
              fontSize="30px"
              fontSizeMobile="22px"
              s={{ lineHeight: "1", fontWeight: "600" }}
            >
              Recibe una auditoría de marketing gratuita
            </Text>
          </div>

          <div className={styles.desc}>
            <Text
              textAlign="center"
              fontSize="17px"
              fontSizeMobile="16px"
              fontFamily="lexend"
              color="black"
              bold="font-light"
            >
              Apurate! Haremos auditorías gratis solo hasta julio de 2025.
            </Text>
          </div>

          <div className={styles.beneficios__items}>
            <DaysCounter numberBoxes={true} targetDate={"07/01/2025"} />
          </div>

          <div className={styles.popupBtns}>
            <IconTextButton
              colorVariant="white-green"
              size="100%"
              onClick={() => window.open(CONTACT_FORM, "_blank")}
            >
              Aplicar Ahora
            </IconTextButton>
          </div>

          <div className={styles.popUp_footer_card}>
            <img
              src={Medicos}
              className={styles.popUp_footer_img}
              alt="medicos"
            />
            <div className={styles.footer__desc}>
              <Text
                textAlignMobile="center"
                fontSize="14px"
                fontSizeMobile="12px"
                s={{ color: "black", lineHeight: "1.33" }}
              >
                Únete a los dentistas
              </Text>
              <Text
                fontSize="14px"
                fontSizeMobile="12px"
                textAlignMobile="center"
                bold="font-light"
                s={{ color: "black", lineHeight: "1.33" }}
              >
                que usan nuestro método.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
