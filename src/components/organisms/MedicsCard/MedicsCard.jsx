import Medicos from "@assets/Medicos.svg";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";

const MedicsCard = ({
  bgColor = "",
  transparentBg = false,
  textDesc = "que aprenden con nuestros ebooks gratuitos",
  title = " Únete a los muchos dentistas",
}) => {
  return (
    <div
      className={`${styles.card} ${transparentBg ? styles.transparent : ""}`}
    >
      <img src={Medicos} className={styles.medicos} />
      <div className={styles.desc}>
        <Text color="black" fontSize="14px" s={{ lineHeight: "1.4" }}>
          {title}
        </Text>
        <Text
          fontSize="14px"
          color="black"
          bold="font-light"
          s={{ lineHeight: "1.4" }}
          textAlign="center"
        >
          {textDesc}
        </Text>
      </div>
    </div>
  );
};

export default MedicsCard;
