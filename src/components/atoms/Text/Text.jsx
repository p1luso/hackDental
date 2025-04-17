import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold = "normal",
  color = "standard",
  children,
  size = "md",
  textAlign = "start",
  fontFamily = "font-primary",
  fontSize = "",          // Desktop font size (inline style)
  fontSizeMobile = "",    // Mobile font size (via media query)
  s = {},
  ...otherProps
}) => {
  // Genera clase única para el fontSizeMobile (para evitar colisiones)
  const classNameMobile = fontSizeMobile
    ? `custom-font-size-${fontSizeMobile.replace(".", "-").replace("rem", "")}`
    : "";

  // Inyecta la media query para mobile si está definido fontSizeMobile
  const mobileFontStyle = fontSizeMobile ? (
    <style>
      {`
        @media screen and (max-width: 768px) {
          .${classNameMobile} {
            font-size: ${fontSizeMobile} !important;
          }
        }
      `}
    </style>
  ) : null;

  // Define las clases comunes
  const commonClasses = `${styles[color]} ${styles[bold]} ${styles[fontFamily]} ${
    fontSizeMobile ? classNameMobile : ""
  }`;

  // Renderiza según el tipo
  if (
    type === "title" ||
    type === "bigtitle" ||
    type === "smalltitle" ||
    type === "smallsubtitle" ||
    type === "ultrabigtitle"
  ) {
    return (
      <>
        {mobileFontStyle}
        <h1
          className={`${styles[type]} ${commonClasses}`}
          style={{ textAlign, fontSize, ...s }}
          {...otherProps}
        >
          {children}
        </h1>
      </>
    );
  } else if (type === "subtitle") {
    return (
      <>
        {mobileFontStyle}
        <h3
          className={`${styles.subtitle} ${commonClasses}`}
          style={{ textAlign, fontSize, ...s }}
          {...otherProps}
        >
          {children}
        </h3>
      </>
    );
  }

  return (
    <>
      {mobileFontStyle}
      <p
        className={`${styles.text} ${styles[size]} ${commonClasses}`}
        style={{ textAlign, fontSize, ...s }}
        {...otherProps}
      >
        {children}
      </p>
    </>
  );
};

export default Text;
