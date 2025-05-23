import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import TextLink from "../../components/molecules/TextLink/TextLink";
import Icon from "../../components/atoms/Icon/Icon";
import imgEbook7 from "@assets/ebook7secrets.svg";
import imgIAEbook from "@assets/IAEbook.svg";
import imgWppEbook from "@assets/WhatsappEbook.svg";
import imgEbookProximamente from "@assets/ImagenProximamente.svg";
import { useNavigate } from "react-router-dom";
import CoberturaDental from "@assets/coberturaDental.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Footer from "../../components/organisms/Footer/Footer";
import { CONTACT_FORM } from "../../constants/routes";

const LandingEBooks = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <div className={styles.educationText}>
            <div className={styles.line}></div>

            <Text
              type="bigtitle"
              textAlign="center"
              color="white"
              textAlignMobile="center"
              fontFamily="lexend"
              bold="font-light"
              fontSize="24px"
              fontSizeMobile="18px"
              s={{ fontWeight: "400", lineHeight: 1, color: "#cfe1df" }}
            >
              Educación para dueños de consultorios
            </Text>
          </div>
          <div className={styles.educationTextMob}>
            <Text
              type="bigtitle"
              textAlign="center"
              color="white"
              textAlignMobile="center"
              fontFamily="lexend"
              fontSize="24px"
              fontSizeMobile="18px"
              s={{ fontWeight: "400", lineHeight: 1 }}
            >
              Educación para dentistas
            </Text>
          </div>
          <Text
            type="bigtitle"
            fontFamily="lexend"
            textAlign="center"
            textAlignMobile="center"
            color="white"
            bold="bold"
            fontSize="40px"
            fontSizeMobile="24px"
            s={{ fontWeight: "700", lineHeight: 1 }}
          >
            Aprende de Marketing Dental
          </Text>
          <Text
            bold="font-light"
            textAlign="center"
            color="white-lighter"
            fontSize="18px"
            fontSizeMobile="14px"
            s={{ fontWeight: "300", lineHeight: 1.3 }}
          >
            Todos los ebooks de HackDental 100% gratuitos
          </Text>
        </section>
      </header>
      <div className={styles.bgMain}>
        <main className={styles.main}>
          <div className={styles.mainEBook}>
            <div
              className={styles.mainEbookCard}
              onClick={() => navigate("/ebooks/7-secretos-marketing-dental")}
            >
              <div className={styles.tag}>
                <Text size="ty" color="light">
                  Empieza Aqui
                </Text>
              </div>
              <img className={styles.ebookImg} src={imgEbook7} />
              <div className={styles.desc}>
                <Text type="smallsubtitle" color="black">
                  7 secretos del marketing dental
                </Text>
                <Text bold="font-light" size="ty">
                  Transforma tu clínica dental con nuestros ebooks, redactados
                  por líderes en marketing digital.
                </Text>
                <TextLink
                  marked
                  variant="blue-secondary"
                  to={`/ebooks/7-secretos-marketing-dental`}
                  textProps={{
                    size: "sm",
                    color: "#005fa3",
                  }}
                >
                  Descargar la Guia{" "}
                  <span style={{ position: "relative", top: "2px" }}>
                    <Icon type={"arrowSquare"} size={"1rem"} />
                  </span>
                </TextLink>
              </div>
            </div>
            <div className={styles.books}>
              <EBookCard
                bookType={false}
                border="1px solid #7691ad"
                slug="ia-para-consultorios"
                img={imgIAEbook}
                textLinkColor="green-black"
                textColor="green-black"
                title={"IA para Consultorios Dentales"}
                desc={"Transforma tu clínica dental con nuestros ebooks."}
              />
              <EBookCard
                bookType={false}
                textLinkColor="green-black"
                border="1px solid #7691ad"
                slug="wpp-para-consultorios"
                textColor="green-black"
                img={imgWppEbook}
                title={"Whatsapp para Consultorios"}
                desc={
                  "Aprende a configurar el WhatsApp de tu consultorio de forma efectiva"
                }
              />
              <div className={styles.nextEbook}>
                <div className={styles.tag}>
                  <Text size="ty" color="light">
                    Próximamente
                  </Text>
                </div>
                <EBookCard
                  bookType={false}
                  hasHover={false}
                  isLink={false}
                  img={imgEbookProximamente}
                  border="1px solid #7691ad"
                  textLinkColor="green-black"
                  textColor="green-black"
                  title={"Próximamente"}
                  desc={
                    "Transforma tu clínica dental con nuestros ebooks, redactados."
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className={styles.dentalCover}>
        <div className={styles.dentalContainer}>
          <div className={styles.contentContainer_dental}>
            <div className={styles.founderButtonMobile}>
              <a href={CONTACT_FORM}>
                <IconTextButton
                  size="100%"
                  colorVariant="primary-darker"
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
            <div className={styles.imageWrapper}>
              <img src={CoberturaDental} alt="" />
            </div>

            <div className={styles.founderText}>
              <div className={styles.titles}>
                <div className={styles.darkLine}></div>
                <Text
                  type="bigtitle"
                  textAlign="start"
                  color="black"
                  fontFamily="lexend"
                  bold="font-light"
                  fontSize="24px"
                  fontSizeMobile="21px"
                  s={{ fontWeight: "500", color: "#01443a"   }}
                >
                  Dueño de Consultorio Dental
                </Text>
                <Text
                  type="bigtitle"
                  fontFamily="lexend"
                  textAlign="start"
                  color="white-secondary"
                  bold="semi-bold"
                  fontSize="30px"
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
                <a href={CONTACT_FORM}>
                  <IconTextButton
                    size="260px"
                    colorVariant="primary-darker"
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingEBooks;
