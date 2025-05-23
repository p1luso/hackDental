import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Footer from "../../components/organisms/Footer/Footer";
import Icon from "../../components/atoms/Icon/Icon";
import { useNavigate } from "react-router-dom";
import {
  CONTACT_FORM,
  LANDING_EBOOKS,
  OUR_PROGRAM,
} from "../../constants/routes";
import imgEbook7 from "@assets/7SecretosEbook.svg";
import imgIAEbook from "@assets/IAEbook.svg";
import imgWppEbook from "@assets/WhatsappEbook.svg";
import ImgBanner from "@assets/ImgBanner.svg";
import ImgBtnWS from "@assets/imgBtnWS.svg";
import PartnersCarousel from "../../components/organisms/PartnersCarousel/PartnersCarousel";
import Medicos from "@assets/Medicos.svg";
import { useConfigStore } from "../../stores/useConfig";
import Founder from "../../components/organisms/Founder/Founder";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import WhoWeAreImage from "@assets/imagenSpain.svg";
import checkIconSpain from "@assets/checkGreyIcon.svg";
import ModalPopUp from "../../components/organisms/ModalPopUp/ModalPopUp";
import CoberturaDental from "@assets/imagen_dentistLandind.svg";
import TextLink from "../../components/molecules/TextLink/TextLink";

const books = [
  {
    img: imgEbook7,
    title: "7 Secretos del Marketing Dental",
    slug: "7-secretos-marketing-dental",
  },
  {
    img: imgWppEbook,
    title: "Whatsapp de Clinicas en 5 minutos",
    slug: "wpp-para-consultorios",
  },
  {
    img: imgIAEbook,
    title: "IA para Consultorios Dentales",
    slug: "ia-para-consultorios",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [showWSMsg, setShowWSMsg] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(1);
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
        setCardsPerPage(1);
      }
    };

    updateCardsPerPage(); // correr al inicio
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true);
  //   }, 30 * 1000);
  // }, []);

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
        <ModalPopUp
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          navMobileMenuIsShow={navMobileMenuIsShow}
        />
      </div>

      <div className={styles.help}>
        {showWSMsg && (
          <div className={styles.notification}>
            <Text bold="font-light" size="ty">
              👋 ¡Hola! Te comento que tenemos un servicio de marketing
              gratuito.
              <br /> Si tiene alguna duda, ¡no dude en contactarme!
            </Text>

            <div className={styles.imgContainer}>
              <img src={ImgBtnWS} alt="img ws" className={styles.wsImg} />
              <div className={styles.badgeImg}>1</div>{" "}
              {/* Contador para la imagen */}
            </div>
            <a
              href="https://wa.me/51914727355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTextButton
                textProps={{ fontSize: "14px" }}
                colorVariant="white-green"
                size="100%"
                icon={"wp"}
                onClick={() => {
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
            </a>
          </div>
        )}
        <div
          className={`${styles.wsBtn} ${
            showWSMsg ? styles.open : styles.closed
          }`}
          onClick={() => setShowWSMsg(!showWSMsg)}
        >
          {showWSMsg ? (
            <Icon size={"2rem"} type={"close"} color="#fafafa" />
          ) : (
            <div className={styles.iconContainer}>
              <Icon size={"2rem"} type={"wp"} color="#fafafa" />
              <div className={styles.badgeWpp}>1</div>{" "}
              {/* Contador para el logo de WhatsApp */}
            </div>
          )}
        </div>
      </div>
      <Nav />
      <header className={styles.header}>
        <section className={styles.banner}>
          <div className={styles.contents}>
            <div className={styles.banner__content}>
              <Text
                size="xxbig"
                bold="bold"
                fontFamily="lexend"
                color="white"
                fontSize="24px"
                fontSizeMobile="21px"
                s={{
                  lineHeight: "0.95",
                  fontFamily: "lexend",
                  fontWeight: "400",
                  letterSpacing: "-0.2px",
                }}
              >
                Somos una Agencia de <br />
                <span className={styles.marketingTitle}>Marketing </span>
                <s className={styles.crossLine}>genérico</s>{" "}
                <span className={styles.dentalWord}>Dental</span>
              </Text>
              <Text
                fontFamily="lexend"
                size="lg"
                textAlignMobile="center"
                fontSizeMobile="16px"
                s={{ lineHeight: "1.1", color: "#e9e9e9", fontWeight: "300" }}
              >
                Convertimos tu clínica en autoridad local
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton
                  textProps={{ fontWeight: 400 }}
                  textFontWeight="400" // Nueva prop
                  size="100%"
                  onClick={() => {
                    navigate(OUR_PROGRAM);
                    if (window.fbq) {
                      window.fbq("trackCustom", "GoToContactForm", {
                        content_name: title,
                        content_category: "Button",
                      });
                    }
                  }}
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
            <div className={styles.leftContent}>
              <div className={styles.titles}>
                <div className={styles.greenLine}></div>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  textAlignMobile="start"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="24px"
                  fontSizeMobile="18px"
                  s={{ lineHeight: "1.1", fontWeight: "500", color: "#2a4d69" }}
                >
                  Nos enfocamos en
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  textAlignMobile="start"
                  color="white-secondary"
                  bold="semi-bold"
                  fontSize="30px"
                  fontSizeMobile="22px"
                  s={{
                    lineHeight: "1.1",
                    fontWeight: "600",
                  }}
                >
                  Consultorios independientes en España
                </Text>
              </div>
              <div className={styles.whoAreWeText}>
                <Text
                  fontFamily="Lexend"
                  color="white-secondary"
                  fontSize="17px"
                  fontSizeMobile="16px"
                  bold="font-light"
                >
                  <span style={{ fontWeight: 500 }}>
                    Solo conocemos el mercado español...
                  </span>{" "}
                  pero lo conocemos mejor que nadie. Somos especialistas en
                  marketing para clínicas dentales en España
                </Text>
              </div>
              <div className={styles.methodButton}>
                <TextLink
                  variant="primary-green"
                  textProps={{ color: "#005fa3" }}
                  to={OUR_PROGRAM}
                >
                  Ver Método →
                </TextLink>
              </div>
            </div>

            <div className={styles.rightContent}>
              <div className={styles.imageWrapper}>
                <img
                  src={WhoWeAreImage}
                  alt="España"
                  className={styles.whoWeAreImage}
                />
              </div>
              <div className={styles.rgpdContainer}>
                <img
                  src={checkIconSpain}
                  alt="check"
                  className={styles.checkIcon}
                />
                <Text
                  fontFamily="Lexend"
                  color="white-secondary"
                  fontSize="15px"
                  fontSizeMobile="14px"
                  bold="font-light"
                  textAlign="start"
                  textAlignMobile="start"
                >
                  Marketing acorde con el RGPD.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.prefooter}>
        <Founder />
      </section>

      <section className={styles.spainLocation}>
        <div className={styles.darkLine}></div>
        <Text
          type="bigtitle"
          textAlign="center"
          color="black"
          fontFamily="lexend"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{ lineHeight: "1", fontWeight: "500", color: "#01443a" }}
        >
          Ofreces servicios de calidad,{" "}
        </Text>
        <Text
          type="bigtitle"
          fontFamily="lexend"
          textAlign="center"
          color="white-secondary"
          fontSize="30px"
          fontSizeMobile="22px"
          s={{ lineHeight: "1", fontWeight: "600" }}
        >
          ¿Pero no consigues nuevos pacientes?{" "}
        </Text>
        {/* <div className={styles.spainLocation__desc}>
          
        </div> */}
        <div className={styles.spanishLocation__card_container}>
          <div className={styles.spainLocation__card}>
            <div className={styles.spainLocation__card__elements}>
              <Text
                fontSize="20px"
                fontSizeMobile="16px"
                textAlignMobile="center"
                textAlign="center"
                s={{ lineHeight: 1.3, color: "#213343", fontWeight: "400" }}
              >
                Contáctanos si tu consultorio cumple con lo siguiente:{" "}
              </Text>
              <div className={styles.spainLocation__items}>
                <div className={styles.spainLocation__items__item}>
                  <Text
                    color="black"
                    s={{ color: "#213343" }}
                    bold="font-light"
                    fontSize="17px"
                    fontSizeMobile="16px"
                  >
                    Está ubicado en <strong>España.</strong>
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Text
                    color="black"
                    s={{ color: "#213343" }}
                    bold="font-light"
                    fontSize="17px"
                    fontSizeMobile="16px"
                  >
                    Factura <strong>10,000 euros o más</strong> al mes
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Text
                    color="black"
                    s={{ color: "#213343" }}
                    bold="font-light"
                    fontSize="17px"
                    fontSizeMobile="16px"
                  >
                    Quiere crecer rápidamente en el <strong>2025</strong>.
                  </Text>
                </div>
              </div>
              <div className={styles.spainLocation__btn}>
                <a href={CONTACT_FORM}>
                  <IconTextButton
                    colorVariant="white-green"
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
                    Solicita una reunión
                  </IconTextButton>
                </a>
              </div>
            </div>
            <div className={styles.spainLocation_footer__card}>
              <img src={Medicos} className={styles.spainLocation_footer__img} />
              <div className={styles.footer__desc}>
                <Text
                  textAlignMobile="center"
                  fontSizeMobile="12px"
                  fontSize="14px"
                  s={{ color: "#2f4f4f", lineHeight: "1.33" }}
                >
                  Únete a los dentistas
                </Text>
                <Text
                  textAlignMobile="center"
                  bold="font-light"
                  fontSize="14px"
                  fontSizeMobile="12px"
                  s={{ color: "black", lineHeight: "1.33" }}
                >
                  que usan nuestro método.{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderText}>
              <div className={styles.titles}>
                <div className={styles.darkLine}></div>

                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  fontSize="24px"
                  fontSizeMobile="18px"
                  s={{ fontWeight: "500", lineHeight: "1.1", color: "#01443a"  }}
                >
                  Dueño de Consultorio Dental
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="white-secondary"
                  fontSize="30px"
                  fontSizeMobile="22px"
                  s={{ lineHeight: "1.1", fontWeight: "600" }}
                >
                  ¿Te interesa una auditoría gratuita?
                </Text>
              </div>
              <Text
                fontFamily="Lexend"
                color="white-secondary"
                fontSize="18px"
                fontSizeMobile="16px"
                bold="font-light"
              >
                Averigua si tu consultorio califica para nuestros servicios
              </Text>

              <div className={styles.founderButton}>
                <a href={CONTACT_FORM}>
                  <IconTextButton
                    size="260px"
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
                    Pedir auditoría
                  </IconTextButton>{" "}
                </a>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>
            <div className={styles.founderButtonMobile}>
              <a href={CONTACT_FORM}>
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
                  Pedir auditoría
                </IconTextButton>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainContent}>
        <div className={styles.mainContent__desc}>
          <div className={styles.titlesContainerDesktop}>
            <div className={styles.greenLine}></div>
            <Text
              type="bigtitle"
              textAlign="start"
              textAlignMobile="center"
              color="black"
              fontFamily="lexend"
              bold="font-light"
              fontSize="24px"
              fontSizeMobile="18px"
              s={{ lineHeight: "1.1", fontWeight: "500", color: "#2a4d69" }}
            >
              Aprende sin costo
            </Text>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="start"
              textAlignMobile="center"
              color="white-secondary"
              bold="semi-bold"
              fontSize="30px"
              fontSizeMobile="22px"
              s={{ lineHeight: "1.1", fontWeight: "600" }}
            >
              Descargando nuestros ebooks
            </Text>
          </div>
          <div className={styles.titlesContainerMobile}>
            <div className={styles.greenLine}></div>
            <Text
              type="bigtitle"
              textAlign="start"
              textAlignMobile="center"
              color="black"
              fontFamily="lexend"
              bold="font-light"
              fontSize="24px"
              fontSizeMobile="21px"
              s={{ lineHeight: "1.1", fontWeight: "500", color: "#2a4d69" }}
            >
              Aprende sin costo
            </Text>
            <Text
              type="bigtitle"
              fontFamily="lexend"
              textAlign="start"
              textAlignMobile="center"
              color="white-secondary"
              bold="semi-bold"
              fontSize="30px"
              fontSizeMobile="24px"
              s={{ lineHeight: "1.1", fontWeight: "600" }}
            >
              Descargando nuestros ebooks
            </Text>
          </div>
          <div
            className={styles.ebooksContainer}
            style={{
              display: "flex",
              alignItems: "start", // Valor predeterminado
              justifyContent: "start",
              "@media (max-width: 768px)": {
                alignItems: "start", // Cambiar a "start" en dispositivos móviles
              },
            }}
          >
            <Text
              fontFamily="Lexend"
              color="black-lighter"
              fontSize="17px"
              fontSizeMobile="16px"
              textAlignMobile="center"
              bold="font-light"
            >
              Todos nuestros recursos de marketing son 100% gratuitos.
            </Text>
          </div>
          <div className={styles.founderButtonEbooks}>
            <TextLink
              variant="primary-green"
              textProps={{ color: "#005fa3", fontSize: "18px" }}
              to={LANDING_EBOOKS}
            >
              Ver todos los ebooks →
            </TextLink>{" "}
          </div>
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
                <EBookCard
                  slug={book.slug}
                  bookType={false}
                  key={i}
                  {...book}
                  subtitleColor="white-secondary"
                  textLinkColor="#213343"
                />
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
        <div className={styles.founderButtonMob}>
          <IconTextButton
            size="260px"
            colorVariant="primary-bordered"
            onClick={() => {
              if (window.fbq) {
                window.fbq("trackCustom", "GoToEbooksLanding", {
                  content_name: title,
                  content_category: "Button",
                });
              }
            }}
          >
            Ver todos los ebooks
          </IconTextButton>{" "}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
