import React, { useEffect, useState } from "react";
import styles from "./ourProgram.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/Foto video.gif";
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

const OurProgram = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    lastName: localStorage.getItem("lastName") ?? "",
    email: localStorage.getItem("email") ?? "",
    phone: localStorage.getItem("phone") ?? "",
  });

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
            Desbloquea el potencial de tu <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Mark color="primary-bg-triangular-light" bold="extra-bold">
                Consultorio
              </Mark>
            </div>
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
              <Text size="sm" textAlign="center" color="white">
                <Mark color="primary-darker-bg">
                  **DUEÑO DE CONSULTORIO DENTAL**
                </Mark>
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
                    labelColor="white"
                    onChange={handleChange}
                    value={formData.firstName}
                    onError={() => {}}
                  />
                  <Input
                    id={"lastName"}
                    label="Apellido*"
                    variant="white"
                    placeholder="Apellido*"
                    labelColor="white"
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
                  labelColor="white"
                  onChange={handleChange}
                  value={formData.email}
                  onError={() => {}}
                />
                <Input
                  id={"phone"}
                  label="Teléfono*"
                  variant="white"
                  placeholder="Teléfono*"
                  labelColor="white"
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
      </header>
      <main className={styles.main}>
        <div className={styles.ventaHumo}>
          <div className={styles.subsection}>
            <Text
              type="bigtitle"
              color="black"
              textAlign="center"
              s={{ lineHeight: "1.15" }}
            >
              Eres el mejor en lo que haces, déjanos a nosotros el Marketing
            </Text>
            <Text bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a jaka@
              .design y te responderemos en un plazo de 24 horas.
            </Text>
            <img src={Nene} className={styles.neneArio} />
          </div>
        </div>
        <div className={styles.detalleNuestroPrograma}>
          <div className={styles.detalle__content}>
            <Text type="title" color="white">
              ¿Qué incluye nuestro programa? 🧐
            </Text>
            <section className={styles.seccionDetalle}>
              <img src={imagenDetalle1} className={styles.img__detalle1} />
              <div className={styles.detalleSeccion}>
                <Text color="white">
                  Usemos el método HackDental en tu Consultorio
                </Text>
                <Text color="white" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas
                </Text>
                <div className={styles.detailCards}>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text s={{ color: "#ebeced" }} bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text s={{ color: "#ebeced" }} bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                </div>
              </div>
            </section>
            <section className={`${styles.seccionDetalle} ${styles.dos}`}>
              <div className={`${styles.detalleSeccion} ${styles.dos}`}>
                <Text color="white">
                  Usemos el método HackDental en tu Consultorio
                </Text>
                <Text color="white" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas
                </Text>
                <div className={styles.detailCards}>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                </div>
              </div>
              <img src={imagenDetalle2} className={styles.img__detalle1} />
            </section>
            <div className={styles.detalle__footer}>
              <div className={styles.aplicarProgramaBtn}>
                <IconTextButton colorVariant="white" size="100%">
                  Aplicar al Programa
                </IconTextButton>
              </div>
              <div className={styles.footer__card}>
                <img src={Medicos} className={styles.footer__img} />
                <div className={styles.footer__desc}>
                  <Text s={{ color: "#ebeced", lineHeight: "1.33" }}>
                    Únete a los dentistas
                  </Text>
                  <Text
                    bold="font-light"
                    s={{ color: "#ebeced", lineHeight: "1.33" }}
                  >
                    que quieren crecer sus consultorios.{" "}
                    <Mark bold="regular" color="primary-light">
                      Cupos limitados.
                    </Mark>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionHorrible}>
          <div className={styles.contenido}>
            <div className={styles.seccionnes}>
              <div className={styles.subsection}>
                <Text
                  fontSize="2rem"
                  color="light"
                  textAlign="center"
                  s={{ lineHeight: "1.1" }}
                >
                  Los 3 errores más comunes que los consultorios dentales
                  cometen 😵‍💫❌
                </Text>
                <Text color="light" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas.
                </Text>
                <Text color="light" bold="font-light">
                  No olvides incluir algunas palabras sobre ti y tu negocio.
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a{" "}
                  <Mark bold="bold" color="marked">
                    jaka@ .design
                  </Mark>{" "}
                  y te responderemos en un plazo de 24 horas.
                </Text>

                <Text
                  color="light"
                  type="subtitle"
                  textAlign="center"
                  s={{ lineHeight: "1.1" }}
                >
                  Aquí es donde la mayoría de consultorios se equivocan:
                </Text>
                <div className={styles.errors}>
                  <div className={styles.error}>
                    <Icon size={"2rem"} color="#8fc29f" type={"closeCircle"} />
                    <Text color="light" bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                      electrónico a <Mark color="marked">jaka@ .design</Mark> y
                      te responderemos en un plazo de 24 horas.
                    </Text>
                  </div>
                  <div className={styles.error}>
                    <Icon size={"2rem"} color="#8fc29f" type={"closeCircle"} />
                    <Text color="light" bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                      electrónico a <Mark color="marked">jaka@ .design</Mark> y
                      te responderemos en un plazo de 24 horas.
                    </Text>
                  </div>
                  <div className={styles.error}>
                    <Icon size={"2rem"} color="#8fc29f" type={"closeCircle"} />
                    <Text color="light" bold="font-light">
                      Puedes ponerte en contacto con nosotros por correo
                      electrónico a <Mark color="marked">jaka@ .design</Mark> y
                      te responderemos en un plazo de 24 horas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className={styles.cardMeet}>
                {/*  <img
                  src={Flecha1}
                  className={`${styles.flecha} ${styles.flecha1Izquierda}`}
                />
                <img
                  src={Flecha1}
                  className={`${styles.flecha} ${styles.flecha1Derecha} `}
                /> */}
                <Text color="black" textAlign="center">
                  ¿Abrirías más consultorios si supieras cómo atraer más
                  pacientes?
                </Text>
                <div className={styles.cardMeetDetail}>
                  <Text bold="font-light" color="black">
                    Puedes ponerte en contacto con nosotros por correo
                    electrónico a jaka@ .design y te responderemos en un plazo
                    de 24 horas.
                  </Text>
                  <Text bold="font-light" color="black">
                    No olvides incluir algunas palabras sobre ti y tu negocio.
                    Puedes ponerte en contacto con nosotros por correo
                    electrónico a jaka@ .design y te responderemos en un plazo
                    de 24 horas.
                  </Text>
                  <div className={styles.btnMeet}>
                    <IconTextButton size="100%">
                      Solicita una reunión
                    </IconTextButton>
                  </div>
                  <div
                    className={`${styles.footer__card} ${styles.footer__cardMeet}`}
                  >
                    <img src={Medicos} className={styles.footer__img} />
                    <div className={styles.footer__desc}>
                      <Text s={{ color: "black", lineHeight: "1.33" }}>
                        Únete a los dentistas
                      </Text>
                      <Text
                        bold="font-light"
                        s={{ color: "black", lineHeight: "1.33" }}
                      >
                        que quieren crecer sus consultorios.{" "}
                        <Mark bold="regular" color="primary-dark">
                          Cupos limitados.
                        </Mark>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comoFunciona}>
          <img src={ImgFlechas} className={styles.comoFunciona__img} />
          <div className={styles.comoFunciona__desc}>
            <Text type="title" color="black">
              ¿Cuánto más vas a postergar <br />
              el éxito de tu consultorio dental? 🏆
            </Text>
            <Text bold="font-light" s={{ color: "#213343" }}>
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico.
            </Text>
          </div>
        </div>
        <section className={styles.beneficiosScroll}>
          <div className={styles.beneficiosScroll__contents}>
            <Text color="white" s={{ lineHeight: "1.1", textAlign: "center" }}>
              Aprende de Nuestro Metodo <br /> Especializado de Marketing
              Dental🔬
            </Text>
            <div className={styles.beneficiosScroll__card}>
              <img src={Nene} className={styles.beneficiosScroll__img} />

              <div className={styles.beneficiosScroll__scrollBarNumero}>
                <Text color="white">01</Text>
                <div className={styles.beneficiosScroll__barraScrolling}>
                  <div
                    className={`${styles.beneficiosScroll__barraScrolling__scroll} scroll`}
                  ></div>
                </div>
              </div>

              <div className={styles.beneficiosScroll__descripcion}>
                <Text color="white">
                  Recibe una auditoría de marketing gratuita
                </Text>
                <Text color="light" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
                <div className={styles.beneficiosScroll__descripcion__cards}>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.beneficiosScroll__card}>
              <img src={Nene} className={styles.beneficiosScroll__img} />

              <div className={styles.beneficiosScroll__scrollBarNumero}>
                <Text color="white">01</Text>
                <div className={styles.beneficiosScroll__barraScrolling}>
                  <div
                    className={`${styles.beneficiosScroll__barraScrolling__scroll} scroll`}
                  ></div>
                </div>
              </div>

              <div className={styles.beneficiosScroll__descripcion}>
                <Text color="white">
                  Recibe una auditoría de marketing gratuita
                </Text>
                <Text color="light" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
                <div className={styles.beneficiosScroll__descripcion__cards}>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.beneficiosScroll__card}>
              <img src={Nene} className={styles.beneficiosScroll__img} />

              <div className={styles.beneficiosScroll__scrollBarNumero}>
                <Text color="white">01</Text>
                <div className={styles.beneficiosScroll__barraScrolling}>
                  <div
                    className={`${styles.beneficiosScroll__barraScrolling__scroll} scroll`}
                  ></div>
                </div>
              </div>

              <div className={styles.beneficiosScroll__descripcion}>
                <Text color="white">
                  Recibe una auditoría de marketing gratuita
                </Text>
                <Text color="light" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
                <div className={styles.beneficiosScroll__descripcion__cards}>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                  <div className={styles.detailCard}>
                    <Icon
                      type={"check"}
                      size={"1.5rem"}
                      color="var(--primary)"
                    />
                    <Text color="white" bold="regular">
                      Puedes ponerte en contacto con nosotros por correo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          {/*  <img src={Flecha2} className={`${styles.flecha} ${styles.flecha3}`} /> */}
          <div className={styles.desc}>
            <Text type="title" color="light" bold="bold">
              Pide una Auditoria para tu Consultorio
            </Text>

            <Text color="light" bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text color="light" bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en nosotros por{" "}
              <Mark color="submarked-blue-light">
                Aceptamos 10 nuevas clínicas
              </Mark>{" "}
              contacto con nosotros. Aceptamos 10 nuevas clínicas
            </Text>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <Text>
                <Mark color="primary-bg">ÚLTIMO PASO</Mark>
              </Text>
              <div className={styles.formLine}>
                <Input
                  label="Nombre*"
                  variant="white"
                  labelColor="black"
                  id={"firstName"}
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={formData.firstName}
                  onError={() => {}}
                />
                <Input
                  label="Apellido*"
                  variant="white"
                  placeholder="Apellido"
                  labelColor="black"
                  id={"lastName"}
                  onChange={handleChange}
                  value={formData.lastName}
                  onError={() => {}}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Email*"
                  variant="white"
                  labelColor="black"
                  placeholder="Email"
                  id={"email"}
                  onChange={handleChange}
                  value={formData.email}
                  onError={() => {}}
                />
                <Input
                  label="Teléfono*"
                  placeholder="Teléfono"
                  id={"phone"}
                  variant="white"
                  labelColor="black"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Pais*"
                  variant="white"
                  placeholder="Pais"
                  labelColor="black"
                  id={"location"}
                  onChange={() => {}}
                  onError={() => {}}
                />
                {/*  <Input
                  label="Yo Quiero*"
                  id={"objetive"}
                  variant="black"
                  labelColor="light"
                  onChange={() => {}}
                  onError={() => {}}
                /> */}
                <div>
                  <Select
                    onChange={() => {}}
                    onError={() => {}}
                    id={"objetive"}
                    elements={["ASFAFS"]}
                    label={"Yo Quiero*"}
                    variant="white"
                    labelColor="black"
                    placeholder={"Elegir Opción"}
                    icon={"arrowDown"}
                  />
                </div>
              </div>
              <TextArea
                label="Comentarios (opcional)"
                labelColor="black"
                variant="white"
                id={"comments"}
                placeholder="Ingresa tus comentarios aqui."
                errorValue={() => {}}
                onChange={() => {}}
              />
              <div className={styles.btnEnviar}>
                <IconTextButton
                  colorVariant="primary"
                  textProps={{ size: "sm" }}
                >
                  Quiero ser Contactado
                </IconTextButton>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <Text color="light" bold="font-light">
            Copyright © {new Date().getFullYear()}, HackDental.com
          </Text>
          <div className={styles.links}>
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>
            </Link>
            <hr className={styles.separator_footer} />
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>{" "}
            </Link>
            <hr className={styles.separator_footer} />
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default OurProgram;
