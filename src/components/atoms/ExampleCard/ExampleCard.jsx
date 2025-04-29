import React from 'react';
import styles from './ExampleCard.module.css';
import Text from '../Text/Text';

const ExampleCard = ({ image, title, income, price, incomeType = "Mensuales" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <Text
          type="subtitle"
          fontFamily="lexend"
          color="black"
          bold="regular"
          fontSize="16px"
          fontSizeMobile="14px"
        >
          {title}
        </Text>
        <Text
          fontFamily="lexend"
          color="black-lighter"
          fontSize="16px"
          bold="regular"
          fontSizeMobile="14px"
        >
          Ingresos {incomeType}: ${income}
        </Text>
        <Text
          fontFamily="lexend"
          color="dark"
          bold="regular"
          fontSize="16px"
          fontSizeMobile="14px"
        >
          Precio: ${price}
        </Text>
      </div>
    </div>
  );
};

export default ExampleCard; 