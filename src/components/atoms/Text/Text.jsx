import styles from "./text.module.css";

/* const getSize = (size) => {
  switch (size) {
    case "ultrabig":
      return "3.33334rem";
    case "big":
      return "2.334rem";
    case "xxxlg":
      return "1.77778rem";
    case "xxlg":
      return "1.5rem";
    case "xlg":
      return "1.3334rem";
    case "lg":
      return "1.16667rem";
    case "md":
      return "1rem";
    case "sm":
      return "0.88888889rem";
    case "ty":
      return "0.7778rem";
    case "xty":
      return "0.666667rem";
    case "xxty":
      return "0.566667rem";
    default:
      return "1rem";
  }
}; */

const Text = ({
  type = "text",
  bold = "normal",
  color = "standard",
  children,
  size = "md",
  textAlign = "start",
  fontFamily = "font-primary",
  fontSize = "",
  s = {},
  ...otherProps
}) => {
  if (
    type === "title" ||
    type == "bigtitle" ||
    type == "smalltitle" ||
    type == "smallsubtitle" ||
    type == "ultrabigtitle"
  ) {
    return (
      <h1
        className={`${styles[type]} ${styles[color]} ${styles[bold]} ${styles[fontFamily]}`}
        style={{ textAlign, fontSize, ...s }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <h3
        className={`${styles.subtitle} ${styles[color]} ${styles[bold]} ${styles[fontFamily]}`}
        style={{ textAlign, fontSize, ...s }}
        {...otherProps}
      >
        {children}
      </h3>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${styles[bold]} ${styles[fontFamily]} ${styles[size]}`}
      style={{ textAlign, fontSize: fontSize ?? "", ...s }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
