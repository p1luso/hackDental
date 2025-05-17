import imgEbook7 from "@assets/7SecretosEbook.svg";
import imgIAEbook from "@assets/IAEbook.svg";
import imgWppEbook from "@assets/WhatsappEbook.svg";
import imgEbookProximamente from "@assets/ImagenProximamente.svg";

import SecressEbook from "@assets/ebooks/7secretsEbook.pdf";
import IaEbook from "@assets/ebooks/iaEbook.pdf";
import WppEbook from "@assets/ebooks/wppEbook.pdf";

const ebookData = {
  "7-secretos-marketing-dental": {
    title: "7 secretos del marketing dental",
    desc: "Transforma tu clínica dental con nuestros ebooks...",
    img: imgEbook7,
    pdfPath: SecressEbook,
  },
  "ia-para-consultorios": {
    title: "IA para Consultorios Dentales",
    desc: "Transforma tu clínica dental con nuestros ebooks.",
    img: imgIAEbook,
    pdfPath: IaEbook,
  },
  // ...existing code...
"wpp-para-consultorios": {
  title:    "WhatsApp para Consultorios en 5 minutos",
  desc: "Aprende a configurar el WhatsApp de tu consultorio de forma efectiva.",
  img: imgWppEbook,
  pdfPath: WppEbook,
},
// ...existing code...
  proximamente: {
    title: "Próximamente",
    desc: "Próximamente...",
    img: imgEbookProximamente,
  },
  // etc
};

export default ebookData;
