import styles from "./styles.module.css";
import Logo1 from "@assets/logo carousel 1.svg";
import Logo2 from "@assets/logo carousel 2.svg";
import Logo3 from "@assets/logo carousel 3.svg";
import Logo4 from "@assets/logo carousel 4.svg";
import Logo5 from "@assets/logo carousel 5.svg";

const PartnersCarousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.list}>
        <img src={Logo1} className={styles.img} />
        <img src={Logo2} className={styles.img} />
        <img src={Logo3} className={styles.img} />
        <img src={Logo4} className={styles.img} />
        <img src={Logo5} className={styles.img} />
      </div>
      <div className={styles.list}>
        <img src={Logo1} className={styles.img} />
        <img src={Logo2} className={styles.img} />
        <img src={Logo3} className={styles.img} />
        <img src={Logo4} className={styles.img} />
        <img src={Logo5} className={styles.img} />
      </div>
    </div>
  );
};

export default PartnersCarousel;
