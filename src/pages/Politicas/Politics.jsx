import styles from "./politics.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Footer from "../../components/organisms/Footer/Footer";
import Text from "../../components/atoms/Text/Text";
import { color } from "framer-motion";

const Politics = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="32px"
          fontSizeMobile="28px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          Aviso Legal y Política de Privacidad de HackDental
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          {" "}
          HackDental.com es un sitio web propiedad de HackDental LLC. Al acceder
          y usar este sitio web (en adelante, el “Sitio Web”), usted adquiere la
          condición de Usuario, lo cual implica la aceptación plena de este
          Aviso Legal y Política de Privacidad. Si no está de acuerdo con alguna
          de las siguientes condiciones, le rogamos que se abstenga de utilizar
          el Sitio Web.
        </Text>
        <Text
          color="black"
          bold="bold"
          textAlign="center"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "500",
          }}
        >
          Fecha de última actualización: 09 de mayo de 2025.
        </Text>
      </main>
      <section className={styles.responsable}>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          1. Identificación del Responsable
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          Responsable (Titular del Sitio Web): HackDental LLC, sociedad de
          responsabilidad limitada registrada en el estado de Delaware, Estados
          Unidos. Domicilio Registrado: Delaware, USA (EE.UU.). Contacto: Para
          cualquier consulta o ejercicio de derechos relacionados con protección
          de datos, puede contactar a HackDental a través del correo electrónico
          privacy@hackdental.com (o info@hackdental.com). HackDental LLC es la
          entidad responsable de la gestión del Sitio Web y del tratamiento de
          los datos personales de los usuarios que se recaben a través del mismo
          (en lo sucesivo, el Responsable). HackDental cumple con la normativa
          internacional y española de protección de datos y comercio
          electrónico, incluyendo: Reglamento (UE) 2016/679 de Protección de
          Datos (RGPD). Ley Orgánica 3/2018 de Protección de Datos Personales y
          Garantía de Derechos Digitales (LOPD-GDD). Ley 34/2002 de Servicios de
          la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          2. Servicios Ofrecidos por HackDental
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "300",
          }}
        >
          HackDental es un servicio de marketing digital especializado para
          clínicas dentales en España. Entre los servicios ofrecidos, HackDental
          dispone de un método especializado de marketing dental, cuya
          explicación y demostración se presenta a los usuarios mediante un
          vídeo informativo alojado en una página de aterrizaje (landing page)
          del Sitio Web. Este método y su presentación en video constituyen
          contenido propio de HackDental, orientado a mostrar a los potenciales
          clientes la estrategia que se propone para mejorar la captación y
          fidelización de pacientes en sus clínicas. Además del servicio
          principal, en el Sitio Web se promocionan recursos educativos
          gratuitos para los usuarios, tales como eBooks descargables y guías en
          PDF sobre temas de interés para el marketing dental (por ejemplo, uso
          de WhatsApp para comunicación con pacientes, aplicación de la
          inteligencia artificial en clínicas dentales, secretos de marketing
          dental, etc.). Para obtener estos eBooks gratuitos, al Usuario se le
          puede solicitar que complete un formulario proporcionando ciertos
          datos personales (típicamente, nombre, dirección de correo electrónico
          y número de teléfono). Tras el registro, HackDental envía el eBook
          solicitado al Usuario (por correo electrónico u otro medio indicado) y
          puede ofrecerle información adicional relacionada con sus servicios de
          marketing dental. Nota: Los eBooks y demás contenidos gratuitos
          ofrecidos tienen fines informativos y formativos. Su obtención es
          completamente voluntaria y condicionada al suministro de datos de
          contacto del Usuario. En todo caso, dichos contenidos no sustituyen
          una asesoría profesional personalizada, según se detalla más adelante
          en este documento.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",

          }}
        >
          3. Condiciones de Uso del Sitio Web
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          El Usuario se compromete a utilizar el Sitio Web y sus contenidos de
          forma lícita, adecuada y respetuosa. En particular, el Usuario debe
          abstenerse de: (a) emplear los contenidos con fines o efectos
          ilícitos, fraudulentos o lesivos de los derechos e intereses de
          HackDental o de terceros; (b) provocar daños en los sistemas físicos o
          lógicos de HackDental, de sus proveedores o de terceros, ni introducir
          o difundir en la red virus informáticos u otros sistemas que sean
          susceptibles de provocar daños. HackDental se reserva el derecho de
          suspender temporal o definitivamente, y sin previo aviso, el acceso al
          Sitio Web por razones técnicas, de seguridad o de mantenimiento.
          Asimismo, HackDental podrá retirar o suspender cualquier contenido
          alojado en el Sitio Web que pueda considerarse contrario a la ley o a
          las presentes condiciones.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",
          }}
        >
          4. Propiedad Intelectual e Industrial
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          Todos los contenidos presentes en el Sitio Web (incluyendo, a título
          enunciativo, el diseño del sitio, textos, imágenes, logotipos,
          gráficos, videos, materiales descargables y cualquier otro contenido)
          están sujetos a derechos de propiedad intelectual e industrial
          titularidad de HackDental LLC o de terceros que han licenciado su uso
          a HackDental. En particular, el método de marketing especializado
          presentado en video, así como los eBooks y materiales gratuitos
          ofrecidos, son propiedad intelectual de HackDental. Queda prohibida la
          reproducción, distribución, comunicación pública, transformación o
          cualquier otro uso no autorizado de los contenidos del Sitio Web,
          salvo consentimiento previo y expreso de HackDental. El Usuario podrá
          visualizar, descargar y almacenar los contenidos exclusivamente para
          su uso personal y no comercial, respetando siempre la integridad de
          los mismos y la autoría. Cualquier uso no permitido de los contenidos
          constituirá una violación de los derechos de propiedad intelectual o
          industrial y podrá dar lugar a las responsabilidades legalmente
          establecidas.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",

          }}
        >
          5. Limitación de Responsabilidad y Disclaimer
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          Información General (No Asesoramiento Profesional): Los materiales,
          recursos y contenidos ofrecidos por HackDental en el Sitio Web
          (incluyendo el video explicativo del método especializado, los eBooks
          gratuitos, artículos del blog, publicaciones en redes sociales, etc.)
          tienen un carácter general e informativo. Estos contenidos no
          constituyen asesoramiento profesional específico en materia de
          marketing, gestión empresarial ni en ningún otro ámbito. Cada clínica
          dental tiene circunstancias particulares; por lo tanto, la información
          proporcionada por HackDental no sustituye la necesidad de una asesoría
          profesional personalizada. HackDental recomienda a los Usuarios que,
          antes de implementar cualquier estrategia o tomar decisiones
          importantes basadas en la información obtenida en el Sitio Web,
          consideren consultar con profesionales cualificados o con la propia
          HackDental para recibir un análisis adaptado a su situación
          específica. Resultados de Marketing y Testimonios: HackDental se
          esfuerza por proporcionar estrategias y técnicas de marketing que han
          demostrado ser eficaces en muchos casos. No obstante, no se garantizan
          resultados específicos. Los resultados de las estrategias de marketing
          dental pueden variar significativamente de un consultorio a otro,
          dependiendo de numerosos factores propios de cada clínica (ubicación,
          competencia local, inversión, situación de partida, implementación de
          las recomendaciones, etc.). Cualquier ejemplo de éxito, caso práctico
          o testimonio presentado en el Sitio Web debe entenderse como
          ilustrativo y no como una promesa de resultados. HackDental no será
          responsable si los resultados obtenidos por el Usuario difieren de las
          expectativas; el éxito de las acciones de marketing depende en gran
          medida del esfuerzo y circunstancias de cada clínica dental. En
          resumen, HackDental no garantiza ni promete un resultado determinado
          mediante el uso de sus servicios o la aplicación de los métodos
          descritos en el Sitio Web. Uso de los Contenidos: HackDental no asume
          responsabilidad por el uso que el Usuario haga de la información y
          servicios disponibles en el Sitio Web. El Usuario es el único
          responsable de valorar y aplicar la información proporcionada.
          HackDental tampoco se hace responsable de los perjuicios, daños o
          pérdidas directas o indirectas que puedan derivarse del uso de los
          contenidos del Sitio Web o de la confianza depositada en la veracidad
          o utilidad de los mismos, salvo aquellas actuaciones que resulten
          expresamente impuestas por la ley. Enlaces a Terceros: En caso de que
          el Sitio Web incluya enlaces externos a páginas de terceros (por
          ejemplo, hacia redes sociales de HackDental, artículos de blog
          externos, herramientas recomendadas, etc.), se informa al Usuario que
          dichas páginas están gestionadas por terceros ajenos a HackDental.
          HackDental no tiene control sobre esos sitios y no asume
          responsabilidad alguna sobre sus contenidos, políticas de privacidad o
          prácticas. La presencia de estos enlaces en nuestro Sitio Web no
          implica la aprobación, recomendación o respaldo de los sitios
          enlazados. Se recomienda al Usuario leer los términos y políticas de
          cualquier sitio web de terceros que visite a través de enlaces
          publicados en hackdental.com. Comunicación Comercial y Spam: En
          cumplimiento de la LSSI-CE y la normativa de comercio electrónico,
          HackDental no realiza prácticas de spam. Solo se enviarán
          comunicaciones comerciales (por ejemplo, newsletters, correos
          promocionales sobre servicios o nuevos eBooks) a aquellos usuarios que
          hayan dado su consentimiento previo y explícito para recibirlas, por
          ejemplo, al rellenar un formulario y aceptar la Política de Privacidad
          o al suscribirse voluntariamente a nuestras listas de correo. En cada
          comunicación que el Usuario reciba de parte de HackDental, se le
          ofrecerá la opción de darse de baja o cancelar la suscripción de forma
          sencilla, cumpliendo así con el derecho del usuario a oponerse o
          retirar su consentimiento para el envío de comunicaciones comerciales.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          6. Política de Privacidad y Protección de Datos Personales
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          En este apartado se detalla cómo HackDental recopila, utiliza y
          protege los datos personales de los Usuarios del Sitio Web, de
          conformidad con las exigencias del RGPD y demás normativas aplicables.
          Al facilitar sus datos personales a través de este Sitio Web (por
          ejemplo, al registrarse para obtener un eBook gratuito, solicitar
          información o contratar un servicio), el Usuario reconoce haber leído
          y aceptado esta Política de Privacidad.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          6.1. Datos Personales Recopilados
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",

          }}
        >
          a) Datos proporcionados directamente por el Usuario: HackDental
          recopila datos personales identificativos que el Usuario
          voluntariamente entrega a través de los formularios del Sitio Web.
          Estos pueden incluir, entre otros: Nombre y apellidos: Para poder
          dirigirnos al Usuario de forma personalizada. Correo electrónico:
          Necesario para enviar el eBook solicitado, responder consultas y
          remitir comunicaciones informativas o comerciales (solo con
          consentimiento). Número de teléfono: Utilizado opcionalmente para
          contactarle con fines comerciales o de atención (por ejemplo, para
          ofrecer asesoramiento personalizado, coordinar una demo del servicio,
          o enviar información vía WhatsApp si el Usuario lo ha aceptado).
          Nombre de la clínica o empresa (en su caso): Si el formulario lo
          solicita, para identificar la entidad a la que representa el Usuario y
          adaptar mejor nuestras recomendaciones. Otro dato que el formulario
          pudiera solicitar: Por ejemplo, cargo en la clínica, página web de la
          clínica, etc., siempre limitado a lo necesario para la finalidad
          correspondiente. b) Datos recolectados automáticamente (Datos de
          navegación): Al navegar por el Sitio Web, se pueden recopilar
          automáticamente ciertos datos técnicos y de navegación mediante el uso
          de cookies y tecnologías de seguimiento: Dirección IP y ubicación
          aproximada: Para conocer la región desde la que se visita el sitio y
          fines estadísticos de uso (p. ej., saber si las visitas provienen de
          España u otros países). Datos del navegador y dispositivo: Tipo de
          navegador, sistema operativo, resolución de pantalla, idioma, etc.,
          que nos ayudan a asegurar la compatibilidad del Sitio Web con nuestros
          usuarios. Páginas visitadas y acciones en el Sitio: Fecha y hora de
          acceso, páginas específicas consultadas, tiempo de permanencia,
          enlaces clicados, o interacción con los formularios. Esto nos permite
          entender qué secciones son más útiles o populares, mejorar el
          contenido y detectar posibles incidencias en la navegación. Estos
          datos de navegación se recopilan principalmente a través de cookies y
          píxeles de seguimiento de terceros (ver sección de Cookies más abajo),
          y normalmente no permiten por sí solos identificar a una persona (son
          datos anónimos o seudonimizados). No obstante, podrían asociarse con
          los datos personales proporcionados por el Usuario si este, por
          ejemplo, se registra en el Sitio; en tal caso, los datos de navegación
          podrían vincularse a su perfil de usuario para personalizar su
          experiencia. En cualquier caso, el Usuario puede gestionar y
          deshabilitar cookies según se explica más adelante.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",
          }}
        >
          6.2. Finalidad del Tratamiento de Datos
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",
          }}
        >
          Los datos personales que el Usuario facilite a HackDental serán
          tratados con las siguientes finalidades explícitas y legítimas:
          Proporcionar los servicios o información solicitada: Usaremos los
          datos de contacto (nombre, email, teléfono) para enviar los eBooks
          gratuitos solicitados por el Usuario, así como cualquier otra
          información que haya pedido (por ejemplo, responder a una solicitud de
          contacto o consulta enviada a través del formulario correspondiente).
          Esto incluye remitir el enlace de descarga o archivo del recurso
          gratuito y hacer seguimiento para asegurar que el Usuario lo ha
          recibido correctamente o resolver dudas relacionadas. Ofrecer
          asesoramiento y servicios de HackDental: Si el Usuario muestra interés
          en nuestros servicios de marketing dental (por ejemplo, solicitando
          una demostración del método o dejando sus datos para que le
          contactemos), utilizaremos sus datos para contactarle y brindarle
          asesoría personalizada sobre cómo HackDental puede ayudar a su
          clínica. Esto puede implicar comunicaciones vía email, teléfono o
          mensajería (incluido WhatsApp si el teléfono proporcionado es móvil)
          para coordinar reuniones, enviar propuestas o ampliarle información
          comercial sobre nuestros servicios. Envío de comunicaciones
          informativas y de marketing (newsletter, promociones): Con el
          consentimiento previo del Usuario, HackDental podrá utilizar el correo
          electrónico y/o teléfono proporcionado para enviar boletines
          informativos, noticias del sector dental relacionadas con marketing,
          notificaciones sobre nuevos recursos gratuitos (p. ej., avisar de la
          publicación de un nuevo eBook o video), así como ofertas comerciales o
          promociones de nuestros servicios. Estas comunicaciones serán
          periódicas y el Usuario podrá darse de baja en cualquier momento
          (mediante el enlace de “unsubscribe” en el email o solicitándolo por
          email a HackDental, tal como se detalla en el apartado de derechos del
          usuario). Mejora del Sitio Web y fines analíticos: Los datos de
          navegación y comportamiento de los Usuarios en el sitio (recopilados a
          través de cookies de análisis, como Google Analytics) se tratan de
          forma agregada y anónima con la finalidad de analizar el tráfico y uso
          del Sitio Web. Esto nos permite entender mejor los intereses de
          nuestra audiencia, mejorar la estructura, contenido y funcionalidades
          del Sitio Web, detectar posibles problemas de usabilidad, y optimizar
          la experiencia del Usuario. Asimismo, dichos datos se emplean con
          fines estadísticos y para la toma de decisiones comerciales informadas
          (por ejemplo, saber qué recurso gratuito genera más interés). Fines de
          marketing digital y publicidad personalizada: A través de herramientas
          de terceros (como Meta Pixel de Facebook/Instagram o Google Ads en su
          modalidad de remarketing), podemos emplear datos de navegación para
          crear audiencias personalizadas y mostrar publicidad relevante de
          HackDental a los usuarios que han visitado nuestro Sitio Web o han
          mostrado interés en nuestros servicios. Por ejemplo, el Meta Pixel nos
          permite que si un Usuario visitó la página del método especializado,
          luego pueda ver en Facebook una publicidad recordándole nuestros
          servicios. Importante: Este tratamiento está sujeto al consentimiento
          para cookies de marketing; si el Usuario no las acepta, no
          ejecutaremos estos análisis individualizados ni remarketing.
          Cumplimiento de obligaciones legales: En su caso, HackDental podrá
          tratar los datos personales del Usuario para cumplir con obligaciones
          legales aplicables, por ejemplo, obligaciones fiscales, requerimientos
          de autoridades, o para atender el ejercicio de derechos en materia de
          protección de datos. Asimismo, podríamos conservar cierta información
          necesaria para gestionar eventuales reclamaciones, cumplimiento de
          periodos de conservación legales, o obligaciones de reportes si las
          hubiese. HackDental no utilizará los datos personales del Usuario para
          finalidades incompatibles con las aquí descritas. En caso de que se
          requiriese tratar los datos con un propósito distinto (por ejemplo,
          publicar un testimonio con el nombre del Usuario), se le solicitaría
          un consentimiento específico adicional.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          6.3. Legitimación (Base Legal) para el Tratamiento
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",

          }}
        >
          El tratamiento de los datos personales del Usuario por parte de
          HackDental se ampara en bases de legitimación acordes al RGPD, que
          son: Consentimiento del interesado: La principal base legal para
          recopilar y usar los datos del Usuario es el consentimiento libre,
          específico, informado e inequívoco que este otorga. Al marcar las
          casillas correspondientes en los formularios (por ejemplo, aceptando
          la Política de Privacidad y, si corresponde, consintiendo recibir
          comunicaciones), el Usuario está autorizando a HackDental a tratar sus
          datos para las finalidades indicadas. Esto aplica, por ejemplo, al
          suscribirse para descargar un eBook gratuito (consentimiento para usar
          sus datos y enviarle el eBook e información relacionada) o al aceptar
          cookies analíticas/marketing (consentimiento para recopilar datos de
          navegación con esas finalidades). Ejecución de un contrato o medidas
          precontractuales: Si el Usuario contrata efectivamente un servicio de
          HackDental (por ejemplo, adquiere un plan de marketing o consultoría),
          sus datos se tratarán en la medida necesaria para ejecutar dicha
          relación contractual, gestionar la prestación del servicio y la
          facturación. Asimismo, si el Usuario solicita presupuesto o
          información para potencialmente contratar, el tratamiento de sus datos
          de contacto para gestionar esa solicitud se considera medida
          precontractual solicitada por el interesado. Interés legítimo de
          HackDental: En ciertos casos, HackDental podrá tratar datos basándose
          en su interés legítimo, siempre que sobre ese interés no prevalezcan
          los derechos y libertades fundamentales del Usuario. Por ejemplo, el
          interés legítimo en: (a) mantener la seguridad del Sitio Web y
          defenderse frente a fraudes o ataques (lo que puede implicar tratar
          datos de IP sospechosas, registros de accesos anómalos, etc.); (b) en
          caso de ser ya cliente, enviarle comunicaciones sobre productos o
          servicios relacionados con los que ya contrató (lo que la normativa
          permite como “soft opt-in” en ciertas condiciones); o (c) realizar
          análisis estadísticos básicos de visitas (p.ej., número total de
          visitantes por mes) incluso sin consentimiento expreso, siempre que se
          usen datos agregados y minimizados. En cualquier caso, cuando la base
          legal sea el consentimiento, el Usuario tendrá derecho a retirarlo en
          cualquier momento, tal como se detalla en la sección de derechos, y
          cuando se invoque el interés legítimo, el Usuario tendrá derecho a
          oponerse por motivos relacionados con su situación particular.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          6.4. Plazo de Conservación de los Datos
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "300",
          }}
        >
          HackDental tratará y almacenará los datos personales del Usuario solo
          durante el tiempo necesario para cumplir las finalidades para las
          cuales fueron recabados. Posteriormente, mantendremos los datos
          bloqueados por si pudieran derivarse responsabilidades legales, o para
          cumplir obligaciones legales de conservación, y pasado ese periodo se
          procederá a su eliminación segura. A modo orientativo: Los datos
          proporcionados para descarga de eBooks gratuitos o suscripción a
          newsletter se conservarán activos mientras el Usuario no revoque su
          consentimiento. Si en un plazo prolongado (por ejemplo, 12-24 meses)
          el Usuario no ha interactuado con HackDental (no abre nuestros
          correos, no visita el sitio, etc.), HackDental podrá proceder a
          eliminarlos o anonimizar sus datos, previa notificación o dentro de un
          proceso periódico de limpieza de bases de datos, para asegurar que no
          se conservan datos obsoletos innecesariamente. Los datos de clientes
          (quienes hayan contratado servicios) se conservarán mientras dure la
          relación contractual y, tras finalizar esta, el tiempo exigido por la
          legislación aplicable (por ejemplo, 5 años según normativa
          fiscal/contable para facturas en España, o el plazo de prescripción de
          posibles acciones legales derivadas del contrato). Durante ese período
          posterior a la finalización, los datos estarán bloqueados y solo se
          tratarán si surge alguna obligación legal o reclamación. Los datos
          recopilados a través de cookies se conservarán durante los períodos
          indicados en nuestra Política de Cookies (por ejemplo, las cookies de
          Google Analytics pueden persistir de 1 minuto hasta 24 meses, según su
          función). En todo caso, el Usuario puede eliminar las cookies de su
          navegador en cualquier momento, lo que eliminará la información
          recopilada a través de ellas (ver sección de Cookies). En caso de que
          el Usuario retire su consentimiento u ejercite sus derechos de
          supresión, HackDental eliminará o anonimizará sus datos personales de
          nuestros sistemas, salvo aquellos que debamos conservar identificados
          por algún período adicional en cumplimiento de una obligación legal
          (p. ej., registros de consentimiento retirado para demostrar
          cumplimiento, datos mínimos para no enviar comunicaciones si se
          solicitó dejar de recibirlas, etc.). En resumen, no conservaremos
          datos personales del Usuario por más tiempo del necesario. Revisamos
          periódicamente nuestras bases de datos para depurar información y
          eliminar la que ya no sea relevante o vigente, conforme a los
          principios de limitación del plazo de conservación y minimización de
          datos del RGPD.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",

          }}
        >
          6.5. Destinatarios de los Datos y Transferencias a Terceros
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
          }}
        >
          Con carácter general, HackDental no vende ni cede a terceros los datos
          personales de los Usuarios para que estos los utilicen para sus
          propias finalidades independientes (por ejemplo, fines comerciales de
          otras empresas), salvo que medie consentimiento expreso del Usuario o
          una obligación legal. No obstante, para poder prestar nuestros
          servicios y gestionar el Sitio Web de manera eficiente, es posible que
          debamos compartir ciertos datos con terceros proveedores de servicios
          de confianza, en calidad de encargados del tratamiento o como
          colaboradores, siempre bajo las debidas garantías contractuales de
          confidencialidad y protección de datos. Los casos en que los datos
          pueden ser comunicados a terceros son: Proveedores de servicios
          tecnológicos y operativos: HackDental cuenta con empresas externas que
          nos ayudan en diversas funciones de soporte. Por ejemplo: servicios de
          hosting y almacenamiento web, servicios de email marketing (para el
          envío masivo de correos electrónicos con los eBooks o newsletters, a
          través de plataformas especializadas), servicios de gestión de
          relaciones con clientes (CRM) para organizar los contactos, y
          herramientas de análisis y tracking (como Google Analytics o Meta
          Pixel, mencionados en la sección de Cookies). Estas empresas pueden
          tener acceso a datos personales en la medida necesaria para realizar
          dichas funciones en nombre de HackDental, pero no pueden utilizarlos
          para otros fines. HackDental suscribe con todos ellos los
          correspondientes acuerdos de tratamiento de datos, asegurando que
          aplican medidas de seguridad adecuadas conforme al RGPD. Servicios de
          pago o bancarios (cuando aplique): Si en el futuro HackDental
          ofreciera contratación de servicios pagados en línea, los datos
          necesarios para procesar el pago (por ejemplo, a través de pasarelas
          de pago, bancos o PayPal) serían comunicados de forma segura a dichos
          proveedores de pago. Esto incluiría información estrictamente
          necesaria como datos de la tarjeta o cuenta, nombre del pagador, etc.,
          cifrada y manejada directamente por el proveedor de pagos, sin que
          HackDental almacene esos detalles financieros (más allá de
          confirmación de que el pago se realizó). Nota: Actualmente HackDental
          no efectúa cobros a través del Sitio Web, por lo que este supuesto no
          aplica, pero se menciona a efectos informativos para el caso de
          futuras implementaciones. Obligaciones legales y requerimientos:
          HackDental podrá divulgar datos personales del Usuario a terceros
          organismos o autoridades públicas si existe una obligación legal de
          hacerlo, por ejemplo en cumplimiento de una orden judicial,
          requerimiento gubernamental o regulación aplicable. Igualmente, en
          caso de procedimientos legales necesarios para defender los derechos
          de HackDental (por ejemplo, en caso de fraude, ataques, o
          incumplimientos por parte de un usuario), podríamos comunicar datos
          estrictamente necesarios a asesores legales, tribunales o fuerzas del
          orden, en la medida en que dicha comunicación sea requerida. Supuestos
          de reestructuración empresarial: Si HackDental LLC fuera objeto de una
          fusión, adquisición, venta de negocio o transferencia de activos que
          incluya la base de datos de usuarios, la información personal de los
          Usuarios podría ser transmitida al nuevo propietario o sucesor de la
          empresa, con el único fin de continuar la prestación de los servicios.
          En tal caso, HackDental garantizará que el tercero receptor se
          comprometa a respetar los términos de esta Política de Privacidad en
          cuanto al manejo de dichos datos, y se informará oportunamente a los
          usuarios afectados. Transferencias Internacionales de Datos: Dado que
          HackDental LLC se encuentra en Estados Unidos y también emplea
          proveedores tecnológicos internacionales, algunos datos pueden
          almacenarse o ser accesibles fuera del Espacio Económico Europeo
          (EEE), incluyendo en EE.UU. u otros países que pueden no proporcionar
          un nivel de protección de datos equiparable al europeo. Por ejemplo,
          las plataformas de email marketing, el servicio de almacenamiento en
          la nube o las herramientas de analítica (Google, Meta) pueden implicar
          tratamientos en servidores ubicados fuera de la UE. En todos estos
          casos, HackDental se asegura de implementar garantías adecuadas para
          proteger sus datos, tal como exige el RGPD: Nos aseguramos de que los
          proveedores estadounidenses a los que les transferimos datos estén
          adheridos a mecanismos reconocidos de protección de datos
          internacionales, como el EU-US Data Privacy Framework (Marco de
          Privacidad de Datos UE-EE.UU., en vigor desde julio de 2023) en caso
          de que el proveedor esté certificado en dicho programa. Si el
          proveedor no estuviera adherido a ese marco, entonces exigimos la
          firma de Cláusulas Contractuales Tipo aprobadas por la Comisión
          Europea u otras medidas contempladas en el artículo 46 del RGPD para
          legitimar la transferencia, asegurando un nivel de protección
          esencialmente equivalente al europeo. En cualquier formulario donde
          recabemos sus datos, incluimos la referencia al consentimiento del
          Usuario para la posible transferencia internacional, de modo que al
          aceptar esta Política de Privacidad, el Usuario comprende y consiente
          que sus datos puedan ser alojados o tratados fuera de su país de
          residencia, siempre con las debidas protecciones. Si desea más
          información sobre las transferencias internacionales de sus datos o
          las garantías específicas aplicadas, el Usuario puede contactarnos en
          cualquier momento a través del email de contacto de privacidad
          proporcionado, y estaremos encantados de facilitarle los detalles
          pertinentes.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
            color: "#213343",

          }}
        >
          6.6. Uso de Cookies y Herramientas de Tracking
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "300",
          }}
        >
          El Sitio Web utiliza cookies y otras tecnologías similares de recogida
          de datos de navegación con fines variados. Al acceder por primera vez,
          el Usuario verá un banner de cookies mediante el cual puede aceptar o
          configurar dichas cookies. Para información detallada, puede consultar
          nuestra Política de Cookies específica (si está disponible en el Sitio
          Web). A continuación resumimos los aspectos más importantes: ¿Qué son
          las cookies?: Son pequeños archivos de texto que se almacenan en el
          dispositivo del Usuario (ordenador, smartphone, etc.) al visitar
          páginas web. Las cookies permiten recordar preferencias del usuario y
          reconocerle en sucesivas visitas, y pueden servir para diversos
          propósitos (técnicos, estadísticos, publicitarios). Cookies
          necesarias: HackDental utiliza cookies técnicas necesarias para el
          funcionamiento básico del Sitio Web, como recordar su preferencia de
          idioma (si el sitio estuviese en varios idiomas), mantener la sesión
          iniciada (en caso de áreas de acceso restringido), o conservar la
          configuración de cookies elegida por el Usuario. Estas cookies no
          requieren consentimiento previo, ya que sin ellas ciertas funciones no
          podrían realizarse. Cookies de análisis (estadísticas): Con el
          objetivo de mejorar continuamente nuestro servicio y entender cómo
          interactúan los usuarios con el Sitio Web, utilizamos herramientas de
          analítica web como Google Analytics (servicio proporcionado por Google
          LLC). Estas cookies recopilan información agregada sobre la
          navegación: por ejemplo, número de visitas a cada página, duración de
          la visita, origen del tráfico, secciones más clicadas, flujo de clics,
          etc. Google Analytics nos proporciona informes que nos ayudan a
          detectar patrones de uso y tendencias, sin identificar a usuarios
          individuales. Cabe señalar que Google puede procesar la información
          recopilada por sus cookies en servidores ubicados en EE.UU. u otros
          países, pero HackDental ha configurado el servicio de forma que se
          anonimice la IP de los usuarios dentro de la UE (en la medida de lo
          posible) y ha firmado con Google las correspondientes cláusulas de
          protección de datos. El Usuario puede rechazar las cookies de Google
          Analytics al iniciar su navegación (desde el banner) o posteriormente
          mediante la configuración de su navegador, sin que ello afecte a las
          funcionalidades esenciales del Sitio Web. Cookies de marketing o
          publicidad (píxeles de terceros): HackDental también utiliza
          herramientas de terceros para fines publicitarios, concretamente el
          Meta Pixel (también conocido como Facebook Pixel, de Meta Platforms,
          Inc.). Este es un fragmento de código inserto en nuestras páginas que,
          a través de cookies y tecnologías de seguimiento, registra las
          acciones del Usuario en el Sitio Web (por ejemplo, si visitó la página
          de nuestro método o si completó un formulario). Dicha información se
          envía a Meta/Facebook y nos permite posteriormente mostrar anuncios
          personalizados de HackDental al Usuario en esas plataformas (Facebook,
          Instagram) – técnica conocida como remarketing – o medir la
          efectividad de nuestras campañas publicitarias en redes sociales. El
          Meta Pixel puede recoger datos como la ID de usuario de Facebook (si
          está logueado), la URL visitada, y detalles técnicos del navegador.
          Esta herramienta también implica una transferencia de datos a EE.UU. a
          los servidores de Meta. Solo instalamos el pixel y activamos su
          seguimiento si el Usuario da su consentimiento a las cookies de
          marketing en el banner inicial. Si decide no aceptarlas, no
          ejecutaremos estas cookies ni se enviarán datos a Meta desde nuestra
          web. Otras cookies de terceros: Es posible que el Sitio Web utilice en
          el futuro otras cookies de servicios terceros adicionales, por
          ejemplo, botones de redes sociales (que podrían introducir cookies de
          la red social correspondiente), o plataformas de vídeo (si incrustamos
          videos de YouTube, Vimeo, etc., esas plataformas pueden establecer sus
          cookies al reproducirlos). Cualquier cookie de terceros que no sea
          estrictamente necesaria será igualmente solicitada al Usuario para su
          aceptación. Gestión de cookies: En cualquier momento, el Usuario puede
          configurar su navegador para bloquear o eliminar las cookies,
          incluyendo las cookies de HackDental. Asimismo, puede reabrir el panel
          de configuración de cookies (si el Sitio Web ofrece esa funcionalidad)
          para modificar sus preferencias y retirar su consentimiento a las
          cookies no esenciales. Debe tener en cuenta que, al rechazar o borrar
          cookies, ciertas partes del Sitio Web podrían no funcionar
          correctamente o la experiencia puede verse afectada (por ejemplo,
          podría ser tratado como un nuevo visitante cada vez, sin recordar sus
          preferencias). Para más información sobre cómo gestionar las cookies
          en los principales navegadores: puede consultar las opciones de
          configuración de Chrome, Firefox, Safari, Edge, etc., o visitar sitios
          web de ayuda como aboutcookies.org.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "600",
          }}
        >
          6.7. Derechos de los Usuarios en materia de Protección de Datos
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "300",
          }}
        >
          De acuerdo con la normativa vigente (RGPD y LOPD-GDD), los Usuarios
          cuyos datos personales sean tratados por HackDental gozan de una serie
          de derechos que pueden ejercer en cualquier momento. Estos derechos
          son: Derecho de Acceso: Obtener confirmación de si HackDental está
          tratando o no sus datos personales, y en tal caso, recibir una copia
          de dichos datos y información detallada sobre el tratamiento
          realizado. Derecho de Rectificación: Solicitar la corrección o
          actualización de sus datos personales que sean inexactos o
          incompletos. Si alguno de los datos proporcionados a HackDental ha
          cambiado o es erróneo, el Usuario puede y debe informarnos para
          rectificarlo. Derecho de Supresión (“derecho al olvido”): Pedir la
          eliminación de sus datos personales cuando, entre otros motivos, ya no
          sean necesarios para los fines para los que se recogieron, o cuando
          retire el consentimiento en el caso de tratamientos basados en este, o
          cuando los datos se hayan tratado ilícitamente. HackDental atenderá el
          derecho de supresión eliminando por completo los datos personales del
          interesado de sus sistemas (salvo bloqueo por obligaciones legales).
          Derecho de Oposición: Oponerse en cualquier momento, por motivos
          relacionados con su situación particular, a que sus datos sean objeto
          de un tratamiento basado en interés legítimo. También tiene derecho a
          oponerse al tratamiento de sus datos con fines de marketing directo
          (por ejemplo, puede oponerse en todo momento a recibir nuestras
          comunicaciones comerciales, lo que conllevará su cese inmediato).
          Derecho a la Limitación del Tratamiento: Solicitar que se restrinja el
          tratamiento de sus datos personales en ciertas circunstancias (por
          ejemplo, mientras se verifica la exactitud de datos que ha impugnado,
          o en lugar de suprimirlos si los necesita para la formulación de
          defensas o reclamaciones). Cuando la limitación proceda, mantendremos
          los datos bloqueados y solo los trataremos para determinados supuestos
          (p. ej., defensa legal o protección de derechos de terceros). Derecho
          a la Portabilidad de los Datos: Recibir los datos personales que haya
          proporcionado a HackDental en un formato estructurado, de uso común y
          lectura mecánica, y poder transmitirlos a otro responsable, siempre
          que sea técnicamente posible. Este derecho se puede ejercer cuando el
          tratamiento se base en el consentimiento o en un contrato, y se
          efectúe por medios automatizados. Derecho a Retirar el Consentimiento:
          En los casos en que la base legal del tratamiento sea el
          consentimiento del Usuario, éste tiene derecho a revocar dicho
          consentimiento en cualquier momento. La retirada del consentimiento no
          tendrá efectos retroactivos: significa que a partir del momento en que
          la revoque dejaremos de tratar sus datos para esa finalidad, pero no
          afecta a la licitud del tratamiento previo realizado con su
          autorización. Por ejemplo, un Usuario puede quitar su consentimiento
          para recibir newsletters haciendo clic en “unsubscribe” en cualquier
          correo, o enviándonos un email solicitando la baja. Para ejercer estos
          derechos, el Usuario puede enviar una comunicación al Responsable
          (HackDental LLC) a través del correo electrónico indicado en el
          apartado de identificación (privacy@hackdental.com) con el asunto
          “Protección de Datos – Ejercicio de Derechos”. Se recomienda
          especificar claramente qué derecho desea ejercer y sobre qué datos en
          particular, adjuntando una copia de un documento de identidad (por
          ejemplo, DNI, NIE o pasaporte) para poder verificar su identidad.
          Alternativamente, si lo prefiere, puede enviarse la solicitud por
          escrito (incluyendo fotocopia de identificación) a la dirección postal
          de HackDental LLC en Delaware, aunque por agilidad se sugiere el
          correo electrónico. HackDental se compromete a responder a las
          solicitudes de los usuarios en los plazos legales (en general, 1 mes
          prorrogable a 2 meses en casos complejos, conforme al RGPD) y a
          facilitar el ejercicio de estos derechos de forma gratuita para el
          interesado. En caso de que una solicitud sea manifiestamente infundada
          o excesiva (por ejemplo, carácter repetitivo), HackDental podría o
          bien cobrar un cargo administrativo razonable en base a los costes, o
          negarse a actuar, pero en cualquier situación justificará su decisión.
          Adicionalmente, informamos al Usuario de su derecho a presentar una
          reclamación ante la Agencia Española de Protección de Datos (AEPD) u
          otra autoridad de control competente, especialmente si considera que
          HackDental ha vulnerado sus derechos o no ha atendido debidamente el
          ejercicio de los mismos. Puede obtener más información sobre cómo
          presentar una reclamación ante la AEPD en su sitio web oficial
          (www.aepd.es). No obstante, le invitamos a que, antes de recurrir a
          dicha vía, nos contacte a nosotros para intentar resolver cualquier
          inquietud de forma amistosa y rápida.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            color: "#213343",

            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          6.8. Seguridad de los Datos Personales
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "300",
          }}
        >
          HackDental adopta e implementa medidas de seguridad técnicas y
          organizativas apropiadas para proteger los datos personales de los
          Usuarios frente a accesos no autorizados, alteración, pérdida,
          divulgación o destrucción accidental o ilícita. Estas medidas
          incluyen, por ejemplo, la encriptación de las comunicaciones a través
          del Sitio Web mediante protocolo SSL/TLS (HTTPS), controles de acceso
          restringido a las bases de datos que contienen información personal,
          firewalls, sistemas de detección de intrusiones, procedimientos de
          gestión de contraseñas y políticas internas de tratamiento de datos y
          confidencialidad. Nuestro personal y colaboradores están sujetos al
          deber de confidencialidad respecto a los datos personales a los que
          pudieran acceder, y reciben formación en buenas prácticas de
          protección de datos. Asimismo, HackDental realiza un seguimiento
          proactivo de sus sistemas para prevenir vulnerabilidades y mantener
          los estándares de seguridad al día. Aunque ningún sistema es
          completamente invulnerable, HackDental se esfuerza por garantizar la
          integridad y disponibilidad de la información personal. En el
          hipotético caso de que se produjera una violación de seguridad que
          afecte de forma significativa a los datos personales de los Usuarios
          (por ejemplo, un breach de nuestros servidores), HackDental se
          compromete a notificar a las autoridades competentes y a los afectados
          en los plazos y condiciones establecidos en el RGPD (por lo general,
          dentro de las 72 horas posteriores a haber tenido constancia, si así
          lo exige la normativa, y cuando el incidente suponga un alto riesgo
          para los derechos y libertades de los usuarios).
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          6.9. Cambios en la Política de Privacidad
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            fontWeight: "300",
            color: "#213343",

          }}
        >
          HackDental se reserva el derecho a modificar o actualizar en cualquier
          momento la presente Política de Privacidad y el Aviso Legal, por
          ejemplo, para adaptarla a novedades legislativas, jurisprudenciales,
          técnicas o a cambios en los servicios ofrecidos. Cualquier cambio
          significativo será comunicado a los Usuarios a través del propio Sitio
          Web (por ejemplo, publicando una notificación destacada o enviando un
          aviso por correo electrónico a aquellos usuarios suscritos, si fuera
          procedente) y entrará en vigor desde el momento de su publicación. Se
          recomienda al Usuario revisar periódicamente esta página para estar al
          tanto de la versión más actualizada. Al continuar utilizando el Sitio
          Web tras la publicación de modificaciones, se entenderá que acepta
          dichos cambios. En caso de que un Usuario no esté de acuerdo con las
          actualizaciones de la política, deberá dejar de usar el Sitio Web y,
          si lo desea, puede solicitar la eliminación de sus datos personales
          según lo indicado en la sección de derechos.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          6.10. Consultas y Contacto
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            fontFamily: "lexend",
            color: "#213343",

            fontWeight: "300",
          }}
        >
          Si el Usuario tiene preguntas, dudas o comentarios relativos a este
          Aviso Legal o a la Política de Privacidad, puede dirigirse a
          HackDental a través del correo electrónico de contacto proporcionado
          (privacy@hackdental.com). Atenderemos todas las consultas en la mayor
          brevedad posible. Asimismo, si detecta cualquier contenido o
          comportamiento en el Sitio Web que considere inapropiado, ilegal o que
          vulnere derechos (propios o de terceros), agradecemos nos lo notifique
          para tomar las medidas oportunas.
        </Text>
        <Text
          type="bigtitle"
          color="black"
          bold="semibold"
          textAlign="start"
          fontSize="24px"
          fontSizeMobile="18px"
          s={{
            lineHeight: "1.7",
            color: "#213343",

            fontFamily: "lexend",
            fontWeight: "600",
          }}
        >
          7. Ley Aplicable y Jurisdicción
        </Text>
        <Text
          color="black"
          bold="font-lighter"
          textAlign="start"
          fontSize="17px"
          fontSizeMobile="16px"
          s={{
            lineHeight: "1.7",
            color: "#213343",
            fontFamily: "lexend",
            fontWeight: "300",
          }}
        >
          El uso del Sitio Web y la interpretación de este Aviso Legal se
          regirán de acuerdo con la legislación de Estados Unidos de América y,
          en la medida que resulte aplicable por razón del destino de los
          servicios a usuarios en España, por las leyes españolas (especialmente
          en materia de protección de datos y comercio electrónico). En caso de
          que surja cualquier conflicto o reclamación en relación con el Sitio
          Web, y siempre que no contravenga la normativa de protección de datos
          o de consumidores aplicable, las partes se someterán a los Juzgados y
          Tribunales competentes. No obstante, con carácter previo a cualquier
          litigio, HackDental y el Usuario se comprometen a intentar de buena fe
          una solución amistosa que satisfaga a ambas partes.
        </Text>
      </section>
      <Footer />
    </div>
  );
};

export default Politics;
