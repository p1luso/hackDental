import Medicos from "@assets/Medicos.svg";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
const MedicsCard = ({
  bgColor = "",
  textDesc = "que aprenden con nuestros ebooks gratuitos",
  title = " Únete a los muchos dentista",
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <img src={Medicos} className={styles.medicos} />
      <div className={styles.desc}>
        <Text size="ty" color="black" s={{ lineHeight: "1.4" }}>
          {title}
        </Text>
        <Text
          size="ty"
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
