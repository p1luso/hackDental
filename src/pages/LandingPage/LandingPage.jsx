import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import wwaDifferences from "@assets/wwaDifferences.svg";
import wwaDifferencesMobile from "@assets/wwaDifferencesMobile.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Footer from "../../components/organisms/Footer/Footer";
import Icon from "../../components/atoms/Icon/Icon";
import { useNavigate } from "react-router-dom";
import {
  CONTACT_FORM,
} from "../../constants/routes";
import imgEbookPrueba from "@assets/imgEbookPrueba.svg";
import Mark from "../../components/atoms/Mark/Mark";
import ImgBanner from "@assets/ImgBanner.svg";
import ImgBtnWS from "@assets/imgBtnWS.svg";
import PartnersCarousel from "../../components/organisms/PartnersCarousel/PartnersCarousel";
import Medicos from "@assets/Medicos.svg";
import { useConfigStore } from "../../stores/useConfig";
import Founder from "../../components/organisms/Founder/Founder";
import LeftArrow from "@assets/flechaizquierda.svg";
import RightArrow from "@assets/flechaderecha.svg";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import WhoWeAreImage from "@assets/whoWeAreImg.svg";
import HappyDentist from "@assets/happyDentist.svg";
import SadDentist from "@assets/sadDentist.svg";
import CheckDentistIcon from "@assets/checkDentistIcon.svg";
import CrossIcon from "@assets/crossIcon.svg";
import ModalPopUp from "../../components/organisms/ModalPopUp/ModalPopUp";
import CoberturaDental from "@assets/imagen_dentistLandind.svg"
const books = [
  { img: imgEbookPrueba, title: "7 Secretos del Marketing Dental" },
  { img: imgEbookPrueba, title: "Whatsapp de Clinicas en 5 minutos" },
  { img: imgEbookPrueba, title: "IA para Consultorios Dentales" },
  { img: imgEbookPrueba, title: "Whatsapp de Clínicas en 5 minutos" },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [showWSMsg, setShowWSMsg] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isFading, setIsFading] = useState(false);
  const fadeDuration = 300;
  const navMobileMenuIsShow = useConfigStore(
    (state) => state.navMobileMenuIsShow
  );

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 800) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage(); // correr al inicio
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);
  /*   useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 30 * 1000);
  }, []);  */

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(books.length / cardsPerPage);
  const maxPage = totalPages - 1;
  const startIndex = page * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  const handleNext = () => {
    if (page === maxPage) return;
    setIsFading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFading(false);
    }, fadeDuration);
  };

  const handlePrev = () => {
    if (page === 0) return;
    setIsFading(true);
    setTimeout(() => {
      setPage((prev) => prev - 1);
      setIsFading(false);
    }, fadeDuration);
  };

  return (
    <div className={styles.page}>
      <div
        className={`${styles.popupContainer} ${
          showPopup && !navMobileMenuIsShow && styles.show
        }`}
      >
        <ModalPopUp showPopup={showPopup}
  setShowPopup={setShowPopup}
  navMobileMenuIsShow={navMobileMenuIsShow}/>
      </div>

      {/* <div className={styles.help}>
        {showWSMsg && (
          <div className={styles.notification}>
            <Text bold="font-light" size="ty">
              👋¡Hola! Mi nombre es Jose Whittembury, Director de Marketing en
              HackDental. ¿Tienes alguna duda sobre nuestros servicios?
            </Text>

            <img src={ImgBtnWS} alt="img ws" className={styles.wsImg} />
            <div className={styles.closeBtn}>
              <IconButton
                icon="close"
                variant="secondary"
                onClick={() => setShowWSMsg(false)}
              />
            </div>
          </div>
        )}
        <div className={styles.wsBtn}>
          <Icon size={"2rem"} type={"wp"} color="#fafafa" />
        </div>
      </div> */}
      <Nav />
      <header className={styles.header}>
        <section className={styles.banner}>
          <div className={styles.contents}>
            <div className={styles.banner__content}>
              <Text
                size="xxbig"
                bold="bold"
                fontFamily="font-cuarternary"
                color="white"
                fontSize="50px"
                fontSizeMobile="34px"
                s={{
                  lineHeight: "0.95",
                  fontFamily: "queens",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                }}
              >
                Somos una Agencia de Marketing{" "}
                <s className={styles.crossLine}>genérico</s>{" "}
                <span className={styles.dentalWord}>Dental</span>
              </Text>
              <Text
                fontFamily="lexend"
                size="lg"
                textAlignMobile="center"
                fontSizeMobile="18px"
                s={{ lineHeight: "1.1", color: "#e9e9e9", fontWeight: "300" }}
              >
                Convertimos tu clínica en autoridad local
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton
                  size="100%"
                  onClick={() => navigate(CONTACT_FORM)}
                  colorVariant="white"
                >
                  Quiero saber más
                </IconTextButton>
              </div>
            </div>
            <img className={styles.banner__img} src={ImgBanner} />
          </div>
        </section>
      </header>
      <section className={styles.whoAreWe}>
        <div className={styles.partners}>
          <Text
            textAlign="center"
            color="black"
            bold="regular"
            s={{ lineHeight: "1.3" }}
          >
            En HackDental utilizamos las mejores herramientas de Marketing
          </Text>
          <PartnersCarousel />
        </div>
        <div className={styles.whoAreWeContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.imageWrapper}>
              <img id={styles.founderImg} src={WhoWeAreImage} />
            </div>
            <div className={styles.founderText}>
              <div className={styles.titles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  textAlignMobile="center"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "500" }}
                >
                  En Hackdental
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  textAlignMobile="center"
                  color="black"
                  bold="semi-bold"
                  fontSize="32px"
                  fontSizeMobile="24px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  ¿Qué tipo de Agencia Somos?
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Somos una <strong>agencia de marketing dental</strong> que ayuda
                a{" "}
                <strong>consultorios dentales independientes en España</strong>{" "}
                a conseguir más pacientes a largo plazo.
              </Text>
              <Text
                fontFamily="Lexend"
                color="black-lighter"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Nuestra especialización nos ha permitido crear un método único
                para crecer consultorios dentales que{" "}
                <strong>
                  cumple con la normativa de protección de datos vigente en
                  España
                </strong>{" "}
                (RGPD, LOPDGDD y LSSI)
              </Text>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderButtonMobile}>
              <IconTextButton size="100%" colorVariant="primary-darker">
                Pedir auditoría
              </IconTextButton>{" "}
            </div>
           
            <div className={styles.founderText}>
              <div className={styles.titles}>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="28px"
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
                <IconTextButton size="260px" colorVariant="primary-darker">
                  Pedir auditoría
                </IconTextButton>{" "}
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>

          </div>
        </div>
      </section>
      {/*  <section className={styles.contactBannerSection}>
        <div className={styles.contactBanner__contents}>
          <div className={styles.desc}>
            <div className={styles.stickyContainer}>
              <Text type="bigtitle" color="white" s={{ lineHeight: "1.15" }}>
                5 Razones por las que pacientes{" "}
                <Mark bold="medium" color="primary-bg-triangular-light">
                  no eligen
                </Mark>
                <br />
                tu consultorio
              </Text>

              <div className={styles.quieroHacerCrecerBtn}>
                <IconTextButton colorVariant="white" size="100%">
                  Ver el Método HackDental
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
                    que usan nuestro método.{" "}
                    <Mark bold="regular" color="primary-light">
                      Cupos limitados.
                    </Mark>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div className={styles.detail__header}>
                <div className={styles.number}>
                  <Text bold="semibold" size={"sm"} color="light">
                    1
                  </Text>
                </div>
                <Text type="subtitle" color="black">
                  La publicidad de tu consultorio es genérica
                </Text>
              </div>
              <hr />
              <div className={styles.desc}>
                <img className={styles.detail__img} src={imgPublicidadCard} />
                <Text size="sm" color="black" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detail__header}>
                <div className={styles.number}>
                  <Text bold="semibold" size={"sm"} color="light">
                    2
                  </Text>
                </div>
                <Text type="subtitle" color="black">
                  El diseño de tu Sitio Web Dental es ineficiente
                </Text>
              </div>
              <hr />
              <div className={styles.desc}>
                <img className={styles.detail__img} src={imgDiseñoCard} />
                <Text size="sm" color="black" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detail__header}>
                <div className={styles.number}>
                  <Text bold="semibold" size={"sm"} color="light">
                    3
                  </Text>
                </div>
                <Text type="subtitle" color="black">
                  Tu estrategia de redes sociales es pobre
                </Text>
              </div>
              <hr />
              <div className={styles.desc}>
                <img className={styles.detail__img} src={imgEstrategiaCard} />
                <Text size="sm" color="black" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detail__header}>
                <div className={styles.number}>
                  <Text bold="semibold" size={"sm"} color="light">
                    4
                  </Text>
                </div>
                <Text type="subtitle" color="black">
                  Te faltan reseñas positivas online
                </Text>
              </div>
              <hr />
              <div className={styles.desc}>
                <img className={styles.detail__img} src={imgReseñasCard} />
                <Text size="sm" color="black" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detail__header}>
                <div className={styles.number}>
                  <Text bold="semibold" size={"sm"} color="light">
                    5
                  </Text>
                </div>
                <Text type="subtitle" color="black">
                  Tienes un mal sistema de recordatorio de citas
                </Text>
              </div>
              <hr />
              <div className={styles.desc}>
                <img className={styles.detail__img} src={imgRecordatorioCard} />
                <Text size="sm" color="black" bold="font-light">
                  Aprende más sobre nuestro programa de 180 días y cómo puede
                  cambiar tu práctica dental
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={styles.spainLocation}>
        <Text
          type="bigtitle"
          textAlign="center"
          color="black"
          fontFamily="lexend"
          bold="font-light"
          fontSize="32px"
          fontSizeMobile="21px"
          s={{ lineHeight: "1", fontWeight: "500" }}
        >
          Eres el mejor en lo que haces,
        </Text>
        <Text
          type="bigtitle"
          fontFamily="lexend"
          textAlign="center"
          color="black"
          bold="semi-bold"
          fontSize="36px"
          fontSizeMobile="24px"
          s={{ lineHeight: "1", fontWeight: "600" }}
        >
          déjanos a nosotros el Marketing
        </Text>
        <div className={styles.spainLocation__desc}>
          <Text color="black-lighter" fontFamily="Lexend" bold="font-light">
            Puedes ponerte en contacto con nosotros por correo electrónico a{" "}
            <strong>
              <u>jaka@ .design</u>
            </strong>{" "}
            y te responderemos en un plazo de 24 horas. No olvides incluir
            algunas palabras sobre ti y tu negocio.
          </Text>
        </div>
        <div className={styles.spanishLocation__card_container}>
          <div className={styles.spainLocation__card}>
            <div className={styles.spainLocation__card__elements}>
              <Text size="xxxlg" color="dark">
                Si tu consultorio:
              </Text>
              <div className={styles.spainLocation__items}>
                <div className={styles.spainLocation__items__item}>
                  <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

                  <Text color="black" bold="font-light">
                    Está ubicado en <strong>España.</strong>
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

                  <Text color="black" bold="font-light">
                    Factura <strong>10,000 euros</strong> o más al mes
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Icon size={"1.3rem"} color="var(--primary)" type={"check"} />

                  <Text color="black" bold="font-light">
                    Quiere crecer rápidamente en el <strong>2025</strong>.
                  </Text>
                </div>
              </div>
              <div className={styles.spainLocation__btn}>
                <IconTextButton colorVariant="darker-green" size="100%">
                  Solicita una reunión
                </IconTextButton>
              </div>
            </div>
            <div className={styles.spainLocation_footer__card}>
              <img src={Medicos} className={styles.spainLocation_footer__img} />
              <div className={styles.footer__desc}>
                <Text
                  textAlignMobile="center"
                  fontSizeMobile="14px"
                  s={{ color: "black", lineHeight: "1.33" }}
                >
                  Únete a los dentistas
                </Text>
                <Text
                  textAlignMobile="center"
                  bold="font-light"
                  fontSizeMobile="14px"
                  s={{ color: "black", lineHeight: "1.33" }}
                >
                  que usan nuestro método.{" "}
                  <Mark bold="regular" color="darker-green">
                    Cupos limitados.
                  </Mark>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainContent}>
        <div className={styles.mainContent__desc}>
          <Text
            type="bigtitle"
            textAlign="center"
            color="black"
            fontFamily="lexend"
            bold="font-light"
            fontSize="28px"
            fontSizeMobile="21px"
            s={{ lineHeight: "1", fontWeight: "500" }}
          >
            Aprende gratis con
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
            Nuestros Ebooks
          </Text>
        </div>

        <div className={styles.mainContent__cards}>
          <div className={styles.mainContent__card}>
            <button
              className={styles.arrowButtonDesk}
              onClick={handlePrev}
              disabled={page === 0}
            >
              ←
            </button>
            <div
              className={`${styles.mainContent__card__desc} ${
                isFading ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {currentBooks.map((book, i) => (
                <EBookCard bookType={false} key={i} {...book} />
              ))}
            </div>
            <button
              className={styles.arrowButtonDesk}
              onClick={handleNext}
              disabled={page === maxPage}
            >
              →
            </button>
          </div>
          <div className={styles.paginationWrapper}>
            <button
              className={`${styles.arrowButtonMob} ${styles.paginationArrow}`}
              onClick={handlePrev}
              disabled={page === 0}
            >
              ←
            </button>

            <div className={styles.pagination}>
              {Array.from({ length: maxPage + 1 }).map((_, index) => (
                <span
                  key={index}
                  className={`${styles.paginationLine} ${
                    index === page ? styles.active : ""
                  }`}
                />
              ))}
            </div>

            <button
              className={`${styles.arrowButtonMob} ${styles.paginationArrow}`}
              onClick={handleNext}
              disabled={page === maxPage}
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* <section className={styles.consultorClass}>
        <div className={styles.consultorClass_contents}>
          <div className={styles.consultorContent}>
            <Text
              type="bigtitle"
              textAlign="center"
              color="white"
              fontFamily="lexend"
              bold="font-light"
              fontSize="32px"
              fontSizeMobile="21px"
              s={{ lineHeight: "1", fontWeight: "500" }}
            >
              Pregunta para los dueños
            </Text>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="center"
              color="white"
              bold="semi-bold"
              fontSize="36px"
              fontSizeMobile="24px"
              s={{ lineHeight: "1", fontWeight: "600" }}
            >
              ¿Qué clase de consultorio tienes?
            </Text>
          </div>
          <div className={styles.dentistImages}>
            <div className={styles.happyDentist}>
              <img src={CheckDentistIcon} alt="" className={styles.iconsDentist} />
              <div className={styles.imgContainer_dentist}>
                <div className={styles.dentistTitle}>
                <Text
                  type="title"
                  fontFamily="Canva Sans"
                  textAlign="center"
                  color="black"
                  bold="semi-bold"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  Consultorio con Marketing especializado
                </Text>
                </div>
                <img src={HappyDentist} alt="happy dentist" />
              </div>
            </div>
            <div className={styles.sadDentist}>
              <img src={CrossIcon} alt="" className={styles.iconsDentist} />
              <div className={styles.imgContainer_dentist_sad}>
                <div className={styles.dentistTitle}>
                <Text
                  type="title"
                  fontFamily="Canva Sans"
                  textAlign="center"
                  color="black"
                  bold="semi-bold"
                  fontSize="28px"
                  fontSizeMobile="21px"
                  s={{ lineHeight: "1", fontWeight: "600" }}
                >
                  Consultorio con Marketing generico
                </Text>
                </div>
                <img src={SadDentist} alt="sad dentist" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={styles.prefooter}>
        <Founder />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
