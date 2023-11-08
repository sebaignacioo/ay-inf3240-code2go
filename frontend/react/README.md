# Ayudantía - Fullstack y Errores en la web

**INF3240 - Ingeniería Web**<br />
**Escuela de Ingeniería Informática**<br />
**Pontificia Universidad Católica de Valparaíso**

* * *

<!-- omit in toc -->
## Índice
<!--  -->
- [Información](#información)
  - [Datos ayudantía](#datos-ayudantía)
  - [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Archivos](#archivos)
- [Actividad](#actividad)
  - [Errores identificados por el cliente](#errores-identificados-por-el-cliente)
- [Pasos iniciales](#pasos-iniciales)

* * *

## Información

### Datos ayudantía

- **Número:** 10
- **Semana:** 06 al 10 de noviembre de 2023
- **Temática:** Fullstack - Errores en la web

### Tecnologías utilizadas

- [![ts-badge]][ts-web]
- [![node-badge]][node-web]
- [![react-badge]][react-web]
- [![vite-badge]][vite-web]
- [![expressjs-badge]][expressjs-web]
- [![sqlite-badge]][sqlite-web]
- [![dotenv-badge]][dotenv-web]
- [![jwt-badge]][jwt-web]

### Archivos

| Título                   | Formato           | Archivo (link)                          |
| ------------------------ | ----------------- | --------------------------------------- |
| ay10-backend-actualizado | `carpeta zip`     | Descarga en Aula Virtual                |
| ay10-frontend-react      | `carpeta zip`     | Descarga en Aula Virtual                |
| ay-inf3240-code2go       | `repositorio git` | [Ir al repo de GitHub][repo-github-web] |

* * *

## Actividad

Continuaremos con el proyecto **Code2Go**, en esta oportunidad, enfocándonos en resolver problemas que se presentan en el frontend desarrollado (usando React), y una vez esos errores estén resueltos, continuar con el desarrollo del backend.

Para esto, seguir los pasos iniciales para tener corriendo ambos proyectos (frontend y backend), con ambos, la idea es enfocarse en el proyecto de frontend, y resolver los errores que se presentan.

### Errores identificados por el cliente

- **Error 1:** El inicio de sesión no hace nada, y da un error en la consola del navegador.
- **Error 2:** El registro de usuarios no hace nada, y da un error en la consola del navegador.
- **Error 3:** Al presionar el boton con los 3 puntos en la página de inicio (donde está cada bloque de ejemplo), no se muestra el menú que debería mostrarse.
- **Error 4:** En la página de inicio, queremos que los bloques se agrupen de a 2, y no de a 3 como se hace actualmente.

* * *

## Pasos iniciales

1. Descargar los archivos `ay10-backend-actualizado.zip` y `ay10-frontend-react.zip` de la ayudantía desde Aula Virtual, o clonar/actualizar desde el repositorio de Github [en este link][repo-github-web].
2. Si descargaste los zip, descomprimir los archivos, primero el de frontend, de preferencia en el escritorio.
3. Aquí se necesitan abrir 2 ventanas de Visual Studio Code, la primera para el backend y la segunda para el frontend. Con la primera, abrir la carpeta `code2go/backend` en Visual Studio Code.
4. Para el frontend, abrir la carpeta  `code2go/frontend/react` en Visual Studio Code **OJO: Abrir la carpeta `react` que está dentro de `code2go/frontend`**.
5. Presionar las teclas <kbd>Ctrl</kbd> + <kbd>ñ</kbd> para abrir la terminal integrada de Visual Studio Code (también puede acceder presionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd> **EN CADA UNA DE LAS VENTANAS**, y escribiendo `terminal`).
6. Instalar las dependencias de NPM con el comando:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

7. Ejecutar cada proyecto con el comando:

    ```bash
    npm run start
    ```

    o

    ```bash
    yarn start
    ```

* * *

[node-badge]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=flat
[node-web]: https://nodejs.org/es/
[react-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=fff&style=flat
[react-web]: https://es.reactjs.org/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat
[vite-web]: https://vitejs.dev/
[ts-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[ts-web]: https://www.typescriptlang.org/
[expressjs-badge]: https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat
[expressjs-web]: https://expressjs.com/
[sqlite-badge]: https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=fff&style=flat
[sqlite-web]: https://www.sqlite.org/index.html
[dotenv-badge]: https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=fff&style=flat
[dotenv-web]: https://www.npmjs.com/package/dotenv
[jwt-badge]: https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat
[jwt-web]: https://jwt.io/
[repo-github-web]: https://github.com/sebaignacioo/ay-inf3240-code2go
