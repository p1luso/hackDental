# Proyecto Agencia de marketing para clínicas dentales

este README servira de ayuda para entender lo basico del proyecto


### descripcion general
el proyecto está hecho con React usando Vite como builder y entorno de desarrollo
los comandos basicos para trabajar son:
- npm run dev: corre el servidor de pruebas
- npm run build: genera una carpeta "dist" que es lo que se debe entregar al José para subir la aplicacion a su servidor de producción

### el proyecto está organizado en una estructura de carpetas de la siguiente forma:
- assets: aqui van las fuentes e imagenes necesarias
- components: aqui van los componentes reutilizables por todas las paginas
- constants: aqui van archivos js de constantes reuitlizables
- hooks: aqui van hooks personalizados por el programador
- pages: aqui van las diferentes secciones o paginas de la app, como la landing page
- services: aqui van todas las llamadas a apis externas o llamadas a consultas de base de datos
- stores: aqui van los estados globales, manejados usando zustand
- utils: aqui van funciones y metodos utiles, principalmente de parseo de datos



### El listado de dependencias importantes se encuentra en el archivo package.json pero detallé lo mas importante aqui

- para manejo de estados globales se utiliza zustand
- se utliza un servicio externo llamado zappier para que al momento de enviar datos desde formularios, estos se almacenenen en una hoja de calculo de excel
- se utliza react router dom para el manejo de rutas

se utilizó firebase como base de datos en principio para guardar los ebooks pero se puede cambiar a otro servicios si se desea

para el tema de zappier se utiliza sus webhooks para mandar los datos de los formularios a la hoja de excel, cabe aclarar que los webhooks de zappier son una funcion premium
y que se debe pagar para usarlos, hablarlo con José en caso de que necesite aun esa funcionalidad.

para configurar un webhook se puede preguntar a chatgpt, yo hice eso ya que su documentación no es muy buena.

la hoja de excel se debe crear de vuelta ya que yo use mi cuenta de google para integrarme con zappier.