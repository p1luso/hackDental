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
  const activeInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Añadir listener para detectar clics fuera del modal
    const handleClickOutside = (e) => {
      // Verifica si el clic fue fuera de los elementos del formulario o modal
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !activeInputRef.current?.contains(e.target)
      ) {
        setActiveField(null); // Cierra el modal si es clic fuera
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanValue =
      name === "servicePrice" || name === "monthlyIncome"
        ? value.replace(/[^0-9]/g, "")
        : value;

    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
  };

  const handleFocus = (fieldName, inputRef) => {
    setActiveField(fieldName);
    activeInputRef.current = inputRef;
  };

  const handleExampleClick = (example) => {
    const value = example.split(" - ")[0].replace("$", "");
    setFormData((prev) => ({ ...prev, [activeField]: value }));
    setActiveField(null); // Cerrar el modal después de seleccionar una opción
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
      className={`${styles.card} ${isAnyFieldActive ? styles.serviceInfoActive : ""}`}
    >
      <div
        className={`${styles.serviceInfo} ${
          isAnyFieldActive ? styles.serviceInfoActive : ""
        }`}
      >
        {" "}
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
              className={field !== "serviceName" ? styles.priceInput : undefined}
            >
              {field !== "serviceName" && (
                <span className={styles.currencySymbol}>$</span>
              )}
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                onFocus={(e) => handleFocus(field, e.target)}
                className={styles.input}
                placeholder={field === "serviceName" ? "Nombre del servicio" : "0"}
                required
              />
            </div>

            {activeField === field && (
              <div ref={modalRef} className={styles.modal}>
                {InputExamples[field].examples.map((example, index) => (
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
                ))}
              </div>
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
