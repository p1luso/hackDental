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
import MedicsCard from "../../components/organisms/MedicsCard/MedicsCard";
import { useNavigate } from "react-router-dom";
import {
  DOWNLOAD_EBOOK,
  CONTACT_FORM,
  OUR_PROGRAM,
} from "../../constants/routes";

import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import Mark from "../../components/atoms/Mark/Mark";
import ImgBanner from "@assets/ImgBanner.svg";
import imgPublicidadCard from "@assets/La publicidad de tu consultorio es genérica.svg";
import imgDiseñoCard from "@assets/El diseño de tu Sitio Web Dental es ineficiente.svg";
import imgEstrategiaCard from "@assets/Tu estrategia de redes sociales es pobre.svg";
import imgReseñasCard from "@assets/Te faltan reseñas positivas online.svg";
import imgRecordatorioCard from "@assets/Tienes un mal sistema de recordatorio de citas.svg";
import ImagenEbook1 from "@assets/Imagen ebook 1.svg";
import ImagenEbookWp from "@assets/imagen ebook de whatsapp.svg";
import ImgBtnWS from "@assets/imgBtnWS.svg";
import PartnersCarousel from "../../components/organisms/PartnersCarousel/PartnersCarousel";
import Medicos from "@assets/Medicos.svg";
import { useConfigStore } from "../../stores/useConfig";
import Founder from "../../components/organisms/Founder/Founder";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showWSMsg, setShowWSMsg] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navMobileMenuIsShow = useConfigStore(
    (state) => state.navMobileMenuIsShow
  );

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 13 * 1000);
  }, []);

  return (
    <div className={styles.page}>
      <div
        className={`${styles.popupContainer} ${
          showPopup && !navMobileMenuIsShow && styles.show
        }`}
      >
        <div className={`${styles.popupcard}`}>
          <div className={`${styles.tagSupIzq}`}></div>
          <div className={`${styles.tagSupDer}`}></div>
          <div className={`${styles.tagInfIzq}`}></div>
          <div className={`${styles.tagInfDer}`}></div>
          <span
            className={styles.popupMobileCloseBtn}
            onClick={() => setShowPopup(false)}
          >
            <Icon size={"2rem"} type={"close"} color="var(--black)" />
          </span>
          {/*  <div className={styles.popImg}>
              <Text color="light" type="title" textAlign="center">
                1O CUPOS
              </Text>
              <img src={imagenDentista} />
            </div> */}
          <div className={styles.popupDesc}>
            <span
              className={styles.popupCloseBtn}
              onClick={() => setShowPopup(false)}
            >
              <Icon size={"2rem"} type={"close"} color="var(--gray)" />
            </span>

            {/* <div className={styles.popTextOffer}>
                <Text color="black" bold="semibold">
                  ¡SOLO POR ENERO!
                </Text>
                <hr className={styles.underline} />
              </div> */}
            <div className={styles.title}>
              <Text
                color="black"
                type="title"
                bold="semibold"
                textAlign="center"
              >
                Aplica al programa “Consultorio Exitoso”.
              </Text>
            </div>
            <div className={styles.desc}>
              <Text textAlign="center" color="black" bold="font-light">
                Transformamos tu consultorio en tan solo 6 meses con nuestro
                método de “Ventas Convenientes”.
              </Text>
            </div>
            <div className={styles.beneficios}>
              <div className={styles.beneficio}>
                <Icon size={"1.16rem"} color="var(--primary)" type={"check"} />
                <Text color="black" bold="font-light">
                  Trabajamos con pocos consultorios.
                </Text>
              </div>
              <div className={styles.beneficio}>
                <Icon size={"1.16rem"} color="var(--primary)" type={"check"} />
                <Text color="black" bold="font-light">
                  Nos enfocamos en tus tratamientos más rentables.
                </Text>
              </div>
              <div className={styles.beneficio}>
                <Icon size={"1.16rem"} color="var(--primary)" type={"check"} />
                <Text color="black" bold="font-light">
                  Nos enfocamos en el mercado español.
                </Text>
              </div>
            </div>
            <div className={styles.popupBtns}>
              <IconTextButton size="100%" onClick={() => navigate(OUR_PROGRAM)}>
                Ver programa
              </IconTextButton>
              {/* <IconTextButton
                  size="100%"
                  colorVariant="dark-green"
                  textProps={{ size: "ty" }}
                  onClick={() => setShowPopup(false)}
                >
                  No gracias
                </IconTextButton> */}
            </div>
            <div className={styles.medicosCard}>
              <MedicsCard
                bgColor={"#8fc29f33"}
                title="Únete a los dentistas"
                textDesc="
que quieren llevar su consultorio al siguiente nivel."
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.help}>
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
      </div>
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
        <div className={styles.whoAreWe__contents}>
          <Text color="black" fontSize="32px" s={{fontSize:"28px"}}>¿Quienes Somos?🧐</Text>
          <Text color="white-secondary" bold="font-light">
            Somos una <strong>agencia de marketing dental</strong> que se dedica a ayudar a <strong>
            clínicas dentales en España</strong> a conseguir <strong>más pacientes</strong> de manera
            efectiva y confiable a largo plazo.
          </Text>
          
          <hr className={styles.separator} />
          <Text
            color="black"
            textAlign="center"
            s={{ lineHeight: "1.3", fontSize: "32px" }}
          >
            ¿Qué nos diferencia de otras agencias? 🧐
          </Text>
          <img className={styles.neneArio} src={wwaDifferencesMobile} alt="Differences" />
          <img
            className={`${styles.neneArio} ${styles.mobile}`}
            src={wwaDifferences}
            alt="Differences"
          />
          {/*  <Text color="black">
            Puedes ponerte en contacto con nosotros por correo electrónico a
            <br />
            jaka@ .design y te responderemos en un plazo de 24 horas.
          </Text> */}
          {/* <div className={styles.cardMetodo}>
            <Text color="black" s={{ lineHeight: "1.5" }}>
              ¿Eres un excelente dentista, pero atraer nuevos pacientes sigue
              siendo un desafío? 🦷
            </Text>
            <IconTextButton textProps={{ textAlign: "center" }}>
              Ver el Método HackDental
            </IconTextButton>
          </div> */}
        </div>
      </section>
      <section className={styles.contactBannerSection}>
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
      </section>
      <section className={styles.spainLocation}>
        <Text
          type="bigtitle"
          textAlign="center"
          color="black"
          s={{ lineHeight: "1.3" }}
        >
          ¿Necesitas una Agencia especializada <br />
          en Marketing{" "}
          <Mark color="primary-bg-triangular" bold="medium">
            Dental?
          </Mark>
        </Text>
        <div className={styles.spainLocation__desc}>
          <Text color="black" bold="font-light">
            Puedes ponerte en contacto con nosotros por correo electrónico a
            jaka@ .design y te responderemos en un plazo de 24 horas.
          </Text>
          <Text color="black" bold="font-light">
            No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
            ponerte en contacto con nosotros por correo electrónico a jaka@
            .design.
          </Text>
        </div>
        <div className={styles.spanishLocation__card_container}>
          <div className={styles.spainLocation__card}>
            <div className={styles.spainLocation__card__elements}>
              <Text size="xxxlg" color="dark">
                Si tu consultorio dental:
              </Text>
              <hr className={styles.spainLocation__card__separator} />
              <div className={styles.spainLocation__items}>
                <div className={styles.spainLocation__items__item}>
                  <Icon
                    type={"rightArrow"}
                    size={"1.4rem"}
                    color="var(--primary)"
                  />
                  <Text color="dark" bold="regular">
                    Está ubicado en España.
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Icon
                    type={"rightArrow"}
                    size={"1.4rem"}
                    color="var(--primary)"
                  />
                  <Text color="dark" bold="regular">
                    Factura 10,000 euros o más al mes
                  </Text>
                </div>
                <div className={styles.spainLocation__items__item}>
                  <Icon
                    type={"rightArrow"}
                    size={"1.4rem"}
                    color="var(--primary)"
                  />
                  <Text color="dark" bold="regular">
                    Quiere crecer rápidamente en el 2025.
                  </Text>
                </div>
              </div>
              <div className={styles.spainLocation__btn}>
                <IconTextButton colorVariant="primary" size="100%">
                  Solicita una reunión
                </IconTextButton>
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
            s={{ lineHeight: "1.3" }}
          >
            Te enseñamos cómo crecer tu consultorio.
            <br /> Revisa nuestros ebooks
            <Mark color="primary-bg-triangular" bold="medium">
              gratuitos
            </Mark>
          </Text>
          <Text color="black" bold="font-light" textAlign="center">
            Si tienes una práctica dental que factura más de $10,000 euros al
            mes y quieres llevarla al siguiente nivel, no dudes en contactarnos.
            Somos expertos en Marketing Dental.
          </Text>
        </div>

        <div className={styles.mainContent__cards}>
          <div className={styles.mainContent__card}>
            <div className={styles.mainContent__card__desc}>
              <Text bold="semibold">2024</Text>
              <Text type="title" bold="semibold" color="black">
                7 Secretos del Marketing Dental
              </Text>
              <Text size="sm" bold="font-light">
                Save thousands of engineering hours by using the NexHealth
                Synchronizer API.
              </Text>
              <div className={styles.mainContent__card__btn}>
                <IconTextButton colorVariant="blue" size="100%">
                  Descargar Ahora
                </IconTextButton>
              </div>
            </div>
            <img src={ImagenEbook1} />
          </div>
          <div className={styles.mainContent__card}>
            <div className={styles.mainContent__card__desc}>
              <Text bold="semibold" color="primary">
                2024
              </Text>
              <Text type="title" bold="semibold" color="black">
                WhatsApp para Clinicas Dentales
              </Text>
              <Text size="sm" bold="font-light">
                Save thousands of engineering hours by using the NexHealth
                Synchronizer API.
              </Text>
              <div className={styles.mainContent__card__btn}>
                <IconTextButton colorVariant="primary-rounded" size="100%">
                  Descargar Ahora
                </IconTextButton>
              </div>
            </div>
            <img src={ImagenEbookWp} />
          </div>
        </div>
      </section>
      <section className={styles.prefooter}>
        <Founder />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
