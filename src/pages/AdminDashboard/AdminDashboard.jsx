import React, { useState } from "react";
import styles from "./styles.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { createEBook } from "../../services/firebase/db";
import { uploadFile } from "../../services/firebase/fileUpload";

const AdminDashboard = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    detailTitle: "",
    detailDescription: "",
    cardTitle: "",
    cardDetail: "",
    img: null,
    pdf: null,
  });

  const handleChange = (id, value) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const onNext = () => {
    if (currentForm == 1) return;
    setCurrentForm((prev) => prev + 1);
  };

  const onAnt = () => {
    if (currentForm == 0) return;
    setCurrentForm((prev) => prev - 1);
  };

  const allFieldsCompleted = () => {
    for (let e in form) {
      if (form[e] === "") return false;
    }
    return true;
  };

  const handleCreateEBook = async () => {
    try {
      setLoading(true);
      const fileImgUrlPromise = uploadFile(form.img, "imgs");
      const filePdfUrlPromise = uploadFile(form.pdf, "pdfs");
      const [imgUrl, pdfUrl] = await Promise.all([
        fileImgUrlPromise,
        filePdfUrlPromise,
      ]);
      await createEBook({ ...form, img: imgUrl, pdf: pdfUrl });
      alert("ebook creado!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {loading && <LoadingScreen />}
      <header className={styles.header}>
        <IconTextButton onClick={onAnt}>Atrás</IconTextButton>
        <IconTextButton onClick={onNext}>Siguiente</IconTextButton>
      </header>
      <main className={styles.main}>
        <div className={`${styles.form} ${currentForm == 0 && styles.show}`}>
          <Input
            variant="secondary"
            id={"detailTitle"}
            label="Titulo Biblioteca"
            placeholder="Eg: Como Mejorar la Aceptación de Casos de tu Clinica"
            onChange={handleChange}
            onError={(id, value) => {}}
          />
          <TextArea
            id={"detailDescription"}
            placeholder="Eg: Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            label="Micro-Descripcion del ebook"
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.form} ${currentForm == 1 && styles.show}`}>
          <Input
            variant="secondary"
            id={"cardTitle"}
            label="Titulo Landing Page"
            placeholder="Eg: Como Mejorar la Aceptación de Casos de tu Clinica"
            onChange={handleChange}
            onError={(id, value) => {}}
          />
          <TextArea
            id={"cardDetail"}
            placeholder="Eg: Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            label="Descripcion Landing Page"
            onChange={handleChange}
          />
          <div className={styles.upload}>
            <label>
              <div className={styles.uploadBtn}>
                <Text>Subir Imagen</Text>
              </div>
              <input
                accept="image/*"
                id="img"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleChange("img", e.target.files[0])}
              />
            </label>
            <div>
              <Text>{form.img?.name}</Text>
            </div>
          </div>
          <div className={styles.upload}>
            <label>
              <div className={styles.uploadBtn}>
                <Text>Subir Pdf</Text>
              </div>
              <input
                id="pdf"
                accept="application/pdf"
                type="file"
                onChange={(e) => handleChange("pdf", e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div>
              <Text>{form.pdf?.name}</Text>
            </div>
          </div>

          <div className={styles.createBook}>
            <IconTextButton
              onClick={handleCreateEBook}
              disabled={!allFieldsCompleted()}
            >
              Crear EBook
            </IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
