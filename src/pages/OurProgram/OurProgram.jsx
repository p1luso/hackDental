import { useEffect, useRef, useState } from "react";
import styles from "./ourProgram.module.css";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/videoOurProgram.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Mark from "../../components/atoms/Mark/Mark";
import Medicos from "@assets/Medicos.svg";
import Doubts from "../../components/molecules/Doubts/Doubts";
import leftArrow from "@assets/leftArrow.svg";
import rightArrow from "@assets/rightArrow.svg";
import DaysCounter from "../../components/organisms/DaysCounter/DaysCounter";
import { useNavigate } from "react-router-dom";
import { CONTACT_FORM, LANDING_PAGE } from "../../constants/routes";
import Footer from "../../components/organisms/Footer/Footer";
import n1 from "@assets/n1.svg";
import n2 from "@assets/n2.svg";
import Logo from "@assets/Logo_Fondo_Oscuro.svg";
import { color } from "framer-motion";

const OurProgram = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") ?? "",
    lastName: localStorage.getItem("lastName") ?? "",
    email: localStorage.getItem("email") ?? "",
    phone: localStorage.getItem("phone") ?? "",
  });
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [showInlineVideo, setShowInlineVideo] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (video) {
      const bounding = e.target.getBoundingClientRect();
      const clickPosition = e.clientX - bounding.left;
      const clickPercent = clickPosition / bounding.width;
      video.currentTime = video.duration * clickPercent;
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      if (window.fbq) {
        window.fbq("trackCustom", "VideoWatch", {
          content_name: title,
          content_category: "Button",
        });
      }
    };
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.parentElement.requestFullscreen(); // fullscreen del contenedor, no del video directo
    }
  };

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <div className={styles.btns}>
          <IconTextButton
            textProps={{ fontSize: "14px" }}
            colorVariant="primary-bordered3"
            icon={"wp"}
            onClick={() => {
              navigate("https://wa.me/51914727355");
              if (window.fbq) {
                window.fbq("trackCustom", "WhatsappButton", {
                  content_name: title,
                  content_category: "Button",
                });
              }
            }}
          >
            Whatsapp
          </IconTextButton>
          <IconTextButton
            textProps={{ fontSize: "14px" }}
            colorVariant="white"
            size="50%"
            onClick={() => {
              navigate(CONTACT_FORM);
              if (window.fbq) {
                window.fbq("trackCustom", "GoToContactForm", {
                  content_name: title,
                  content_category: "Button",
                });
              }
            }}
          >
            Pedir Auditoría
          </IconTextButton>
        </div>
      </nav>
      <header className={styles.banner}>
        <div className={styles.bgTransparent}>
          <div className={styles.elements}>
            <div className={styles.onlyDesktop}>
              <div className={styles.line}></div>

              <Text
                type="bigtitle"
                color="white"
                bold="semibold"
                textAlign="center"
                fontSize="26px"
                fontSizeMobile="21px"
                s={{
                  lineHeight: "0.95",
                  fontFamily: "lexend",
                  fontWeight: "400",
                  letterSpacing: "-0.5px",
                  color: "#cfe1df",
                }}
              >
                Conoce nuestro método para <br></br>
                <span className={styles.betterTreatment}>
                  Vender tus Tratamientos
                </span>
              </Text>
              <div style={{ width: "90%" }}>
                <Text
                  color="white-lighter"
                  bold="font-light"
                  textAlign="center"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  s={{
                    lineHeight: "1.7",
                    fontFamily: "lexend",
                  }}
                >
                  Obtén una auditoría de marketing dental completamente gratuita
                  y accede a nuestro método especializado para llevar tu clínica
                  al siguiente nivel.
                </Text>
              </div>
              <div className={styles.numberTexts}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src={n1} alt="" className={styles.numbersMain} />
                  <Text
                    color="white-lighter"
                    bold="font-light"
                    textAlign="center"
                    fontSize="17px"
                    fontSizeMobile="16px"
                    s={{
                      lineHeight: "1.7",
                      fontFamily: "lexend",
                    }}
                  >
                    Mira este video sobre nuestro metodo.
                  </Text>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src={n2} alt="" className={styles.numbersMain} />
                  <Text
                    color="white-lighter"
                    bold="font-light"
                    textAlign="center"
                    fontSize="17px"
                    fontSizeMobile="16px"
                    s={{
                      lineHeight: "1.7",
                      fontFamily: "lexend",
                    }}
                  >
                    Solicita tu auditoría gratuita hoy.
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.videoContainer}>
              <div className={styles.videoDrawer}>
                <img src={leftArrow} alt="" className={styles.arrows} />

                <div className={styles.reactPlayerContainer}>
                  {isPlaying ? (
                    <iframe
                      src="https://player.vimeo.com/video/1085319519?autoplay=1&title=0&byline=0&portrait=0"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div
                      className={styles.previewContainer}
                      onClick={() => setIsPlaying(true)}
                    >
                      <img src={imgVideo} className={styles.previewImage} />
                      <button className={styles.videoPlayBtn}>
                        <Icon size="1.5rem" color="var(--white)" type="play" />
                      </button>
                    </div>
                  )}
                </div>

                <img src={rightArrow} alt="" className={styles.arrows} />
              </div>
            </div>

            <div className={styles.onlyMobile}>
              <div className={styles.line}></div>
              <Text
                type="bigtitle"
                color="white"
                bold="semibold"
                textAlign="center"
                fontSize="34px"
                fontSizeMobile="19px"
                s={{
                  lineHeight: "0.95",
                  fontFamily: "lexend",
                  fontWeight: "500",
                  letterSpacing: "-0.5px",
                  color: "#cfe1df",
                }}
              >
                Conoce nuestro método para<br></br>
                <span className={styles.betterTreatment}>
                  Vender tus Tratamientos
                </span>
              </Text>
              <Text
                color="white-lighter"
                bold="font-light"
                textAlign="center"
                fontSize="18px"
                fontSizeMobile="16px"
                s={{
                  lineHeight: "1.7",
                  fontFamily: "lexend",
                }}
              >
                Obtén una auditoría de marketing dental completamente gratuita y
                accede a nuestro método especializado para llevar tu clínica al
                siguiente nivel.
              </Text>
              <div className={styles.numberTexts}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src={n1} alt="" className={styles.numbersMain} />
                  <Text
                    color="white-lighter"
                    bold="font-light"
                    textAlign="center"
                    fontSize="18px"
                    fontSizeMobile="16px"
                    s={{
                      lineHeight: "1.7",
                      fontFamily: "lexend",
                    }}
                  >
                    Mira este video completo
                  </Text>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src={n2} alt="" className={styles.numbersMain} />
                  <Text
                    color="white-lighter"
                    bold="font-light"
                    textAlign="center"
                    fontSize="18px"
                    fontSizeMobile="16px"
                    s={{
                      lineHeight: "1.7",
                      fontFamily: "lexend",
                    }}
                  >
                    Solicita tu auditoría gratuita hoy.
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.banner__btns}>
              <a href={CONTACT_FORM}>
                <IconTextButton
                  colorVariant="white"
                  textProps={{ fontWeight: 400 }}
                  textFontWeight="400" // Nueva prop
                  size="100%"
                  onClick={() => {
                    if (window.fbq) {
                      window.fbq("trackCustom", "GoToContactForm", {
                        content_name: title,
                        content_category: "Button",
                      });
                    }
                  }}
                >
                  Pedir Auditoria Gratis
                </IconTextButton>
              </a>
            </div>
            <div className={styles.spainLocation_footer__card}>
              <img src={Medicos} className={styles.spainLocation_footer__img} />
              <div className={styles.footer__desc}>
                <Text
                  textAlignMobile="center"
                  fontSizeMobile="12px"
                  fontSize="14px"
                  s={{ color: "white", lineHeight: "1.33" }}
                >
                  Únete a los dentistas
                </Text>
                <Text
                  textAlignMobile="center"
                  bold="font-light"
                  fontSize="14px"
                  fontSizeMobile="12px"
                  s={{ color: "#d9d9d9", lineHeight: "1.33" }}
                >
                  que usan nuestro método.{" "}
                  <Mark bold="regular" color="green-lighter">
                    Cupos limitados.
                  </Mark>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.daysCounter}>
        <div
          style={{
            margin: "0 28px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Text
            fontFamily="lexend"
            color="white"
            textAlignMobile="center"
            bold="font-light"
            fontSize="18px"
            fontSizeMobile="16px"
            textAlign="start"
          >
            ¡Apúrate! Haremos auditorías gratis solo hasta junio de 2025.
          </Text>
          <DaysCounter numberBoxes={true} targetDate="2025-06-01" />
        </div>
      </section>
      {/* <div className={styles.progressBarSection}>
        <div className={styles.progressTexts}>
          <h2 className={styles.progressTitle}>
            ¿Qué incluye nuestra auditoría? <br></br>
            <span className={styles.hackDentalMethod}>
              Servicios valuados en{" "}
              <del style={{ textDecorationThickness: "3px" }}>$2000</del> Gratis
            </span>
          </h2>
          <p className={styles.progressText}>
            Averigua si tu consultorio califica para nuestros servicios.
          </p>
        </div>
        <div className={styles.progressBarButton}>
          <a href={CONTACT_FORM}>
            <IconTextButton size="100%" colorVariant="white-green">
              Aplicar Ahora
            </IconTextButton>
          </a>
        </div>
        <div className={styles.progressBar}>
          <Section
            icon={<img src={strategyCall} />}
            title="Llamada estratégica con nuestro fundador."
            steps={["Puedes ponerte en contacto con nosotros por correo"]}
          />
          <Section
            icon={<img src={marketStudy} />}
            title="Estudio de tu mercado local"
            textLeft={true}
            steps={["Puedes ponerte en contacto con nosotros por correo"]}
          />
          <Section
            icon={<img src={marketingPlan} />}
            title="Plan de Marketing para tu consultorio"
            lastSection={true}
            steps={["Puedes ponerte en contacto con nosotros por correo"]}
          />
        </div>
      </div> */}
      <section className={styles.doubtsSection}>
        <div className={styles.doubtContainer}>
          <div className={styles.contentContainer_doubt}>
            <div className={styles.doubtText}>
              <div className={styles.doubtTitles}>
                <div className={styles.darkLine}></div>
                <Text
                  type="bigtitle"
                  textAlign="center"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="26px"
                  fontSizeMobile="18px"
                  s={{ fontWeight: "500",  color: "#01443a"   }}
                >
                  ¿Tienes alguna duda?
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="center"
                  color="white-secondary"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="22px"
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
                s={{ color: "#213343" }}
              >
                Respondemos en menos de 24 horas
              </Text>

              <div className={styles.doubtButton}>
                <a href={"https://wa.me/51914727355"}>
                  <IconTextButton
                    size="100%"
                    colorVariant="white-green"
                    onClick={() => {
                      if (window.fbq) {
                        window.fbq("trackCustom", "GoToContactForm", {
                          content_name: title,
                          content_category: "Button",
                        });
                      }
                    }}
                  >
                    Consulta al Whatsapp
                  </IconTextButton>{" "}
                </a>
              </div>
              <div className={styles.doubtButtonMobile}>
                <a href={"https://wa.me/51914727355"}>
                  <IconTextButton
                    size="100%"
                    colorVariant="white-green"
                    onClick={() => {
                      if (window.fbq) {
                        window.fbq("trackCustom", "WhatsappButton", {
                          content_name: title,
                          content_category: "Button",
                        });
                      }
                    }}
                  >
                    Consulta al Whatsapp
                  </IconTextButton>{" "}
                </a>
              </div>
              <div className={styles.faqContainer}>
                <Doubts
                  title="¿Para qué tipo de consultorio son los servicios de HackDental?"
                  content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum maxime libero cum quidem culpa id, ipsam placeat nobis corporis accusamus quasi distinctio repellendus laudantium illo laborum itaque minima non."
                />{" "}
                <Doubts
                  title="Me interesa la auditoria gratuita, ¿Cómo aplico?"
                  content="Lorem"
                />{" "}
                <Doubts
                  title="¿Qué incluye la auditoría gratuita?"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurProgram;
