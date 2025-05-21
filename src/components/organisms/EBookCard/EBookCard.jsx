import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import { DOWNLOAD_EBOOK } from "../../../constants/routes";
import Link from "../../atoms/Link/Link";
import TextLink from "../../molecules/TextLink/TextLink";
import Icon from "../../atoms/Icon/Icon";

const EBookCard = ({
  img,
  title,
  desc,
  bookType = true,
  slug,
  subtitleColor = "black",
  textColor = "black",
  textLinkColor = "blackSecondary",
  border = false,
  isLink = true,      // Nueva prop
  hasHover = true,    // Nueva prop
}) => {
  const cardContent = (
    <div
      className={`${styles.ebook} ${!hasHover ? styles.noHover : ""}`}
      style={{ border: border ? border : "none" }}
    >
      <img className={styles.img} src={img} alt={title} />

      <div className={styles.descBook}>
        {bookType && (
          <Text size="ty" s={{ color: "#006a43" }}>
            EBOOK
          </Text>
        )}
        <Text
          bold
          type="smallsubtitle"
          color={subtitleColor}
          fontSizeMobile="19px"
          s={{ lineHeight: "1.15" }}
        >
          {title}
        </Text>
        <Text size={"ty"} color={textColor} bold="font-light">
          {desc}
        </Text>

        <TextLink
          marked
          textProps={{ size: "ty", color: "#005fa3" }}
          variant="blue-secondary"
          to={`/ebooks/${slug}`}
        >
          Descargar la Guia{" "}
          <Icon type={"arrowSquare"} color="#005fa3" size={"1rem"} />
        </TextLink>
      </div>
    </div>
  );

  return isLink ? (
    <Link to={`/ebooks/${slug}`} target="_blank">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default EBookCard;