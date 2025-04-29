import React from "react";
import styles from "./styles.module.css";
import ServiceCard from "../../components/atoms/ServiceCard/ServiceCard";
import ExampleCard from "../../components/atoms/ExampleCard/ExampleCard";
import Text from "../../components/atoms/Text/Text";
import blanqueamientoImg from "@assets/Blanquamiento_Dental.svg";
import implantesImg from "@assets/Implantes_Dentales.svg";
import invisalignImg from "@assets/Invisalign.svg";
import Check from "@assets/check.svg";
import Logo from "@assets/Logoverde.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";

const LandingIA = () => {
  const handleSubmit = (formData) => {
    // Aquí se enviará la data al backend cuando esté listo
    console.log("Datos del formulario:", formData);
    // TODO: Implementar llamada al backend
    // const response = await fetch('/api/services', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData)
    // });
  };

  const initialData = {
    serviceName: "Implantes Dentales",
    servicePrice: "2000",
    monthlyIncome: "15000",
  };

  const examples = [
    {
      image: implantesImg,
      title: "Implantes Dentales",
      income: "15,000",
      price: "2000",
    },
    {
      image: invisalignImg,
      title: "Invisalign",
      income: "150,000",
      price: "800",
      incomeType: "Anuales",
    },
    {
      image: blanqueamientoImg,
      title: "Blanqueamiento Dental",
      income: "15,000",
      price: "2000",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={Logo} />

        <IconTextButton colorVariant="darker-green">
          Solicita una reunión
        </IconTextButton>
      </header>
      <section className={styles.form}>
        <div className={styles.bgForm}>
          <div className={styles.titles}>
            <Text
              type="bigtitle"
              textAlign="center"
              color="white-cream"
              fontFamily="lexend"
              bold="font-light"
              fontSize="30px"
              fontSizeMobile="24px"
              s={{ lineHeight: "1.2", fontWeight: "500" }}
            >
              Pregúntale a nuestra IA
            </Text>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="center"
              color="white-cream"
              bold="bold"
              fontSize="36px"
              fontSizeMobile="28px"
              s={{ lineHeight: "1.2", fontWeight: "700" }}
            >
              Como vender tus{" "}
              <span className={styles.titleColor}>servicios dentales</span>
            </Text>
            <div className={styles.subtitle}>
              <Text
                fontFamily="lexend"
                textAlign="center"
                color="white-cream"
                bold="font-light"
                fontSize="18px"
                fontSizeMobile="14px"
                s={{ lineHeight: "1.5", fontWeight: "300" }}
              >
                "Modelo de IA entrenado con los conocimientos del equipo de
                Marketing de HackDental".
              </Text>
            </div>
          </div>
          <div className={styles.formContainer}>
            <ServiceCard initialData={initialData} onSubmit={handleSubmit} />
          </div>
          <div className={styles.formFooter}>
            <img src={Check} />
            <Text
              fontFamily="lexend"
              textAlign="center"
              color="white-cream"
              bold="font-light"
              fontSize="18px"
              fontSizeMobile="14px"
              s={{ lineHeight: "1.5", fontWeight: "300" }}
            >
              Resultados en menos de 5 minutos y 100% gratuitos gracias a
              Hackdental
            </Text>
          </div>
        </div>
      </section>
      <section className={styles.examplesContainer}>
        <Text
          type="title"
          textAlign="start"
          color="black"
          fontFamily="lexend"
          bold="regular"
          fontSize="24px"
          fontSizeMobile="20px"
          s={{ marginBottom: "2rem" }}
        >
          Ejemplos
        </Text>
        <div className={styles.examplesGrid}>
          {examples.map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingIA;
