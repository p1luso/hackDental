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
import imgEbookPrueba from "@assets/imgEbookPrueba.svg";
import imgEbook7 from "@assets/7SecretosEbook.svg";
import imgIAEbook from "@assets/IAEbook.svg";
import imgWppEbook from "@assets/WhatsappEbook.svg";

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
import { ES } from "country-flag-icons/react/3x2";
import { parseNumberToMonthName } from "../../../utils/parsing";
import { useConfigStore } from "../../../stores/useConfig";
import DaysCounter from "../DaysCounter/DaysCounter";

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

  // Funciones para manejar los menús móviles
  const handleMobileMenuClick = (menuType) => {
    // Cerrar el menú principal
    setShowMobileMenu(false);
    setNavMobileMenuIsShow(false);

    // Cerrar todas las modales
    setShowMobileContacMenu(false);
    setShowMobileEbooksMenu(false);
    setShowMobileAboutUsMenu(false);

    // Abrir la modal correspondiente
    switch (menuType) {
      case "contact":
        setShowMobileContacMenu(true);
        break;
      case "ebooks":
        setShowMobileEbooksMenu(true);
        break;
      case "about":
        setShowMobileAboutUsMenu(true);
        break;
      default:
        break;
    }
  };

  // Función para volver al menú principal
  const handleBackToMainMenu = () => {
    // Cerrar todas las modales
    setShowMobileContacMenu(false);
    setShowMobileEbooksMenu(false);
    setShowMobileAboutUsMenu(false);

    // Abrir el menú principal
    setShowMobileMenu(true);
    setNavMobileMenuIsShow(true);
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
                fontSize="21px"
                s={{ lineHeight: "1" }}
                fontFamily="Lexend"
                type="title"
                bold="regular"
              >
                Aprende ahora con nuestros
              </Text>
              <Text
                fontFamily="Lexend"
                fontSize="24px"
                color="black"
                type="title"
                bold="semi-bold"
                s={{ lineHeight: "1.5", bold: "semi-bold" }}
              >
                Ebooks 100% Gratuitos
              </Text>
            </div>
            <div className={styles.cards}>
              <Link
                to="/ebooks/7-secretos-marketing-dental"
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.cardImgContainer}>
                    <img src={imgEbook7} className={styles.cardImg} />
                  </div>
                  <Text
                    size="sm"
                    bold="semibold"
                    color="black-lighter"
                    s={{ lineHeight: "1.35" }}
                  >
                    7 secretos del marketing dental
                  </Text>
                </div>
              </Link>
              <div className={styles.separator}></div>
              <Link
                to="/ebooks/wpp-para-consultorios"
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.cardImgContainer}>
                    <img src={imgWppEbook} className={styles.cardImg} />
                  </div>

                  <Text
                    size="sm"
                    bold="semibold"
                    color="black-lighter"
                    s={{ lineHeight: "1.35" }}
                  >
                    Whatsapp para Consultorios
                  </Text>
                </div>
              </Link>
              <div className={styles.separator}></div>
              <Link
                to="/ebooks/ia-para-consultorios"
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.cardImgContainer}>
                    <img src={imgIAEbook} className={styles.cardImg} />
                  </div>

                  <Text
                    size="sm"
                    bold="semibold"
                    color="black-lighter"
                    s={{ lineHeight: "1.35" }}
                  >
                    IA para Consultorios Dentales
                  </Text>
                </div>
              </Link>
            </div>
            <div className={styles.developText}>
              <TextLink
                variant="primary-green"
                to={LANDING_EBOOKS}
                textProps={{ color: "#005fa3", fontSize: "18px" }}
              >
                Ir a biblioteca de ebooks
              </TextLink>
            </div>
          </div>
        </div>

        <div
          className={`${styles.contactBanner} ${showContact && styles.show}`}
        >
          <div className={styles.content}>
            <Text
              color="black"
              fontSize="21px"
              s={{ lineHeight: "1" }}
              fontFamily="Lexend"
              type="title"
              bold="regular"
            >
              Contáctanos hoy mismo,
            </Text>
            <Text
              fontFamily="Lexend"
              fontSize="24px"
              color="black"
              type="title"
              bold="semi-bold"
              s={{ lineHeight: "1", bold: "semi-bold" }}
            >
              Respondemos en {"<"} de 24 horas
            </Text>

            <div className={styles.links}>
              <div className={styles.contactBtn}>
                <a href="/contact">
                  <Icon size={"1rem"} type={"form"} />
                  <Text color="black-lighter" bold="regular" size="sm">
                    Forma de contacto
                  </Text>
                </a>
              </div>
              <div className={styles.contactBtn}>
                <a
                  href="mailto:whittemburydavid1@gmail.com"
                  className={styles.mailLink}
                >
                  <Icon size={"1rem"} type={"email"} />
                  <Text color="black-lighter" bold="regular" size="sm">
                    Email
                  </Text>
                </a>
              </div>
              <div className={styles.contactBtn}>
                <a
                  href="https://wa.me/51914727355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  <Icon size={"1rem"} type={"wp"} />
                  <Text color="black-lighter" bold="regular" size="sm">
                    {" "}
                    Whatsapp
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.aboutUs} ${showAboutUs && styles.show}`}>
          <div className={styles.content}>
            <Text
              color="black"
              fontSize="21px"
              s={{ lineHeight: "1" }}
              fontFamily="Lexend"
              type="title"
              bold="regular"
            >
              Informate sobre HackDental,
            </Text>
            <Text
              fontFamily="Lexend"
              fontSize="24px"
              color="black"
              type="title"
              bold="semi-bold"
              s={{ lineHeight: "1.5", bold: "semi-bold" }}
            >
              Sus Integrantes y sus Políticas
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
                <Link to={"/politicas"}>
                  <Text color="dark" bold="regular" size="sm">
                    Política de Privacidad
                  </Text>
                </Link>
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
            <div className={styles.onlyDesktop}>
              <div className={styles.daysCounterbox}>
              <DaysCounter targetDate="2025-06-01" />
              </div>
              <Text size="sm" color="light" bold="font-lighter">
                Estamos haciendo auditorías de marketing gratis hasta Julio →
              </Text>
            </div>
            <div className={styles.onlyMobile}>
              <Text fontSize="12px" color="light"  bold="font-lighter">
                Estamos haciendo auditorías de marketing gratis hasta Julio →
              </Text>
            </div>
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
                  variant="darkGreen"
                  textProps={{ bold: "font-light", fontSize: "14px" }}
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
                  variant="darkGreen"
                  to={OUR_PROGRAM}
                  textProps={{ bold: "font-light", fontSize: "14px" }}
                  extern
                >
                  Nuestro Método
                </TextLink>
              </div>

              <div
                className={styles.linkContainer}
                onMouseEnter={handleShowAboutUs}
                onClick={handleShowAboutUs}
              >
                <TextLink
                  variant="darkGreen"
                  marked={showAboutUs}
                  textProps={{ bold: "font-light", fontSize: "14px" }}
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
                  variant="darkGreen"
                  marked={showContact}
                  textProps={{ bold: "font-light", fontSize: "14px" }}
                >
                  Contacto
                </TextLink>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.formBtn}>
                <Link to={CONTACT_FORM} target="_blank">
                  <IconTextButton
                    colorVariant="white-green"
                    textProps={{ size: "ty" }}
                  >
                    Pedir Auditoría
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
        hideLogo={true}
        style={{
          width: "90%",
          maxWidth: "400px",
          right: 0,
          left: "auto",
          transform: "translateX(100%)",
          "&.show": {
            transform: "translateX(0)",
          },
        }}
        onClose={() => {
          setShowMobileMenu(false);
          setNavMobileMenuIsShow(false);
        }}
        renderCloBtn={
          <>
            <div className={styles.closeButton}>
              <Icon size={"4rem"} type={"close"} color="var(--white)" />
            </div>
            <div className={styles.drawerTitle}>
              <Text size="xlg" color="blue-lighter" bold="font-light">
                Menu
              </Text>
            </div>
          </>
        }
      >
        <div className={styles.mobileMenu}>
          <div className={styles.dropdownMenus}>
            <div className={styles.dropdownMenu}>
              <Link to={OUR_PROGRAM} target="_blank">
                <div className={styles.dropMenuBtn}>
                  <div className={styles.dropdownTitleDesc}>
                    <div className={styles.dropdownTitle}>
                      <Text bold="regular" fontSize="15px" color="black">
                        Nuestro Método
                      </Text>
                      <span
                        style={{
                          fontSize: "15px",
                          marginLeft: "10px",
                          marginBottom: "2px",
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                  <Text size="xty">
                    <Mark color="green-darker-bg">NUEVO</Mark>
                  </Text>
                </div>
              </Link>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.recursosGratis && styles.focus
                }`}
                onClick={() => handleMobileMenuClick("ebooks")}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" fontSize="15px" color="black">
                      Recursos Gratis
                    </Text>
                    <span
                      style={{
                        fontSize: "15px",
                        marginLeft: "10px",
                        marginBottom: "2px",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
                <Text size="xty">
                  <Mark color="green-darker-bg">NUEVO</Mark>
                </Text>
              </div>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.contacto && styles.focus
                }`}
                onClick={() => handleMobileMenuClick("contact")}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" fontSize="15px" color="black">
                      Contacto
                    </Text>
                    <span
                      style={{
                        fontSize: "15px",
                        marginLeft: "10px",
                        marginBottom: "2px",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
                <Text></Text>
              </div>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.contacto && styles.focus
                }`}
                onClick={() => handleMobileMenuClick("about")}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text bold="regular" fontSize="15px" color="black">
                      Sobre nosotros
                    </Text>
                    <span
                      style={{
                        fontSize: "15px",
                        marginLeft: "10px",
                        marginBottom: "2px",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btns}>
            <IconTextButton
              colorVariant="primary-darker"
              size="100%"
              onClick={() => navigate(CONTACT_FORM)}
            >
              Pedir Auditoría
            </IconTextButton>
            <IconTextButton
              colorVariant="primary-bordered2"
              size="100%"
              icon={"wp"}
            >
              Consultas al Whatsapp
            </IconTextButton>
          </div>
        </div>
      </Drawer>

      {/* Drawer para Recursos Gratuitos */}
      <Drawer
        show={showMobileEbooksMenu}
        onClose={() => setShowMobileEbooksMenu(false)}
        hideLogo
        renderCloBtn={
          <>
            <div className={styles.closeButton}>
              <Icon size={"4rem"} type={"close"} color="var(--white)" />
            </div>
            <div className={styles.drawerTitle}>
              <span
                className={styles.backButton}
                onClick={handleBackToMainMenu}
              >
                ←Atrás
              </span>
              <Text color="blue-lighter" bold="font-light" size="xlg">
                Recursos
              </Text>
            </div>
          </>
        }
      >
        <div
          className={`${styles.dropElements} ${styles.resources} ${styles.show}`}
        >
          <div className={styles.resourcesContainer}>
            <div className={styles.recursosDesc}>
              <Text
                color="black"
                fontSize="16px"
                s={{ lineHeight: "0.9" }}
                fontFamily="Lexend"
                type="title"
                bold="regular"
              >
                Aprende ahora con nuestros
              </Text>
              <Text
                fontFamily="Lexend"
                fontSize="19px"
                color="black"
                type="title"
                bold="semi-bold"
                s={{ lineHeight: "1.1", bold: "semi-bold" }}
              >
                Ebooks 100% Gratuitos
              </Text>
            </div>
            <div className={styles.cards}>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <img src={imgEbook7} className={styles.mobileImg} />
                  <div className={styles.mobileDesc}>
                    <Text
                      color="dark"
                      s={{ lineHeight: "1.25", fontSize: "14px" }}
                    >
                      7 secretos del marketing dental
                    </Text>
                  </div>
                </div>
              </Link>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <img src={imgWppEbook} className={styles.mobileImg} />
                  <div className={styles.mobileDesc}>
                    <Text
                      color="dark"
                      s={{ lineHeight: "1.25", fontSize: "14px" }}
                    >
                      Whatsapp para Consultorios
                    </Text>
                  </div>
                </div>
              </Link>
              <div className={styles.btns}>
                <TextLink
                  variant="primary-green"
                  to={LANDING_EBOOKS}
                  textProps={{ color: "#005fa3", fontSize: "18px" }}
                >
                  Ir a biblioteca de ebooks
                </TextLink>
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.btnsContact}>
              <IconTextButton
                colorVariant="primary-darker"
                size="100%"
                onClick={() => navigate(CONTACT_FORM)}
              >
                Pedir Auditoría
              </IconTextButton>
              <IconTextButton
                colorVariant="primary-bordered2"
                size="100%"
                icon={"wp"}
              >
                Consultas al Whatsapp
              </IconTextButton>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Drawer para Contacto */}
      <Drawer
        show={showMobileContacMenu}
        onClose={() => setShowMobileContacMenu(false)}
        hideLogo
        renderCloBtn={
          <>
            <div className={styles.closeButton}>
              <Icon size={"4rem"} type={"close"} color="var(--white)" />
            </div>
            <div className={styles.drawerTitle}>
              <span
                className={styles.backButton}
                onClick={handleBackToMainMenu}
              >
                ←Atrás
              </span>
              <Text bold="font-light" color="blue-lighter" size="xlg">
                Contacto
              </Text>
            </div>
          </>
        }
      >
        <div className={styles.mobileContact}>
          <Text
            color="black"
            fontSize="16px"
            bold="semi-bold"
            fontFamily="Lexend"
            s={{ lineHeight: "1" }}
          >
            Contáctanos hoy mismo,
          </Text>
          <Text
            fontSize="19px"
            color="black"
            s={{ lineHeight: "1" }}
            bold="semi-bold"
          >
            Respondemos en {"<"} de 24 horas
          </Text>
          <div className={styles.links}>
            <div className={styles.contactBtn}>
              <a href="/contact">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"1.52rem"} type={"form"} />
                  <Text
                    color="black-lighter"
                    s={{ fontSize: "15px" }}
                    bold="regular"
                  >
                    {" "}
                    Forma de contacto
                  </Text>
                </div>
              </a>
            </div>
            <div className={styles.contactBtn}>
              <a
                href="mailto:whittemburydavid1@gmail.com"
                className={styles.mailLink}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"1.52rem"} type={"email"} />
                  <Text
                    color="black-lighter"
                    s={{ fontSize: "15px" }}
                    bold="regular"
                  >
                    {" "}
                    Email
                  </Text>
                </div>
              </a>
            </div>
            <div className={styles.contactBtn}>
              <a
                href="https://wa.me/51914727355"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"1.52rem"} type={"wp"} />
                  <Text
                    color="black-lighter"
                    s={{ fontSize: "15px" }}
                    bold="regular"
                  >
                    {" "}
                    WhatsApp
                  </Text>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.btnsContact}>
            <IconTextButton
              colorVariant="primary-darker"
              size="100%"
              onClick={() => navigate(CONTACT_FORM)}
            >
              Pedir Auditoría
            </IconTextButton>
            <IconTextButton
              colorVariant="primary-bordered2"
              size="100%"
              icon={"wp"}
            >
              Consultas al Whatsapp
            </IconTextButton>
          </div>
        </div>
      </Drawer>

      {/* Drawer para Sobre Nosotros */}
      <Drawer
        show={showMobileAboutUsMenu}
        onClose={() => setShowMobileAboutUsMenu(false)}
        hideLogo
        renderCloBtn={
          <>
            <div className={styles.closeButton}>
              <Icon size={"4rem"} type={"close"} color="var(--white)" />
            </div>
            <div className={styles.drawerTitle}>
              <span
                className={styles.backButton}
                onClick={handleBackToMainMenu}
              >
                ←Atrás
              </span>
              <Text color="blue-lighter" bold="font-light" size="xlg">
                Nosotros
              </Text>
            </div>
          </>
        }
      >
        <div className={styles.mobileContact}>
          <Text
            color="black"
            fontSize="16px"
            bold="semi-bold"
            fontFamily="Lexend"
            s={{ lineHeight: "1" }}
          >
            Informate sobre HackDental,
          </Text>
          <Text
            fontSize="19px"
            color="black"
            s={{ lineHeight: "1" }}
            bold="semi-bold"
          >
            Y sus Políticas
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
                <Text
                  color="black-lighter"
                  s={{ fontSize: "15px" }}
                  bold="regular"
                >
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
                <Text
                  color="black-lighter"
                  s={{ fontSize: "15px" }}
                  bold="regular"
                >
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
                <Text
                  color="black-lighter"
                  s={{ fontSize: "15px" }}
                  bold="regular"
                >
                  {" "}
                  <Link to={"/politicas"}>Política de Privacidad</Link>
                </Text>
              </div>
            </div>
          </div>
          <div className={styles.btnsContact}>
            <IconTextButton
              colorVariant="primary-darker"
              size="100%"
              onClick={() => navigate(CONTACT_FORM)}
            >
              Pedir Auditoría
            </IconTextButton>
            <IconTextButton
              colorVariant="primary-bordered2"
              size="100%"
              icon={"wp"}
            >
              Consultas al Whatsapp
            </IconTextButton>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
