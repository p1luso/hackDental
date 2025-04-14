import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";
import Select from "../../../../components/atoms/Select/Select";
import { isEmail, isEmpty } from "../../../../utils/inputValidators";
import { sendContactFormDownloadEbook } from "../../../../services/api/sendContactForm";
import LoadingScreen from "../../../../components/molecules/LoadingScreen/LoadingScreen";

const MAX_FORMS = 2;
const DownloadForm = ({ modalOpened }) => {
  const [form, setForm] = useState({
    email: localStorage.getItem("email") ?? "",
    firstName: localStorage.getItem("firstName") ?? "",
    lastName: localStorage.getItem("lastName") ?? "",
    howKnowAbout: "",
    phone: localStorage.getItem("phone") ?? "",
  });

  const [formErrors, setFormErros] = useState({
    email: localStorage.getItem("email") ? "" : "empty",
    firstName: localStorage.getItem("firstName") ? "" : "empty",
    lastName: localStorage.getItem("lastName") ? "" : "empty",
    howKnowAbout: localStorage.getItem("howKnowAbout") ? "" : "empty",
    phone: localStorage.getItem("phone") ? "" : "empty",
  });

  const [loading, setLoading] = useState(false);
  const [cambioSeccion, setCambioSecction] = useState(false);
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCambioSecction(true);
    setCurrentForm((prev) => prev + 1);
  };

  const handleChange = (id, value) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleErrorsChange = (id, value) => {
    setFormErros((prev) => ({ ...prev, [id]: value }));
  };

  const handleAntForm = () => {
    setCurrentForm((prev) => prev - 1);
  };

  const resetData = () => {
    setCurrentForm(1);
  };

  useEffect(() => {
    if (!modalOpened) {
      resetData();
    }
  }, [modalOpened]);

  const isAnFormError = () => {
    for (let e in formErrors) {
      if (!!formErrors[e]) {
        return true;
      }
    }
    return false;
  };

  const handleDownloadEbook = async () => {
    try {
      setLoading(true);
      await sendContactFormDownloadEbook(form);
      alert("ebook descargado!");
    } catch (error) {
      alert("hubo un error, intente nuevamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${styles.downloadForm} ${currentForm == 1 && styles.first}  ${
        currentForm == 2 && styles.second
      }`}
    >
      {loading && <LoadingScreen />}
      <header className={styles.header}>
        <div
          className={`${styles.progress} ${currentForm == 1 && styles.none}`}
        >
          <div className={styles.progressLine}></div>
          <ul className={styles.indicators}>
            <li
              className={`${styles.indicator} ${
                currentForm > 1 && styles.success
              }`}
            >
              {currentForm > 1 ? (
                <Icon type={"check"} color="var(--primary)" size={"1.5rem"} />
              ) : (
                <Text color="light">1</Text>
              )}
            </li>
            <li
              className={`${styles.indicator} ${
                currentForm > 2 && styles.success
              }`}
            >
              {currentForm > 2 ? (
                <Icon type={"check"} color="var(--white)" size={"1rem"} />
              ) : (
                <Text color="light">2</Text>
              )}
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        {currentForm == 1 && (
          <div className={`${styles.content} ${styles.first}`}>
            <div className={styles.desc}>
              <Text bold type="title" color="black" textAlign="center">
                Descarga el Ebook Gratuito
              </Text>
              <Text
                size="ty"
                color="black"
                bold="font-light"
                textAlign="center"
              >
                Todos los campos son obligatorios
              </Text>
            </div>

            <Input
              variant="white"
              id={"email"}
              value={form.email}
              onChange={handleChange}
              onError={handleErrorsChange}
              errorMsg={cambioSeccion === false ? "" : formErrors.email}
              labelColor="black"
              label="Correo electronico de trabajo*"
              validators={[isEmail, isEmail]}
            />
          </div>
        )}
        {currentForm == 2 && (
          <div className={`${styles.content} ${styles.second}`}>
            <div className={styles.desc}>
              <Text bold type="title" color="black" textAlign="center">
                Descarga el Ebook Gratuito
              </Text>
              <Text
                size="ty"
                color="black"
                bold="font-light"
                textAlign="center"
              >
                Todos los campos son obligatorios
              </Text>
            </div>
            <div className={styles.inputChecks}>
              <Input
                variant="white"
                id={"firstName"}
                value={form.firstName}
                onChange={handleChange}
                onError={handleErrorsChange}
                labelColor="black"
                errorMsg={formErrors.email}
                label="Nombre*"
                validators={[isEmpty]}
              />
              <Input
                variant="white"
                id={"lastName"}
                labelColor="black"
                value={form.lastName}
                onChange={handleChange}
                onError={handleErrorsChange}
                label="Apellidos*"
                validators={[isEmpty]}
              />
              <Input
                variant="white"
                id={"phone"}
                labelColor="black"
                value={form.phone}
                onChange={handleChange}
                onError={handleErrorsChange}
                label="Numero de Telefono*"
                validators={[isEmpty]}
              />
              <Select
                icon={"arrowDown"}
                variant="white"
                labelColor="black"
                id={"howKnowAbout"}
                onChange={handleChange}
                label={"¿Como escuchaste de este ebook?*"}
                onError={handleErrorsChange}
                placeholder={"Porfavor Seleccione*"}
                elements={["Redes sociales", "Google"]}
                value={form.howKnowAbout}
                validators={[isEmpty]}
                style={{ height: "48px" }}
              />
            </div>
            <div className={styles.privacy}>
              <Text bold="font-light">
                Tu privacidad es importante para nosotros. HackDental utiliza la
                información que proporcionas para ponerse en contacto contigo en
                relación con contenido, productos y servicios relevantes para
                ti. Puedes darte de baja para dejar de recibir este tipo de
                comunicaciones en cualquier momento. Si deseas obtener más
                información sobre la protección de tus datos en HackDental,
                consulta nuestra Política de Privacidad.
              </Text>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={currentForm === 1 && styles.hide}>
          <IconTextButton
            onClick={handleAntForm}
            variant="bordered"
            colorVariant="secondary-dark"
          >
            Anterior
          </IconTextButton>
        </div>
        <div className={currentForm === MAX_FORMS && styles.none}>
          <IconTextButton
            onClick={handleNextForm}
            disabled={currentForm == 1 && formErrors.email !== ""}
          >
            Siguiente
          </IconTextButton>
        </div>
        <div
          className={`${styles.downloadBtn} ${
            currentForm == MAX_FORMS && styles.show
          }`}
        >
          <IconTextButton
            disabled={isAnFormError()}
            onClick={handleDownloadEbook}
          >
            Descargar pdf
          </IconTextButton>
        </div>
      </footer>
    </div>
  );
};

export default DownloadForm;
