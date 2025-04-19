import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold = "normal",
  color = "standard",
  children,
  size = "md",
  textAlign = "start",
  textAlignMobile = "",   // New prop for mobile text alignment
  fontFamily = "font-primary",
  fontSize = "",          // Desktop font size (inline style)
  fontSizeMobile = "",    // Mobile font size (via media query)
  s = {},
  ...otherProps
}) => {
  // Genera clase única para el fontSizeMobile y textAlignMobile (para evitar colisiones)
  const classNameMobile = `custom-style-${fontSizeMobile?.replace(".", "-").replace("rem", "")}-${textAlignMobile}`;

  // Inyecta la media query para mobile si está definido fontSizeMobile o textAlignMobile
  const mobileStyle = (fontSizeMobile || textAlignMobile) ? (
    <style>
      {`
        @media screen and (max-width: 768px) {
          .${classNameMobile} {
            ${fontSizeMobile ? `font-size: ${fontSizeMobile} !important;` : ''}
            ${textAlignMobile ? `text-align: ${textAlignMobile} !important;` : ''}
          }
        }
      `}
    </style>
  ) : null;

  // Define las clases comunes
  const commonClasses = `${styles[color]} ${styles[bold]} ${styles[fontFamily]} ${classNameMobile}`;

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
        {mobileStyle}
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
        {mobileStyle}
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
      {mobileStyle}
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
