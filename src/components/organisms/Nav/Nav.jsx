import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";
import TextLink from "../../molecules/TextLink/TextLink";
import Mark from "../../atoms/Mark/Mark";
import {
  DOWNLOAD_EBOOK,
  LANDING_EBOOKS,
  LANDING_PAGE,
  CONTACT_FORM,
  OUR_PROGRAM,
  ACERCA_DE,
  CUMPLIMIENTO,
} from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import imgEbookPrueba from "@assets/ImgCardsNav.svg";
import { ES } from "country-flag-icons/react/3x2";
import { parseNumberToMonthName } from "../../../utils/parsing";
import { useConfigStore } from "../../../stores/useConfig";

const Nav = ({ hideTopMenu = false, hideBottomMenu = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileContacMenu, setShowMobileContacMenu] = useState(false);
  const [showMobileEbooksMenu, setShowMobileEbooksMenu] = useState(false);
  const [showMobileAboutUsMenu, setShowMobileAboutUsMenu] = useState(false);
  const [isTopMenuHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileMenu(false);
    });
    return () => window.removeEventListener("resize", window);
  }, []);

  const [showResources, setShowResources] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [dropElements, setDropElements] = useState({
    recursosGratis: false,
    contacto: false,
    sobreNosotros: false,
  });

  const setNavMobileMenuIsShow = useConfigStore(
    (state) => state.setNavMobileMenuIsShow
  );

  const handleShowResources = (e) => {
    if (e.type != "mouseenter" || (e.type === "mouseenter" && !showResources)) {
      setShowResources((prev) => !prev);
      setShowAboutUs(false);
      setShowContact(false);
    }
  };

  const handleShowContact = (e) => {
    if (e.type != "mouseenter" || (e.type === "mouseenter" && !showContact)) {
      setShowResources(false);
      setShowAboutUs(false);
      setShowContact((prev) => !prev);
    }
  };

  const handleShowAboutUs = (e) => {
    if (e.type != "mouseenter" || (e.type === "mouseenter" && !showAboutUs)) {
      setShowResources(false);
      setShowContact(false);
      setShowAboutUs((prev) => !prev);
    }
  };
  const handleHideDropElements = (e) => {
    if (e.target.id == "shadow-zone") {
      setShowResources(false);
      setShowContact(false);
      setShowAboutUs(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${hideTopMenu && styles.ajust}`}>
      <div
        id="shadow-zone"
        className={`${styles.resoursesDropDown} ${
          (showResources || showContact || showAboutUs) && styles.show
        }`}
        onClick={handleHideDropElements}
      >
        <div
          className={`${styles.cardsBanner} ${showResources && styles.show}`}
        >
          <div className={styles.content}>
            <div className={styles.header}>
              <Text
                color="black"
                fontFamily="font-terciary"
                s={{ fontSize: "30px" }}
              >
                Ebooks Gratuitos 📚
              </Text>

              <Text bold="font-light" size="sm">
                Aprende sobre Marketing dental con nuestros recursos 100%
                Gratuitos
              </Text>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text
                  size="ty"
                  bold="font-light"
                  s={{ padding: "12px 0 4px 0" }}
                >
                  2024
                </Text>
                <Text
                  size="sm"
                  bold="semibold"
                  color="black"
                  s={{ lineHeight: "1.35" }}
                >
                  Marketing Dental:
                  <br /> La Guia Definitiva
                </Text>
                <div className={styles.descargarGratis}>
                  <Text size="ty" bold="font-light" s={{ paddingTop: "8px" }}>
                    Descargar Gratis
                  </Text>
                  <Icon
                    type={"arrowSquare"}
                    size={"0.8rem"}
                    color="var(--text)"
                  />
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text
                  size="ty"
                  bold="font-light"
                  s={{ padding: "12px 0 4px 0" }}
                >
                  2024
                </Text>
                <Text
                  size="sm"
                  bold="semibold"
                  color="black"
                  s={{ lineHeight: "1.35" }}
                >
                  Marketing Dental: <br /> La Guia Definitiva
                </Text>
                <div className={styles.descargarGratis}>
                  <Text size="ty" bold="font-light" s={{ paddingTop: "8px" }}>
                    Descargar Gratis
                  </Text>
                  <Icon
                    type={"arrowSquare"}
                    size={"0.8rem"}
                    color="var(--text)"
                  />
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text
                  size="ty"
                  bold="font-light"
                  s={{ padding: "12px 0 4px 0" }}
                >
                  2024
                </Text>
                <Text
                  size="sm"
                  bold="semibold"
                  color="black"
                  s={{ lineHeight: "1.35" }}
                >
                  Marketing Dental: <br /> La Guia Definitiva
                </Text>
                <div className={styles.descargarGratis}>
                  <Text size="ty" bold="font-light" s={{ paddingTop: "8px" }}>
                    Descargar Gratis
                  </Text>
                  <Icon
                    type={"arrowSquare"}
                    size={"0.8rem"}
                    color="var(--text)"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.developText}
              onClick={() => navigate(LANDING_EBOOKS)}
            >
              <Text bold="font-light" size="ty" textAlign="center">
                Ir a la bilbioteca de ebooks
              </Text>
            </div>
          </div>
        </div>

        <div
          className={`${styles.contactBanner} ${showContact && styles.show}`}
        >
          <div className={styles.content}>
            <Text
              color="black"
              fontFamily="font-terciary"
              s={{ fontSize: "30px" }}
            >
              Contacta a un Representante 📲
            </Text>
            <Text size="sm" bold="font-light" s={{ paddingBottom: "28px" }}>
              Haznos cualquier consulta, te responderemos en menos de 24 horas.
            </Text>
            <div className={styles.links}>
              <div className={styles.contactBtn}>
                <Icon size={"1rem"} type={"form"} />
                <Text color="dark" bold="regular" size="sm">
                  Forma de contacto
                </Text>
              </div>
              <div className={styles.contactBtn}>
                <Icon size={"1rem"} type={"email"} />
                <Text color="dark" bold="regular" size="sm">
                  Email
                </Text>
              </div>
              <div className={styles.contactBtn}>
                <Icon size={"1rem"} type={"wp"} />
                <Text color="dark" bold="regular" size="sm">
                  {" "}
                  Whatsapp
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.aboutUs} ${showAboutUs && styles.show}`}>
          <div className={styles.content}>
            <Text
              color="black"
              s={{ fontSize: "30px" }}
              fontFamily="font-terciary"
            >
              ¿Quienes somos? 🙋
            </Text>
            <Text size="sm" bold="font-light" s={{ paddingBottom: "28px" }}>
              Informate sobre HackDental y sus áreas de expertise.
            </Text>
            <div className={styles.links}>
              <div
                className={styles.contactBtn}
                onClick={() => navigate(ACERCA_DE)}
              >
                <Icon size={"1rem"} type={"team"} />
                <Text color="dark" bold="regular" size="sm">
                  Nuestro Equipo
                </Text>
              </div>
              <div
                className={styles.contactBtn}
                onClick={() => navigate(CUMPLIMIENTO)}
              >
                <Icon size={"1rem"} type={"commitment"} />
                <Text color="dark" bold="regular" size="sm">
                  Cumplimiento del RGPD
                </Text>
              </div>
              <div className={styles.contactBtn}>
                <Icon size={"1rem"} type={"privacy"} />
                <Text color="dark" bold="regular" size="sm">
                  Política de Privacidad
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.elements}>
        {hideTopMenu || isTopMenuHidden || (
          <div
            className={styles.topMenu}
            onClick={() => {
              if (location.pathname === "/program")
                return document.getElementById("contact").scrollIntoView();
              navigate(OUR_PROGRAM);
            }}
          >
            <span className={styles.whiteMark}>
              <Text s={{ fontSize: "11px" }} bold="semibold" color="black">
                {location.pathname === "/program" ? "APLICA AHORA" : "NUEVO"}
              </Text>
            </span>
            {location.pathname === "/program" ? (
              <Text size="sm" color="light">
                Aceptamos 10 nuevas clínicas en España
              </Text>
            ) : (
              <Text size="sm" color="light">
                Aceptamos 10 nuevas clínicas en España:{" "}
                {screen.availWidth < 1024 && <br />}
                <span style={{ fontWeight: "lighter" }}>
                  Descubre si calificas
                </span>
                &nbsp;→
                {/* <span className={styles.country}>
                <Icon color="white" size={"1rem"} type={"arrowFoward"} />
              </span> */}
              </Text>
            )}
          </div>
        )}
        {hideBottomMenu || (
          <div
            className={`${styles.bottomMenu} ${
              (showContact || showResources || showAboutUs) &&
              styles.changeColor
            }`}
          >
            <div className={styles.left}>
              <div
                className={styles.logo}
                onClick={() => navigate(LANDING_PAGE)}
              >
                <Logo />
              </div>
            </div>
            <div className={styles.right}>
              <div
                onMouseEnter={handleShowResources}
                onClick={() => navigate(LANDING_EBOOKS)}
                className={styles.linkContainer}
              >
                <div className={styles.newTag}>
                  <Text size="xxty" color="light">
                    NUEVO
                  </Text>
                </div>
                <TextLink
                  marked={showResources}
                  variant="primary"
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Recursos gratis
                </TextLink>
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.newTag}>
                  <Text size="xxty" color="light">
                    NUEVO
                  </Text>
                </div>
                <TextLink
                  variant="primary"
                  to={OUR_PROGRAM}
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Nuestro Programa
                </TextLink>
              </div>

              <div
                className={styles.linkContainer}
                onMouseEnter={handleShowAboutUs}
                onClick={handleShowAboutUs}
              >
                <TextLink
                  variant="primary"
                  marked={showAboutUs}
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Sobre Nosotros
                </TextLink>
              </div>
              <div
                className={styles.linkContainer}
                onMouseEnter={handleShowContact}
                onClick={handleShowContact}
              >
                <TextLink
                  variant="primary"
                  marked={showContact}
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Contacto
                </TextLink>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.formBtn}>
                <Link to={CONTACT_FORM} target="_blank">
                  <IconTextButton
                    colorVariant="primary"
                    textProps={{ size: "ty" }}
                  >
                    Solicita una reunión
                  </IconTextButton>
                </Link>
              </div>

              <div className={styles.btnDropdown}>
                <IconButton
                  icon="bars"
                  size="2rem"
                  variant="secondary"
                  onClick={() => {
                    setShowMobileMenu(true);
                    setNavMobileMenuIsShow(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Drawer
        show={showMobileMenu}
        onClose={() => {
          setShowMobileMenu(false);
          setNavMobileMenuIsShow(false);
        }}
        renderCloBtn={
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <Text size="xlg" color="light">
              Menu
            </Text>
            <span style={{ position: "relative", top: "2px" }}>
              <Icon size={"1.7rem"} type={"close"} color="var(--white)" />
            </span>
          </div>
        }
      >
        <div className={styles.mobileMenu}>
          <div className={styles.dropdownMenus}>
            <div className={styles.dropdownMenu}>
              <Link to={OUR_PROGRAM} target="_blank">
                <div className={styles.dropMenuBtn}>
                  <div className={styles.dropdownTitleDesc}>
                    <div className={styles.dropdownTitle}>
                      <Text bold="regular" size="xxlg" color="black">
                        Nuestro Programa
                      </Text>
                      <Icon color="black" type={"arrow"} size={"1.088rem"} />
                    </div>
                    <Text size="lg" bold="font-light">
                      Transforma tu Consultorio en 6 meses.
                    </Text>
                  </div>
                  <Text size="xty">
                    <Mark color="primary-bg">NUEVO</Mark>
                  </Text>
                </div>
              </Link>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.recursosGratis && styles.focus
                }`}
                onClick={() => setShowMobileEbooksMenu(true)}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" size="xxlg" color="black">
                      Recursos Gratis
                    </Text>
                    <Icon color="black" type={"arrow"} size={"1.088rem"} />
                  </div>
                  <Text size="lg" bold="font-light">
                    Aprende sobre Marketing dental.
                  </Text>
                </div>
                <Text size="xty">
                  <Mark color="primary-bg">NUEVO</Mark>
                </Text>
              </div>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.contacto && styles.focus
                }`}
                onClick={() => setShowMobileContacMenu(true)}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" size="xxlg" color="black">
                      Contacto
                    </Text>
                    <Icon color="black" type={"arrow"} size={"1.088rem"} />
                  </div>
                  <Text size="lg" bold="font-light">
                    Haznos cualquier consulta.
                  </Text>
                </div>
                <Text></Text>
              </div>
              <div
                className={`${styles.dropElements} ${
                  dropElements.contacto && styles.show
                }`}
              ></div>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.contacto && styles.focus
                }`}
                onClick={() => setShowMobileAboutUsMenu(true)}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" size="xxlg" color="black">
                      Sobre nosotros
                    </Text>
                    <Icon color="black" type={"arrow"} size={"1.088rem"} />
                  </div>
                  <Text size="lg" bold="font-light">
                    Informate sobre HackDental
                  </Text>
                </div>
              </div>
              <div
                className={`${styles.dropElements} ${
                  dropElements.contacto && styles.show
                }`}
              ></div>
            </div>
          </div>

          <div className={styles.btns}>
            <IconTextButton size="100%" onClick={() => navigate(CONTACT_FORM)}>
              Solicita una reunion
            </IconTextButton>
            <IconTextButton
              colorVariant="primary-bordered"
              size="100%"
              icon={"wp"}
            >
              Consultas al Whatsapp
            </IconTextButton>
          </div>
          <Drawer
            show={showMobileEbooksMenu}
            onClose={() => setShowMobileEbooksMenu(false)}
            hideLogo
            renderCloBtn={
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "relative", top: "2px" }}>
                  <Icon size={"2rem"} type={"arrowLeft"} color="var(--white)" />
                </span>

                <Text color="light" size="xlg">
                  Recursos Gratuitos
                </Text>
              </div>
            }
          >
            <div
              className={`${styles.dropElements} ${styles.resources} ${styles.show}`}
            >
              <div className={styles.resourcesContainer}>
                <div className={styles.recursosDesc}>
                  <Text
                    s={{ fontSize: "21px" }}
                    color="black"
                    fontFamily="font-terciary"
                  >
                    Ebooks Gratuitos 📚
                  </Text>
                  <Text size="lg" bold="font-light">
                    Aprende sobre Marketing dental con nuestros recursos 100%
                    Gratuitos
                  </Text>
                </div>
                <div className={styles.cards}>
                  <Link to={DOWNLOAD_EBOOK} target="_blank">
                    <div className={styles.mobileCard}>
                      <div className={styles.mobileCardContainer}>
                        <img
                          src={imgEbookPrueba}
                          className={styles.mobileImg}
                        />
                      </div>
                      <div className={styles.mobileDesc}>
                        <Text bold="font-light" size="ty">
                          {new Date().getFullYear()}
                        </Text>
                        <Text
                          color="dark"
                          s={{ lineHeight: "1.25", fontSize: "14px" }}
                        >
                          Marketing Dental: La Guia Definitiva
                        </Text>
                        <Text s={{ fontSize: "12px" }} bold="regular">
                          Descarga Gratis
                        </Text>
                      </div>
                    </div>
                  </Link>
                  <Link to={DOWNLOAD_EBOOK} target="_blank">
                    <div className={styles.mobileCard}>
                      <div className={styles.mobileCardContainer}>
                        <img
                          src={imgEbookPrueba}
                          className={styles.mobileImg}
                        />
                      </div>

                      <div className={styles.mobileDesc}>
                        <Text bold="font-light" size="ty">
                          {new Date().getFullYear()}
                        </Text>
                        <Text
                          color="dark"
                          s={{ lineHeight: "1.25", fontSize: "14px" }}
                        >
                          Marketing Dental: La Guia Definitiva
                        </Text>
                        <Text s={{ fontSize: "12px" }} bold="regular">
                          Descarga Gratis
                        </Text>
                      </div>
                    </div>
                  </Link>

                  {/*  <Link to={DOWNLOAD_EBOOK} target="_blank">
                    <div className={styles.mobileCard}>
                      <div className={styles.mobileCardContainer}>
                        <img
                          src={imgEbookPrueba}
                          className={styles.mobileImg}
                        />
                      </div>
                      <div className={styles.mobileDesc}>
                        <Text bold="font-light" size="ty">
                          {new Date().getFullYear()}
                        </Text>
                        <Text
                          color="dark"
                          s={{ lineHeight: "1.25", fontSize: "14px" }}
                        >
                          Marketing Dental: La Guia Definitiva
                        </Text>
                        <Text s={{ fontSize: "13px" }} bold="regular">
                          Descarga Gratis
                        </Text>
                      </div>
                    </div>
                  </Link> */}
                </div>
              </div>
              <div className={styles.btns}>
                <IconTextButton
                  colorVariant="primary-bordered"
                  size="100%"
                  onClick={() => navigate(LANDING_EBOOKS)}
                >
                  Ir a biblioteca de ebooks
                </IconTextButton>
              </div>
            </div>
          </Drawer>
          <Drawer
            show={showMobileContacMenu}
            onClose={() => setShowMobileContacMenu(false)}
            hideLogo
            renderCloBtn={
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "relative", top: "2px" }}>
                  <Icon size={"2rem"} type={"arrowLeft"} color="var(--white)" />
                </span>

                <Text color="light" size="xlg">
                  Contacto
                </Text>
              </div>
            }
          >
            <div className={styles.mobileContact}>
              <Text
                color="black"
                s={{ fontSize: "21px" }}
                fontFamily="font-terciary"
              >
                Contacta a un representante
              </Text>
              <Text size="lg" bold="font-light">
                Haznos cualquier consulta, te responderemos en menos de 24
                horas.
              </Text>

              <div className={styles.links}>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon color="black" size={"1.52rem"} type={"form"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      Forma de contacto
                    </Text>
                  </div>
                </div>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon color="black" size={"1.52rem"} type={"email"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      Email
                    </Text>
                  </div>
                </div>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon color="black" size={"1.52rem"} type={"wp"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      WhatsApp
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
          <Drawer
            show={showMobileAboutUsMenu}
            onClose={() => setShowMobileAboutUsMenu(false)}
            hideLogo
            renderCloBtn={
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "relative", top: "2px" }}>
                  <Icon size={"2rem"} type={"arrowLeft"} color="var(--white)" />
                </span>

                <Text color="light" size="xlg">
                  Sobre nosotros
                </Text>
              </div>
            }
          >
            <div className={styles.mobileContact}>
              <Text
                color="black"
                s={{ fontSize: "21px" }}
                fontFamily="font-terciary"
              >
                ¿Quienes somos? 🙋
              </Text>
              <Text size="lg" bold="font-light">
                Informate sobre HackDental y sus áreas de expertise.
              </Text>
              <div className={styles.links}>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onClick={() => navigate(ACERCA_DE)}
                  >
                    <Icon color="black" size={"1.52rem"} type={"team"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      Nuestro Equipo
                    </Text>
                  </div>
                </div>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onClick={() => navigate(CUMPLIMIENTO)}
                  >
                    <Icon color="black" size={"1.52rem"} type={"commitment"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      Cumplimiento del RGPD
                    </Text>
                  </div>
                </div>
                <div className={styles.contactBtn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon color="black" size={"1.52rem"} type={"privacy"} />
                    <Text color="black" s={{ fontSize: "15px" }} bold="regular">
                      {" "}
                      Política de privacidad
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
