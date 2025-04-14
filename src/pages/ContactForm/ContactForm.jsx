import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Nav from "../../components/organisms/Nav/Nav";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Footer from "../../components/organisms/Footer/Footer";
import { sendContactForm } from "../../services/api/sendContactForm";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import Mark from "../../components/atoms/Mark/Mark";
import Flecha3 from "@assets/flecha 3.svg";
import Logo from "../../components/atoms/Logo/Logo";
import Link from "../../components/atoms/Link/Link";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    lastName: localStorage.getItem("lastName") ?? "",
    email: localStorage.getItem("email") ?? "",
    phone: localStorage.getItem("phone") ?? "",
    clinicName: localStorage.getItem("clinicName") ?? "",
    website: localStorage.getItem("website") ?? "",
    location: localStorage.getItem("location") ?? "",
    anualRevenue: localStorage.getItem("anualRevenue") ?? "",
    comments: localStorage.getItem("comments") ?? "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (id, value) => {
    localStorage.setItem(id, value);
    setContactForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendFormData = async () => {
    try {
      setLoading(true);
      await sendContactForm(contactForm);
      alert("Datos enviados!");
    } catch (error) {
      alert("hubo un error al enviar los datos, por favor intente nuevamente");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.contactForm}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      {loading && <LoadingScreen />}
      <main className={styles.content}>
        <div className={styles.content_sections}>
          {/*  <img src={Flecha3} className={`${styles.flecha}`} /> */}
          <section className={styles.desc}>
            <Text type="smalltitle" bold="semibold" color="black">
              Pide una Auditoria para tu Consultorio
            </Text>
            <div className={styles.detail}>
              <Text size="sm" bold="font-light" color="black">
                {screen.availWidth > 1024
                  ? "Puedes ponerte en contacto con nosotros directamente por Whatsapp o llenando tus datos en la forma de la izquierda."
                  : "Puedes ponerte en contacto con nosotros directamente por Whatsapp o llenando tus datos en la forma de abajo."}
              </Text>
              <Text size="sm" bold="font-light" color="black">
                No olvides incluir algunas palabras sobre ti y tu negocio.
              </Text>
            </div>
            <div className={styles.infoBtn}>
              <IconTextButton icon={"wp"} colorVariant="secondary-dark">
                Whatsapp
              </IconTextButton>
            </div>
          </section>
          <section className={styles.form}>
            <Text size="ty">
              <Mark color="primary-bg">ÚLTIMO PASO</Mark>
            </Text>

            <div className={styles.input_line}>
              <Input
                variant="white"
                id={"firstName"}
                label="Nombre*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Nombre"
                value={contactForm.firstName}
              />
              <Input
                variant="white"
                id={"email"}
                label="Email*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Email"
                value={contactForm.email}
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="white"
                id={"phone"}
                labelColor="black"
                label="Teléfono*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Teléfono"
                value={contactForm.phone}
              />
              <Input
                variant="white"
                id={"website"}
                label="Sitio Web*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Sitio Web*"
                value={contactForm.website}
              />
            </div>
            <div className={styles.input_line}>
              <Select
                variant="white"
                labelColor="black"
                elements={["safasf", "eee"]}
                id={"location"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ubicación de la clínica*"
                icon={"arrowDown"}
                value={contactForm.location}
                style={{ height: "48px" }}
              />
              <Select
                variant="white"
                labelColor="black"
                elements={["safasf", "eee"]}
                id={"anualRevenue"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ingresos Anuales*"
                icon={"arrowDown"}
                value={contactForm.anualRevenue}
                style={{ height: "48px" }}
              />
            </div>

            <TextArea
              variant="white"
              labelColor="black"
              label="Comentarios (opcional)"
              id={"comments"}
              onChange={handleChange}
              value={contactForm.comments}
            />

            <div className={styles.sendBtn}>
              <IconTextButton
                colorVariant="primary"
                textProps={{ size: "sm" }}
                onClick={handleSendFormData}
              >
                Quiero Una Auditoría
              </IconTextButton>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <Text size="sm" color="black" bold="font-light">
          Copyright © {new Date().getFullYear()}, HackDental.com
        </Text>
        <div className={styles.links}>
          <Link to={"#"}>
            <Text color="black" size="ty" bold="font-light">
              Politica de Privacidad
            </Text>
          </Link>
          <hr className={styles.separator} />
          <Link to={"#"}>
            <Text color="black" size="ty" bold="font-light">
              Cumplimiento del RGPD
            </Text>{" "}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
