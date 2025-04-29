import React, { useState, useRef, useEffect } from "react";
import styles from "./ServiceCard.module.css";
import Text from "../Text/Text";

const InputExamples = {
  serviceName: {
    title: "Ejemplos de Servicios Dentales",
    examples: [
      "Implantes Dentales",
      "Blanqueamiento Dental",
      "Ortodoncia Invisible",
      "Carillas Dentales",
      "Endodoncia",
    ],
  },
  servicePrice: {
    title: "Ejemplos de Precios",
    examples: [
      "$800 - Limpieza Dental",
      "$2,000 - Implantes Dentales",
      "$1,500 - Carillas",
      "$3,000 - Ortodoncia",
    ],
  },
  monthlyIncome: {
    title: "Ejemplos de Ingresos",
    examples: [
      "$15,000 mensuales - Implantes",
      "$150,000 anuales - Ortodoncia",
      "$10,000 mensuales - Blanqueamiento",
      "$20,000 mensuales - Carillas",
    ],
  },
};

const ServiceCard = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    serviceName: initialData?.serviceName || "",
    servicePrice: initialData?.servicePrice || "",
    monthlyIncome: initialData?.monthlyIncome || "",
  });

  const [activeField, setActiveField] = useState(null);
  const modalRef = useRef(null);

  const handleFocus = (fieldName) => {
    setActiveField((prev) => (prev === fieldName ? null : fieldName));
  };

  const handleClickOutside = (e) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      !e.target.closest(`.${styles.inputGroup}`)
    ) {
      setActiveField(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleExampleClick = (example) => {
    setFormData((prev) => ({ ...prev, [activeField]: example }));
    setActiveField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFieldActive = (fieldName) => activeField === fieldName;
  const isAnyFieldActive = Boolean(activeField);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.card} ${
        isAnyFieldActive ? styles.serviceInfoActive : ""
      }`}
    >
      <div
        className={`${styles.serviceInfo} ${
          isAnyFieldActive ? styles.serviceInfoActive : ""
        }`}
      >
        {["serviceName", "servicePrice", "monthlyIncome"].map((field) => (
          <div
            key={field}
            className={`${styles.inputGroup} ${
              isFieldActive(field) ? styles.activeInputGroup : ""
            }`}
          >
            <label htmlFor={field} className={styles.label}>
              {field === "serviceName"
                ? "Servicio Dental"
                : field === "servicePrice"
                ? "Precio del Servicio"
                : "Ingresos Mensuales"}
            </label>

            <div
              onClick={() => handleFocus(field)}
              className={`${styles.input} ${
                field !== "serviceName" ? styles.priceInput : ""
              }`}
              style={{
                color: isFieldActive(field) ? "#000000" : "#8A8A8A",
              }}
            >
              {formData[field] || "Selecciona una opción"}
            </div>

            {isFieldActive(field) && (
              <>
                <div className={styles.modalOverlay} />
                <div ref={modalRef} className={styles.modal}>
                  {field === "servicePrice" ? (
                    <input
                      type="text"
                      className={styles.modalInput}
                      placeholder="Ingresa el precio del servicio"
                      autoFocus
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field]: e.target.value,
                        }))
                      }
                      onBlur={() => setActiveField(null)}
                      value={formData[field]}
                    />
                  ) : (
                    InputExamples[field].examples.map((example, index) => (
                      <Text
                        key={index}
                        fontFamily="lexend"
                        color="gray"
                        fontSize="16px"
                        onClick={() => handleExampleClick(example)}
                        className={styles.exampleItem}
                      >
                        {example}
                      </Text>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button type="submit" className={styles.arrowButton} aria-label="Enviar">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default ServiceCard;
