import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Logo from "@assets/Logo_Fondo_Oscuro.svg";
import Input from "../../components/atoms/Input/Input";
import Mark from "../../components/atoms/Mark/Mark";
import { sendContactForm } from "../../services/api/sendContactForm";
import EstudioMercado from "@assets/EstudioMercado.svg";
import PlanMarketing from "@assets/PlanMarketing.svg";
import LlamadaEstrategica from "@assets/LlamadaEstrategica.svg";

import Circles from "@assets/3_circulos.svg";
import Finger from "@assets/3_dedo.svg";
import IconoWpp from "@assets/iconoWsp.svg";

import IrregularFigure from "@assets/Figura_irregular.svg";
import { Mail, Phone } from "lucide-react";
import Footer from "../../components/organisms/Footer/Footer";
import Select from "../../components/atoms/Select/Select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    email: localStorage.getItem("email") ?? "",
    location: localStorage.getItem("location") ?? "",
    phone: localStorage.getItem("phone") ?? "",
    website: localStorage.getItem("website") ?? "",
  });

  const countryList = [
  "España", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica",
  "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras",
  "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana",
  "Uruguay", "Venezuela"
];


  const handleChange = (id, value) => {
    localStorage.setItem(id, value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

 const handleSendFormData = async () => {
  try {
    await sendContactForm(formData);
    // Pixel Facebook
    if (window.fbq) {
      window.fbq("trackCustom", "FormularioEnviado", {
        content_name: "Formulario de Audiencia enviado",
        content_category: "Formulario de Audiencia",
      });
    }
    alert("Datos enviados!");
  } catch (error) {
    alert("Hubo un error al enviar los datos, por favor intente nuevamente");
    console.log(error);
  }
};

  return (
    <div className={styles.container}>
      <section id="contact" className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.title}>
            <img src={Logo} />
          </div>
          <div className={styles.contactsDesktop}>
            <div className={styles.contactIconsHeader}>
              <a
                href="https://wa.me/51914727355"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <img src={IconoWpp} className={styles.icons} />
                <div className={styles.iconsText}>
                  <p>Whatsapp</p>
                </div>
              </a>
            </div>
            <div className={styles.contactIconsHeader}>
              <a
                href="mailto:whittemburydavid1@gmail.com"
                className={styles.mailLink}
              >
                <div className={styles.iconsText}>
                  <p>whittemburydavid1@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
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
              fontSize="24px"
              fontSizeMobile="21px"
              textAlignMobile="start"
              color="white"
              s={{ fontWeight: 400 }}
            >
              Dueño de consultorio
            </Text>
            <Text
              type="title"
              fontSize="32px"
              fontSizeMobile="23px"
              textAlignMobile="start"
              color="white"
              bold="bold"
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
            <div className={styles.desc__incluye}>
              <Text
                color="white"
                bold="semi-bold"
                textAlignMobile="start"
                fontSize="18px"
                fontSizeMobile="14px"
              >
                Que incluye:
              </Text>
            </div>
            <div className={styles.contactIcons}>
              <img src={LlamadaEstrategica} className={styles.icons} />
              <div className={styles.iconsText}>
                <p>Llamada estratégica con nuestro fundador.</p>
              </div>
            </div>
            <div className={styles.contactIcons}>
              <img src={EstudioMercado} className={styles.icons} />
              <div className={styles.iconsText}>
                <p>Estudio de tu mercado local</p>
              </div>
            </div>
            <div className={styles.contactIcons}>
              <img src={PlanMarketing} className={styles.icons} />
              <div className={styles.iconsText}>
                <p>Plan de Marketing para tu consultorio</p>
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
                <Select
                  id="location"
                  label="País*"
                  icon="arrowDown"
                  variant="blue"
                  labelColor="black-lighter"
                  placeholder="Selecciona tu país"
                  onChange={handleChange}
                  onError={() => {}}
                  value={formData.location}
                  elements={countryList}
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
                  colorVariant="white-green"
                  size="100%"
                  textProps={{ size: "sm" }}
                  onClick={handleSendFormData}
                >
                  Quiero una auditoría gratuita
                </IconTextButton>
              </div>
            </div>
          </div>
          <div className={styles.contactsMobile}>
            <div className={styles.contactIconsHeader}>
              <a
                href="https://wa.me/51914727355"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <img src={IconoWpp} className={styles.icons} />
                <div className={styles.iconsText}>
                  <p>Whatsapp</p>
                </div>
              </a>
            </div>
            <div className={styles.contactIconsHeader}>
              <a
                href="mailto:whittemburydavid1@gmail.com"
                className={styles.mailLink}
              >
                <div className={styles.iconsText}>
                  <p>whittemburydavid1@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactForm;
