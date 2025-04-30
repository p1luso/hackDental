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
}) => {
  return (
    <Link to={`/ebooks/${slug}`} target="_blank">
      {" "}
      <div className={styles.ebook}>
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
            textProps={{ size: "ty" }}
            variant={textLinkColor}
            to={`/ebooks/${slug}`}
          >
            Descargar la Guia{" "}
            <Icon type={"arrowSquare"} color="#33475b" size={"1rem"} />
          </TextLink>
        </div>
      </div>
    </Link>
  );
};

export default EBookCard;
