import React, { useEffect, useState } from "react";
import styles from "./ourProgram.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/videoOurProgram.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Link from "../../components/atoms/Link/Link";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../constants/routes";
import Mark from "../../components/atoms/Mark/Mark";
import Nene from "@assets/nuevaImgDentistas2.svg";
import Select from "../../components/atoms/Select/Select";
import FlechaNuestroPrograma from "@assets/nuestro metodo.svg";
import Flecha1 from "@assets/flecha 1.svg";
import imagenDetalle1 from "@assets/imagenDetalle1.svg";
import imagenDetalle2 from "@assets/imagenDetalle2.svg";
import Medicos from "@assets/Medicos.svg";
import ImgFlechas from "@assets/imgFlechas.svg";
import Section from "../../components/organisms/Section/Section";
import LeftArrow from "@assets/flechaizquierda.svg";
import RightArrow from "@assets/flechaderecha.svg";
import { Linkedin, Mail, Phone } from "lucide-react";
import CoberturaDental from "@assets/coberturaDental.svg";
import Doubts from "../../components/molecules/Doubts/Doubts";

const OurProgram = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    lastName: localStorage.getItem("lastName") ?? "",
    email: localStorage.getItem("email") ?? "",
    phone: localStorage.getItem("phone") ?? "",
  });
  const [faqExpanded, setFaqExpanded] = useState(false);

  const handleChange = (id, value) => {
    localStorage.setItem(id, value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleHideModalVideo = (e) => {
    if (e.target.id == "bg-video-modal") {
      setShowModalVideo(false);
    }
  };

  useEffect(() => {
    const scrolls = document.querySelectorAll(".scroll");
    let variablecontador = 0;
    let scrollY = 0;
    const velocidad = 8;
    let contadoresScrolls = {
      contador1: 0,
      contador2: 0,
      contador3: 0,
    };
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        contadoresScrolls = {
          contador1:
            window.scrollY > 4100 ? contadoresScrolls.contador1 + velocidad : 0,
          contador2:
            window.scrollY > 5000 ? contadoresScrolls.contador2 + velocidad : 0,
          contador3:
            window.scrollY > 5500 ? contadoresScrolls.contador3 + velocidad : 0,
        };
      } else {
        contadoresScrolls = {
          contador1:
            window.scrollY > 4100 ? contadoresScrolls.contador1 - velocidad : 0,
          contador2:
            window.scrollY > 5000 ? contadoresScrolls.contador2 - velocidad : 0,
          contador3:
            window.scrollY > 5500 ? contadoresScrolls.contador3 - velocidad : 0,
        };
      }

      scrollY = window.scrollY; // Obtener la posición del scroll
      let indice = 1;
      console.log(scrollY);
      console.log(contadoresScrolls);

      for (let scroll of scrolls) {
        /* scroll.style.transform = `perspective(1200px) translateY(${
          contadoresScrolls["contador" + indice]
        }px)`; */
        scroll.style.height = `${contadoresScrolls["contador" + indice]}px`;
        indice++;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.banner}>
        <div className={styles.bgTransparent}>
          <img
            src={FlechaNuestroPrograma}
            className={`${styles.flecha} ${styles.nuestroPrograma}`}
          />
          <div className={styles.elements}>
            <Text
              type="bigtitle"
              color="white"
              bold="semibold"
              textAlign="center"
              s={{
                lineHeight: "0.95",
                fontFamily: "queens",
                fontWeight: "800",
                letterSpacing: "-0.5px",
              }}
            >
              Aprende cómo vender tu <br></br>
              <s className={styles.crossLine}>Consultorio</s>{" "}
              <span className={styles.betterTreatment}>Mejor Tratamiento</span>
            </Text>

            <div className={styles.videoContainer}>
              <div className={styles.videoDrawer}>
                <img className={styles.videoImg} src={imgVideo} />
                <button
                  className={styles.videoPlayBtn}
                  onClick={() => setShowModalVideo(true)}
                >
                  <Icon size={"1.5rem"} color="var(--white)" type={"play"} />
                </button>
                <div
                  id="bg-video-modal"
                  className={`${styles.modalVideo} ${
                    showModalVideo && styles.show
                  }`}
                  onClick={handleHideModalVideo}
                >
                  <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/Fu4GHmyvDk8?si=-ugwjpi28KLqfGSM?controls=0&showinfo=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <form className={styles.formContacto}>
                <Text size="sm" textAlign="center">
                  <div className={styles.dentalOwner}>
                    *DUEÑO DE CONSULTORIO DENTAL*
                  </div>
                </Text>
                <Text
                  type="subtitle"
                  color="white"
                  bold="semibold"
                  textAlign="center"
                  s={{ lineHeight: "1.15" }}
                >
                  Reunete con nosotros y <br />
                  comentanos tus necesidades
                </Text>
                <div className={styles.inputs}>
                  <div className={styles.inputLine}>
                    <Input
                      id={"firstName"}
                      label="Nombre*"
                      variant="white"
                      placeholder="Nombre*"
                      labelColor="#ebeced"
                      onChange={handleChange}
                      value={formData.firstName}
                      onError={() => {}}
                    />
                    <Input
                      id={"lastName"}
                      label="Apellido*"
                      variant="white"
                      placeholder="Apellido*"
                      labelColor="#ebeced"
                      onChange={handleChange}
                      value={formData.lastName}
                      onError={() => {}}
                    />
                  </div>
                  <Input
                    id={"email"}
                    label="Email*"
                    variant="white"
                    placeholder="Email*"
                    labelColor="#ebeced"
                    onChange={handleChange}
                    value={formData.email}
                    onError={() => {}}
                  />
                  <Input
                    id={"phone"}
                    label="Teléfono*"
                    variant="white"
                    placeholder="Teléfono*"
                    labelColor="#ebeced"
                    onChange={handleChange}
                    value={formData.phone}
                    onError={() => {}}
                  />
                  <div className={styles.nextStepBtn}>
                    <IconTextButton
                      colorVariant="white"
                      textProps={{ size: "sm" }}
                    >
                      Siguiente Paso
                    </IconTextButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderButtonMobile}>
              <IconTextButton size="100%" colorVariant="primary-darker">
                Pedir auditoría
              </IconTextButton>{" "}
            </div>
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>

            <div className={styles.founderText}>
              <div className={styles.titles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="26px"
                  fontSizeMobile="21px"
                  s={{ fontWeight: "500" }}
                >
                  Dueño de Consultorio Dental
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="black"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  ¿Te interesa una auditoría gratuita?
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Averigua si tu consultorio califica para nuestros servicios
              </Text>

              <div className={styles.founderButton}>
                <IconTextButton size="260px" colorVariant="white-green">
                  Pedir auditoría
                </IconTextButton>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.progressBarSection}>
        <div className={styles.progressTexts}>
          <h2 className={styles.progressTitle}>
            Aprende las 4 ventajas del <br></br>
            <span className={styles.hackDentalMethod}>
              Método del HackDental
            </span>
          </h2>
          <p className={styles.progressText}>
            Aprende más sobre nuestro <strong>programa de 180 días</strong> y
            cómo puede <br></br>cambiar tu <strong>práctica dental</strong>
          </p>
        </div>
        <div className={styles.progressBarButton}>
          <IconTextButton size="260px" colorVariant="white-green">
            Aplicar Ahora
          </IconTextButton>
        </div>
        <div className={styles.progressBar}>
          <Section
            number="01"
            title="Aplica en España Cumple con el RGPD"
            steps={[
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
            ]}
          />
          <Section
            number="02"
            title="Aplica en España Cumple con el RGPD"
            textLeft={true}
            steps={[
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
            ]}
          />
          <Section
            number="03"
            title="Aplica en España Cumple con el RGPD"
            steps={[
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
            ]}
          />
          <Section
            number="04"
            title="Aplica en España Cumple con el RGPD"
            textLeft={true}
            lastSection={true}
            steps={[
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
              "Puedes ponerte en contacto con nosotros por correo",
            ]}
          />
        </div>
      </div>
      <section className={styles.doubtsSection}>
        <div className={styles.doubtContainer}>
          <div className={styles.contentContainer_doubt}>
            <div className={styles.doubtText}>
              <div className={styles.doubtTitles}>
                <Text
                  type="bigtitle"
                  textAlign="center"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="26px"
                  fontSizeMobile="21px"
                  s={{ fontWeight: "500" }}
                >
                  ¿Tienes alguna duda?
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="center"
                  color="black"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  No dudes en Contactarnos
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                textAlign="center"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Respondemos en menos de 24 horas
              </Text>

              <div className={styles.doubtButton}>
                <IconTextButton size="290px" colorVariant="white-green">
                  Consulta al Whatsapp
                </IconTextButton>{" "}
              </div>
              <div className={styles.doubtButtonMobile}>
                <IconTextButton size="100%" colorVariant="white-green">
                  Consulta al Whatsapp
                </IconTextButton>{" "}
              </div>
              <div className={styles.faqContainer}>
                <Doubts
                  title="Tienes alguna duda. No dudes en Contactarnos"
                  content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum maxime libero cum quidem culpa id, ipsam placeat nobis corporis accusamus quasi distinctio repellendus laudantium illo laborum itaque minima non."
                />{" "}
                <Doubts
                  title="Tienes alguna duda. No dudes en Contactarnos"
                  content="Lorem"
                />{" "}
                <Doubts
                  title="Tienes alguna duda. No dudes en Contactarnos"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                />{" "}
                <Doubts
                  title="Tienes alguna duda. No dudes en Contactarnos"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default OurProgram;
