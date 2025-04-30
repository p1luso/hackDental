
import imgEbookPrueba from "@assets/imgEbookPrueba.svg";
import SecressEbook from "@assets/ebooks/7secretsEbook.pdf"
import IaEbook from "@assets/ebooks/iaEbook.pdf"
import WppEbook from "@assets/ebooks/wppEbook.pdf"


const ebookData = {
  "7-secretos-marketing-dental": {
    title: "7 secretos del marketing dental",
    desc: "Transforma tu clínica dental con nuestros ebooks...",
    img: imgEbookPrueba,
    pdfPath:SecressEbook,

  },
  "ia-para-consultorios": {
    title: "IA para Consultorios Dentales",
    desc: "Transforma tu clínica dental con nuestros ebooks.",
    img: imgEbookPrueba,
    pdfPath: IaEbook,
  },
  "wpp-para-consultorios": {
    title: "Whatsapp para Consultorios",
    desc: "Transforma tu clínica dental con nuestros ebooks, redactados.",
    img: imgEbookPrueba,
    pdfPath: WppEbook,

  },
  "proximamente": {
    title: "Próximamente",
    desc: "Próximamente...",
    img: imgEbookPrueba,
  },
  // etc
};

export default ebookData;
