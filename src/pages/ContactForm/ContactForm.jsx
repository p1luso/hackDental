import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Logo from "@assets/Logo_Fondo_Oscuro.svg";
import Input from "../../components/atoms/Input/Input";
import Mark from "../../components/atoms/Mark/Mark";
import { sendContactForm } from "../../services/api/sendContactForm";
import { Mail, Phone, Linkedin } from "lucide-react"; // Asegurate que estos íconos estén disponibles
import Circles from "@assets/3_circulos.svg";
import Finger from "@assets/3_dedo.svg";
import IrregularFigure from "@assets/Figura_irregular.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    email: localStorage.getItem("email") ?? "",
    location: localStorage.getItem("location") ?? "",
    phone: localStorage.getItem("phone") ?? "",
    website: localStorage.getItem("website") ?? "",
  });

  const handleChange = (id, value) => {
    localStorage.setItem(id, value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendFormData = async () => {
    try {
      await sendContactForm(formData);
      alert("Datos enviados!");
    } catch (error) {
      alert("Hubo un error al enviar los datos, por favor intente nuevamente");
      console.log(error);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.title}>
        <img src={Logo} />
      </div>
      <div className={styles.circles}>
        <img src={Circles} alt="" />
      </div>
      <div className={styles.finger}>
        <img src={Finger} alt="" />
      </div>
      <div className={styles.irregularFigure}>
        <img src={IrregularFigure} alt="" />
      </div>
      <div className={styles.bgTransparentContact}>
        <div className={styles.desc}>
          <Text
            type="title"
            fontSize="28px"
            fontSizeMobile="21px"
            textAlignMobile="start"
            color="white"
            bold="font-light"
          >
            Para dueños de Consultorios
          </Text>
          <Text
            type="title"
            fontSize="32px"
            fontSizeMobile="23px"
            textAlignMobile="start"
            color="white"
            bold="semi-bold"
          >
            Pide una auditoría gratis
          </Text>
          <div className={styles.desc_text}>
            <Text
              color="white"
              bold="font-light"
              textAlignMobile="start"
              fontSize="18px"
              fontSizeMobile="14px"
            >
              Llena la forma, te responderemos en menos de 24 horas.
            </Text>
          </div>

          <div className={styles.contactIcons}>
            <Mail className={styles.icons} />
            <div className={styles.iconsText}>
              <h4>Mail</h4>
              <p>whittemburydavid1@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactIcons}>
            <Phone className={styles.icons} />
            <div className={styles.iconsText}>
              <h4>Whatsapp</h4>
              <p>+51 903300422</p>
            </div>
          </div>
          <div className={styles.contactIcons}>
            <Linkedin className={styles.icons} />
            <div className={styles.iconsText}>
              <h4>LinkedIn</h4>
              <p>Jose Whittembury</p>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.mobileBackground}></div>

          <div className={styles.form}>
            <Text color="black">ÚLTIMO PASO</Text>

            <div className={styles.formLine}>
              <Input
                label="Nombre y Apellido*"
                variant="greyLight"
                labelColor="black-lighter"
                id="firstName"
                placeholder="Nombre"
                onChange={handleChange}
                value={formData.firstName}
                onError={() => {}}
              />
            </div>

            <div className={styles.formLine}>
              <Input
                label="Email*"
                variant="greyLight"
                labelColor="black-lighter"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                onError={() => {}}
              />
            </div>

            <div className={styles.formLine}>
              <Input
                label="Pais*"
                variant="greyLight"
                placeholder="Pais"
                labelColor="black-lighter"
                id="location"
                onChange={handleChange}
                value={formData.location}
                onError={() => {}}
              />
            </div>

            <div className={styles.formLine}>
              <Input
                label="Teléfono*"
                placeholder="Teléfono"
                id="phone"
                variant="greyLight"
                labelColor="black-lighter"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div className={styles.formLine}>
              <Input
                label="Sitio Web*"
                placeholder="Sitio Web"
                id="website"
                variant="greyLight"
                labelColor="black-lighter"
                onChange={handleChange}
                value={formData.website}
              />
            </div>

            <div className={styles.btnEnviar}>
              <IconTextButton
                colorVariant="primary"
                size="100%"
                textProps={{ size: "sm" }}
                onClick={handleSendFormData}
              >
                Quiero una auditoría gratuita
              </IconTextButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
