import React from "react";
import styles from "./styles.module.css";
import imgBanner1 from "@assets/imgBanner1.svg";
import imgBanner2 from "@assets/imgBanner2.svg";
import imgBanner3 from "@assets/imgBanner3.svg";
import imgBanner4 from "@assets/imgBanner4.svg";
const BannerImg = () => {
  return (
    <div className={styles.bannerImg}>
      <div className={styles.img1Container}>
        <img src={imgBanner1} className={styles.img1} />
      </div>
      <div className={styles.img2Container}>
        <img src={imgBanner2} className={styles.img2} />
      </div>
      <div className={styles.img3Container}>
        <img src={imgBanner3} className={styles.img3} />
      </div>
      <div className={styles.img4Container}>
        <img src={imgBanner4} className={styles.img4} />
      </div>
    </div>
  );
};

export default BannerImg;
