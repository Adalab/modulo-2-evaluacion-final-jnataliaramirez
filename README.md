![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Evaluación final - Modulo 2 (JavaScript)

Está es mi evaluación final, del módulo 2 (JavaScript) en *Adalab*.

Consiste en programar una **página web desde cero**, donde su función principal es prácticar todo lo visto en el módulo de Javascript, en esta ocasión se encuentra el foco del proyecto en hacer una aplicación web, donde la usuaria pueda interactuar con ella, donde haga peticiones, se muestre nueva información, guarde favoritos y si ya no son de su gusto los pueda borrar, ademas pueda guardar sus favoritos en su navegador 💚. 

En la evaluación hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de la aplicación web, como HTML, JS y SCSS, en esta carpeta se codeo todos los nuevos ficheros.
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. Para arrancar el proyecto, 🧠 recuerda  en consola poner `npm install` y luego para correrlo en tu pc `npm start`. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

Es posible la solución de este ejercicio aplicando todo lo visto en el segundo módulo del bootcamp, pasando por temas como:  

- Condicionales
- Funciones
- Eventos
- Estructura de datos
- Promesas
- Tener un plan 
- localStorage
- Ademas ... de aplicar todo lo visto en el modulo 1 - maquetación.
## ¿Qué encontrarás? 📖

Esta página contiene 3 secciones principales: 

1. JavaScript: 
    - Buscar series.
    - Añadir a tus series favoritas.
    - Tener un registro de tus series favoritas.
    - Resetear si ya no te gustan estas series.
    - Volver a empezar. 
    - Todo esto utilizando toda la tematica de JavaScript
1. Maquetación Web: 
    - Una página web en donde tiene un header y un cuerpo, con todo lo necesario para utilizar la app. 
1. Estilos CSS:
    - Unos estilos muy bonitos para que la usuaria se sienta a gusto, ademas la pág. esta en grid para que al ir añadiendo la información sea interactiva.

#### Donde se puede ver 👀
Esta página web tiene un enlace en la web, donde se podra visitar las veces que quiera.

**El enlace es el siguiente: [Evaluación Final - Módulo Dos](URL "http://beta.adalab.es/modulo-2-evaluacion-final-jnataliaramirez/")**


##### Instalación de Gulp para entrar al código 

###### Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

*Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:*

1. **Clona esta repositorio desde GitHub**.
1. **Abre una terminal** en la carpeta raíz del repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

**Pasos para arrancar el proyecto:**

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez desees verlo desde tu computador** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de tu navegador y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en el navegador**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Si deseas editar mi evaluación después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

**Para generar mi página para producción ejecute el comando:**

```bash
npm run docs
```
Y a continuación:

1. Subi a mi repositorio la carpeta `docs/` que se te acaba de generar.
1. Entre en la pestaña `settings` de mi repositorio b.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya está

Tal vez quieras cojer el código de esta evaluación entonces estas en libertad de hacer los mismos pasos que hice yo para tu repo. Recuerda que deberias copiarlo (descargarlo como un zip) y no clonarlo si es lo que deseas. 

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

