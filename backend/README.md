# Ayudantía - Backend y seguridad web

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
  - [Proyecto ficticio](#proyecto-ficticio)
- [Pasos iniciales](#pasos-iniciales)
- [Conceptos clave](#conceptos-clave)
  - [API](#api)
    - [Controladores](#controladores)
    - [Middlewares](#middlewares)
    - [Rutas](#rutas)
  - [Base de datos](#base-de-datos)
    - [TypeORM](#typeorm)
  - [Autenticación](#autenticación)
    - [Encriptación de contraseña](#encriptación-de-contraseña)
    - [JWT](#jwt)
  - [Variables de entorno](#variables-de-entorno)

* * *

## Información

### Datos ayudantía

- **Número:** 9
- **Semana:** 23 al 27 de octubre de 2023
- **Temática:** Backend y seguridad web

### Tecnologías utilizadas

- [![ts-badge]][ts-web]
- [![node-badge]][node-web]
- [![expressjs-badge]][expressjs-web]
- [![sqlite-badge]][sqlite-web]
- [![dotenv-badge]][dotenv-web]
- [![jwt-badge]][jwt-web]

### Archivos

| Título      | Formato      | Archivo (link)           |
| ----------- | ------------- | ------------------------ |
| ay9-proyecto-base | `carpeta zip` | Descarga en Aula Virtual |
| ay-inf3240-code2go | `repositorio git` | [Ir al repo de GitHub][repo-github-web] |

* * *

## Actividad

La actividad de la ayudantía consiste en continuar el desarrollo de un proyecto web ficticio, para el cuál se ha pedido tu ayuda en el área de backend. Tu tarea consiste principalmente en finalizar el desarrollo *a medias*, y cumplir con lo solicitado por el cliente.

### Proyecto ficticio

En resumen, el proyecto fue solicitado a la *Consultora PUCV-WebDev* (de la cuál eres parte recientemente) por un grupo de estudiantes, con la idea de desarrollar una plataforma web que permita a los usuarios compartir código de programación, de manera simple y rápida. Puedes obtener más detalles acerca del desarrollo solicitado accediendo a la documentación del proyecto [en este link][doc-project-gist].

* * *

## Pasos iniciales

1. Descargar el archivo `ay9-proyecto-base.zip` de la ayudantía desde Aula Virtual, o clonar el repositorio de Github [en este link][repo-github-web].
2. Si descargaste el zip, descomprimir el archivo, de preferencia en el escritorio.
3. Abrir la carpeta `code2go/backend` en Visual Studio Code **OJO: Abrir la carpeta `backend` que está dentro de `code2go`**.
4. Presionar las teclas <kbd>Ctrl</kbd> + <kbd>ñ</kbd> para abrir la terminal integrada de Visual Studio Code (también puede acceder presionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>, y escribiendo `terminal`).
5. Instalar las dependencias de NPM con el comando:

    ```bash
    npm install
    ```

6. Ejecutar el proyecto con el comando:

    ```bash
    npm run start
    ```

* * *

## Conceptos clave

### API

Para el desarrollo de la API, se consideró la utilización de **Node.js** y **Express.js**, con el lenguaje de programación **TypeScript**. Además, se utilizó la base de datos **SQLite** para el desarrollo, y **TypeORM** como ORM para la base de datos.

La aplicación de express se encuentra en el archivo `src/api/app.ts`, y es el punto de entrada de la aplicación. En este archivo se configuran los middlewares, las rutas, y se inicia el servidor. Cada ruta de la API está en una carpeta separada, con su nombre, dentro de `src`, y la estructura de cada carpeta es la siguiente:

```
.
└── src/
    └── api/
        └── ruta  # Carpeta ruta de API '/ruta'
            ├── controllers.ts  # Controladores de la ruta
            └── routes.ts       # Configuración de la ruta en express
```

Las rutas `/auth` y `/usuarios` ya están implementadas, y se encuentran en las carpetas `auth` y `usuarios`, respectivamente. Puedes usarlos como referencia para implementar las rutas restantes.

#### Controladores

Se encuentran en el archivo `controllers.ts`, y son los encargados de manejar las peticiones HTTP, y de llamar a las funciones necesarias para obtener los datos desde la base de datos. Poseen las validaciones necesarias para verificar que los datos ingresados por el usuario sean correctos, y controla el proceso de obtención y envío de datos.

#### Middlewares

Se encuentran en el archivo `middlewares.ts`, y son funciones que se ejecutan antes de que se ejecute el controlador de una ruta. Puede utilizar los middlewares que ya existen, y/o crear los que necesite. Puede revisar más acerca del desarrollo de middlewares en la [documentación de express](https://expressjs.com/es/guide/using-middleware.html), o en la guía que está [haciendo click aquí](https://medium.com/@aarnlpezsosa/middleware-en-express-js-5ef947d668b).

#### Rutas

Se encuentran en el archivo `routes.ts`, y son las encargadas de definir las rutas de la API, y de llamar a los controladores correspondientes. Utiliza `Express.Router` para definir las rutas, y llama a los controladores necesarios para cada ruta. Además, en la raíz de `src/api`, se encuentran los archivos `functions.ts` y `middlewares.ts`, que contienen funciones auxiliares que pueden ser utilizadas por los controladores, para realizar tareas repetitivas, y middlewares de la API, respectivamente. Puede utilizar las funciones y middlewares que ya existen, y/o crear los que necesite.

### Base de datos

Para el desarrollo de la base de datos, se consideró la utilización de **SQLite3** como motor de base de datos, y **TypeORM** como ORM para la base de datos. La base de datos con SQLite3 nos permite tener una base de datos local, sin necesidad de instalar un motor de base de datos como MySQL o PostgreSQL, de tipo relacional y SQL, pudiendo ejecutarse instrucciones SQL como en cualquier base de datos.

De todas formas, SQLite3 tiene limitantes para su uso en aplicaciones reales de producción, por lo que su uso se recomienda a modo de aprendizaje, y para aplicaciones pequeñas, o que no requieran de una base de datos muy robusta. Teniendo en mente que existen infinidad de motores de base de datos, y que cada uno tiene sus ventajas y desventajas, se les recomienda investigar sobre el concepto de **ORM**.

En resumen, un **ORM** (acrónimo para Object Relational Mapping) permite *mapear* los datos de una base de datos relacional, a objetos de un lenguaje de programación. Esto nos permite trabajar con los datos como si fueran objetos, y no como si fueran tablas de una base de datos, lo que facilita el desarrollo de aplicaciones web, y nos permite trabajar con los datos de una manera más simple. Además, facilita el proceso de migración de una base de datos a otra, ya que solo se debe cambiar el ORM, y no el código de la aplicación.

Esto último nos facilita, por ejemplo, cambiar a una base de datos tipo `postgresql` cuando queramos desplegar la aplicación, y seguir trabajando con `sqlite3` en el desarrollo, sin tener que cambiar el código de la aplicación. Como ejemplos de ORM tenemos los más comunes para JavaScript, como `Sequelize`, `Prisma` y `TypeORM`, y para Python, como `SQLAlchemy`. En este desarrollo, usaremos **TypeORM**.

#### TypeORM

TypeORM es un ORM para Node.js, que nos permite trabajar con multitud de motores de base de datos, tanto relacionales como no relacionales. Algunos ejemplos son `postgresql`, `mysql`, `mariadb`, `sqlite`, `mongodb`, `mssql`, `oracle`, `mariadb`, entre otras. Además, nos permite trabajar con TypeScript, y nos facilita el desarrollo de aplicaciones web, ya que nos permite trabajar con los datos como si fueran objetos, y no como si fueran tablas de una base de datos.

- **Entidad:** Una entidad es una **clase** que representa una tabla de la base de datos. Por ejemplo, la entidad `Usuario` representa la tabla `usuarios` de la base de datos. Cada entidad tiene un nombre, y un conjunto de **columnas**, que representan las columnas de la tabla de la base de datos. Además, cada entidad tiene un conjunto de relaciones, que representan las relaciones entre tablas de la base de datos. TypeORM usa **decoradores** para definir las clases que son entidades, y las columnas y relaciones de cada entidad. Puedes revisar la [documentación de TypeORM](https://typeorm.io/) para más información.
- **Configuración de TypeORM:** El punto de partida de TypeORM en el proyecto está dentro del archivo `src/data/index.ts`, y contiene lo siguiente:

  ```ts
  import 'reflect-metadata';

  import { DataSource } from 'typeorm';

  const AppDataSource = new DataSource({
    type: 'sqlite',
    database: process.env.SQLITE3_DB_PATH ?? 'db.sqlite',
    synchronize: true,
    logging: false,
    entities: ['src/data/entity/**/*.ts'],
    migrations: [],
    subscribers: ['src/data/subscribers/**/*.ts'],
  });

  export default AppDataSource;
  ```

  Con esto le estamos diciendo a TypeORM que inicie una base de datos con sqlite, ubicada en la ruta que especifique la variable de entorno `SQLITE3_DB_PATH`, y que las entidades estarán en archivos con extensión `.ts` dentro de la ruta `src/data/entity`. Además se indica el uso de `Subscribers` ([ver documentación](https://typeorm.io/#/listeners-and-subscribers)), que tengan extensión `.ts` dentro de la ruta `src/data/subscribers`.

Con esos pasos TypeORM se encargará de crear las tablas necesarias en la base de datos, y puedes comenzar a trabajar con ellos.

### Autenticación

Para la autenticación de usuario, y siguiendo las recomendaciones de seguridad básicas para el desarrollo web, se recomienda utilizar **JSON Web Tokens** (JWT) para la autenticación de usuarios, y **bcrypt** para la encriptación de contraseñas. JWT nos permite trabajar con autenticación por **token**, que es un concepto importante y cuyo flujo y funcionamiento resumiré en lo siguiente:

1. El usuario registrado puede iniciar sesión en la aplicación, enviando su nombre de usuario y contraseña.
2. El servidor verifica si las credenciales proporcionadas son correctas, y si lo son, genera un **token de sesión** para el usuario, con una duración determinada, y lo envía al cliente.
3. El cliente recibe el token, y lo almacena. Con ese token, el cliente puede acceder a las rutas de la API que requieran autenticación.
4. Cuando el cliente accede a una ruta que requiere autenticación, envía el token al servidor y este lo recibe, verificando si es válido, y si lo es, permite el acceso a la ruta.
5. Una vez el token expira, el cliente debe iniciar sesión nuevamente para obtener un nuevo token.

#### Encriptación de contraseña

Si te fijas, en el proceso sigue habiendo una *brecha de seguridad*, y es que el servidor sigue teniendo que verificar la contraseña del usuario. Si la contraseña está guardada en la base de datos como texto plano, se expone a potenciales vulnerabilidades. Para resolver esto, al momento de registrar un usuario, se debe encriptar la contraseña, y guardarla en la base de datos encriptada. De esta forma, cuando el usuario inicie sesión, se encripta la contraseña ingresada, y se compara con la contraseña encriptada guardada en la base de datos. Para esto, se recomienda utilizar **bcrypt**.

#### JWT

**JSON Web Token** (JWT) es un estándar abierto basado en JSON, que define un formato compacto y autocontenido para la transmisión segura de información entre partes como un objeto JSON. Este estándar se utiliza para la autenticación de usuarios, y se basa en el uso de tokens para la autenticación. Puedes revisar la [documentación de JWT](https://jwt.io/introduction) para más información.

Este estándar nos permite generar un token seguro y encriptado, que contiene información del usuario, y que puede ser utilizado para autenticar al usuario en la aplicación. El token puede ser decodificado por el servidor, recibiendo toda la información del usuario en formato JSON, ampliamente conocido y utilizado.

### Variables de entorno

Una buena práctica en términos de desarrollo web es el uso de **variables de entorno**, que como su nombre lo indica, son **variables** (tal como en los lenguajes de programación) que están disponibles en el **entorno de ejecución** del programa, y que por lo tanto, son accesibles dentro de él. El uso de estas permite:

- **Ocultar información sensible:** Algunas variables de entorno pueden contener información sensible, como contraseñas, tokens, claves, etc. Al estar en el entorno de ejecución, no es necesario que estén en el código fuente, y por lo tanto, no se exponen a potenciales vulnerabilidades.
- **Facilitar el desarrollo y despliegue:** Al estar en el entorno de ejecución, no es necesario cambiar el código fuente de la aplicación para cambiar los valores de las variables de entorno. Esto facilita el desarrollo y despliegue de la aplicación, ya que solo se debe cambiar el valor de las variables de entorno, y no el código fuente.

En este ejemplo, se hace uso de variables de entorno. Las variables de entorno están dentro del archivo `.env` en la raíz del proyecto, y contiene lo siguiente:

```env
NOMBRE_VARIABLE="DATO DE LA VARIABLE"
VARIABLE_NUMERICA=10 # También se puede dar un valor numérico
# También se puede comentar

EXPRESS_PORT=4500
SQLITE3_DB_PATH="src/data/database/db.sqlite"
JWT_SECRET_KEY="kZ8uVEd&jncG2qN@3wsTp7%DQbRrBUMHJxhgCv?+4W5tzFf9my"
```

En este ejemplo, hay distintas variables, y se muestra que incluso se puede comentar. Para acceder a las variables de entorno, se debe utilizar el paquete `dotenv`, que ya está instalado en el proyecto. Su uso se resume en lo siguiente:

1. Se carga el paquete `dotenv` en la raíz del proyecto, para poder acceder a él en cualquier parte.
2. Ya se pueden llamar variables de entorno. Para llamarlas, se hace de la siguiente manera:

  ```bash
  process.env.NOMBRE_VARIABLE
  ```
  
  Por ejemplo, si en el código tengo lo siguiente:

  ```ts
  console.log(process.env.NOMBRE_VARIABLE);
  ```

  Tendré como salida:

  ```bash
  DATO DE LA VARIABLE
  ```

* * *

[node-badge]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=flat
[node-web]: https://nodejs.org/es/
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
[doc-project-gist]: https://gist.github.com/sebaignacioo/ed382806851cc197fe39369c6a4f7ba9#file-backend-md
