# Proyecto de desarrollo web

**Consultora PUCV-WebDev** <br />
**Proyecto:** Sitio web Code2Go <br />
**Área:** Backend

* * *

<!-- omit in toc -->
## Índice

- [Descripción](#descripción)
  - [Plazos](#plazos)
- [Requerimientos](#requerimientos)
- [Modelamiento de datos](#modelamiento-de-datos)
  - [Diagrama](#diagrama)
  - [Entidades de TypeORM](#entidades-de-typeorm)
- [API](#api)
  - [Resumen de la API](#resumen-de-la-api)
  - [Estructura de archivos](#estructura-de-archivos)
  - [Detalle de rutas](#detalle-de-rutas)
    - [Ruta `/auth`](#ruta-auth)
    - [Ruta `/usuarios`](#ruta-usuarios)
    - [Ruta `/perfiles`](#ruta-perfiles)
    - [Ruta `/bloques`](#ruta-bloques)
    - [Ruta `/comentarios`](#ruta-comentarios)
    - [Ruta `/likes`](#ruta-likes)

* * *

## Descripción

Proyecto de desarrollo web fullstack (backend y frontend) para una plataforma llamada "*code2go*", que busca permitir a los usuarios compartir bloques de código en línea, ya sea para uso personal, o para compartir con otros usuarios. Los bloques de código poseen las siguientes caracteristicas:

- **Visibilidad:** Pueden ser públicos (es decir, que lo pueda ver cualquier persona), o privados (sólo el usuario que lo creó, o aquellos que el mismo autorice, pueden verlo).
- **Multilenguaje:** Los bloques de código pueden ser escritos en cualquier lenguaje de programación.
- **Interacciones:** Los usuarios pueden comentar los bloques de código, y darle like a los bloques que les gusten.
- **Perfil:** Cada usuario tendrá un perfil, donde se mostrarán sus bloques de código, sus interacciones y datos públicos de interés.

Al manejar algunos datos de los usuarios, es primordial que la aplicación cumpla con los estándares de seguridad necesarios para proteger la información de los usuarios, y evitar que terceros puedan acceder a ella.

Usted ha sido contratado para integrar el equipo de **backend** para el desarrollo de esta aplicación. Debe continuar el desarrollo de la API, siguiendo las especificaciones de este documento, y tomando como base el código ya existente.

### Plazos

> Recuerde revisar el área de **backend**.

| Fecha límite | Descripción |
| ------------ | ----------- |
| 01 de septiembre de 2023 | Comienzo del desarrollo fullstack |
| 05 de septiembre de 2023 | Reunión de requerimientos |
| 25 de septiembre de 2023 | Comienzo de desarrollo frontend |
| 31 de octubre de 2023 | PLAZO FINAL ENTREGA FRONTEND |
| 08 de septiembre de 2023 | Comienzo de desarrollo backend |
| 13 de noviembre de 2023 | **PLAZO FINAL ENTREGA BACKEND** |
| 08 de noviembre de 2023 | Comienzo de testing |
| 15 de noviembre de 2023 | Testing backend |
| 15 al 18 de noviembre de 2023 | Despliegue de aplicación completa |

* * *

## Requerimientos

| Requerimiento      | Descripción                 | Estado         | Comentarios adicionales          |
| ------------ | ------------------------------- | -------------- | -------------------------------- |
| REQ-01 | Las contraseñas en la base de datos no deben ser guardadas como texto plano. | `✅ Listo!` | Las contraseñas se encriptan usando la librería `bcrypt` |
| REQ-02 | La gestión de sesiones de usuario debe cumplir con los mejores estándares de seguridad. | `✅ Listo!` | Las sesiones son gestionadas usando la librería `jsonwebtoken` |
| REQ-03 | Las rutas de la API deben estar protegidas, según el rol que tenga el usuario autenticado, o para las rutas públicas (es decir, sin autenticación) | `🕣 En desarrollo` | **Guards:** Las rutas `auth` y `usuarios` aplican guards para verificar autenticación, y si el usuario es `admin`. |
| REQ-04 | Se deben aplicar estándares de seguridad en el desarrollo de la solución. | `✅ Listo!` | Se han utilizado variables de entorno para proteger información sensible, además del uso de `bcrypt` y `jsonwebtoken`. |
| REQ-05 | La API debe proveer de las rutas necesarias para que la app interactúe con la base de datos | `🕣 En desarrollo` | No hay comentarios adicionales. |

* * *

## Modelamiento de datos

Para la implementación final de la aplicación, se utilizará `postgresql` en su última versión disponible. Sin embargo, para efectos de desarrollo, se utilizará `sqlite3` como base de datos, ya que es más fácil de configurar, y no requiere de instalación adicional.

Dado a que se utilizarán 2 bases de datos distintas, una para desarrollo y otra para producción, se ha optado por la utilización de un ORM (Object-Relational Mapping) para facilitar el desarrollo, y evitar problemas de compatibilidad entre bases de datos. Para este proyecto, se utilizará `typeorm`, que es un ORM que permite trabajar con distintas bases de datos, y que además es compatible con `typescript`. Puedes ver la documentación de `typeorm` en el siguiente enlace: [https://typeorm.io/](https://typeorm.io/).

### Diagrama

<img src="https://sgarciad.s3.us-east-1.amazonaws.com/ayudantias/db.sqlite.png" alt="Diagrama BD Code2Go" width="90%"></img>

### Entidades de TypeORM

| Entidad      | Ruta de archivo                 | Estado         | Comentarios adicionales          |
| ------------ | ------------------------------- | -------------- | -------------------------------- |
| `Usuario`    | `src/data/entity/Usuario.ts`    | `✅ Listo!`     | Se creó un subscriber (ruta `src/data/subscribers/UsuarioSubscriber.ts`) para encriptar contraseña, y para generar nuevo perfil al momento de crear un nuevo usuario.  |
| `Perfil`     | `src/data/entity/Perfil.ts`     | `⏳ En proceso` | Falta definir sus atributos finales. |
| `Bloque`     | `src/data/entity/Bloque.ts`     | `✅ Listo!`     | No hay comentarios adicionales.  |
| `Comentario` | `src/data/entity/Comentario.ts` | `✅ Listo!`     | No hay comentarios adicionales.  |
| `Like`       | `src/data/entity/Like.ts`       | `✅ Listo!`     | No hay comentarios adicionales.  |

* * *

## API

### Resumen de la API

Para el desarrollo de la API, se consideraron las siguientes tecnologías:

- **Node.js:** Entorno de ejecución de JavaScript.
- **Express.js:** Framework para el desarrollo de la API.
- **TypeScript:** Lenguaje de programación tipado, que permite trabajar con JavaScript.
- **SQLite:** Base de datos para desarrollo.

La aplicación de express se encuentra en el archivo `src/api/app.ts`, y es el punto de entrada de la aplicación. En este archivo se configuran los middlewares, las rutas, y se inicia el servidor. Los middlewares se encuentran en el archivo `src/api/middlewares.ts`, y las rutas en el archivo `src/api/routes.ts`.

Cada ruta de la API debe ir en una carpeta separada, con su nombre, dentro de `src`, y la estructura de cada carpeta debe ser la siguiente:

```
.
└── src/
    └── api/
        └── ruta  # Carpeta ruta de API '/ruta'
            ├── controllers.ts  # Controladores de la ruta
            └── routes.ts       # Configuración de la ruta en express
```

- **Controladores:** Se encuentran en el archivo `controllers.ts`, y son los encargados de manejar las peticiones HTTP, y de llamar a las funciones necesarias para obtener los datos desde la base de datos. Poseen las validaciones necesarias para verificar que los datos ingresados por el usuario sean correctos, y controla el proceso de obtención y envío de datos.
- **Rutas:** Se encuentran en el archivo `routes.ts`, y son las encargadas de definir las rutas de la API, y de llamar a los controladores correspondientes. Utiliza `Express.Router` para definir las rutas, y llama a los controladores necesarios para cada ruta.

Además, en la raíz de `src/api`, se encuentran los archivos `functions.ts` y `middlewares.ts`, que contienen funciones auxiliares, y middlewares de la API, respectivamente.

- **Funciones auxiliares:** Se encuentran en el archivo `functions.ts`, y son funciones que pueden ser utilizadas por los controladores, para realizar tareas repetitivas. Puede utilizar las funciones que ya existen, y/o crear las que necesite.
- **Middlewares:** Se encuentran en el archivo `middlewares.ts`, y son funciones que se ejecutan antes de que se ejecute el controlador de una ruta. Puede utilizar los middlewares que ya existen, y/o crear los que necesite. Puede revisar más acerca del desarrollo de middlewares en la [documentación de express](https://expressjs.com/es/guide/using-middleware.html), o en la guía que está [haciendo click aquí](https://medium.com/@aarnlpezsosa/middleware-en-express-js-5ef947d668b).

### Estructura de archivos

```
.
├── src/
│   ├── api/
│   │   ├── ...rutas        # Carpetas: Una por cada ruta de la API
│   │   ├── app.ts          # Aplicación de express.js
│   │   ├── functions.ts    # Funciones auxiliares
│   │   ├── middlewares.ts  # Middlewares de la API
│   │   └── routes.ts       # Rutas de la API
│   ├── data/
│   │   ├── database     # Donde se almacena la base de datos
│   │   │   └── db.sqlite  # Base de datos SQLite
│   │   ├── entity       # Entidades de TypeORM
│   │   ├── functions    # Funciones auxiliares para los modelos
│   │   ├── migration    # Migraciones de TypeORM
│   │   ├── subscribers  # Subscribers de TypeORM
│   │   └── index.ts     # Conexión a la base de datos con TypeORM
│   └── main.ts       # Punto de entrada de la aplicación
├── .env           # Variables de entorno
├── package.json   # Archivo de configuración de npm
├── tsconfig.json  # Archivo de configuración de TypeScript
├── BACKEND.md     # Este archivo
└── README.md      # Archivo README
```

### Detalle de rutas

Cada ruta tiene las siguientes descripciones:

- **Tipo:** Tipo de petición HTTP que acepta la ruta.
- **Ruta:** Ruta de la API.
- **Descripción:** Breve descripción de la funcionalidad de la ruta.
- **Restricciones de acceso:** Restricciones de acceso a la ruta, según el rol del usuario autenticado.
- **Estado:** Estado de desarrollo de la ruta.

#### Ruta `/auth`

> Ruta que permite la autenticación de usuarios.

| Tipo   | Ruta              | Descripción                                    | Restricciones de acceso                          | Estado     |
| ------ | ----------------- | ---------------------------------------------- | ------------------------------------------------ | ---------- |
| `POST` | `/iniciar-sesion` | Permite iniciar sesión a un usuario existente. | **Público:** La ruta debe ser de acceso público. | `✅ Listo!` |
| `POST` | `/crear-cuenta`   | Permite crear una nueva cuenta de usuario.     | **Público:** La ruta debe ser de acceso público. | `✅ Listo!` |

#### Ruta `/usuarios`

> Ruta que permite la gestión de los usuarios.

| Tipo  | Ruta | Descripción | Restricciones de acceso                               | Estado            |
| ----- | ---- | ----------- | ----------------------------------------------------- | ----------------- |
| `GET`    | `/`                | Permite obtener todos los usuarios.                           | **Admin:** Solo accesible para administradores.                                                                  | `✅ Listo!` |
| `GET`    | `/:username`       | Permite obtener un usuario según su username.                 | <ul><li>**Mismo usuario:** Solo a su mismo usuario.</li><li>**Admin:** Todos los usuarios registrados.</li></ul> | `✅ Listo!` |
| `PUT`    | `/:username`       | Permite actualizar el email o contraseña del usuario.         | <ul><li>**Mismo usuario:** Solo a su mismo usuario.</li><li>**Admin:** Todos los usuarios registrados.</li></ul> | `✅ Listo!` |
| `POST`   | `/admin/:username` | Permite cambiar el rol de un usuario, de `usuario` a `admin`. | **Admin:** Solo accesible para administradores.                                                                  | `✅ Listo!` |
| `DELETE` | `/:username`       | Permite eliminar un usuario de la base de datos.              | <ul><li>**Mismo usuario:** Solo a su mismo usuario.</li><li>**Admin:** Todos los usuarios registrados.</li></ul> | `✅ Listo!` |

#### Ruta `/perfiles`

> Ruta que permite la gestión de los bloques de código.

| Tipo  | Ruta | Descripción | Restricciones de acceso                               | Estado            |
| ----- | ---- | ----------- | ----------------------------------------------------- | ----------------- |
| `GET` | `/`  | Permite obtener todos los perfiles de usuario. | **Admin:** Todos los perfiles de la base de datos. | `✅ Listo!` |
| `GET` | `/:username`  | Permite obtener el perfil de un usuario en específico. | **Público:** La ruta debe ser de acceso público. | `✅ Listo!` |
| `PUT` | `/:username`  | Permite actualizar el perfil de un usuario en específico. | <ul><li>**Mismo usuario:** Solo a su mismo usuario.</li><li>**Admin:** Todos los perfiles de usuario.</li></ul> | `✅ Listo!` |
| `DELETE` | `/:username`  | Permite eliminar el perfil de un usuario en específico. | <ul><li>**Mismo usuario:** Solo a su mismo usuario.</li><li>**Admin:** Todos los perfiles de usuario.</li></ul> | `✅ Listo!` |

#### Ruta `/bloques`

> Ruta que permite la gestión de los bloques de código.

| Tipo  | Ruta | Descripción | Restricciones de acceso                               | Estado            |
| ----- | ---- | ----------- | ----------------------------------------------------- | ----------------- |
| `GET` | `/`  | Permite obtener todos los bloques de código. | <ul><li>**Público:** Todos los bloques de código con visibilidad pública.</li><li>**Mismo usuario:** Todos los bloques de código con visibilidad pública, sus bloques de código propios, y los bloques de código de terceros a los que tiene acceso.</li><li>**Admin:** Todos los bloques de código, públicos y privados.</li></ul> | `🔴 Por comenzar` |
| `GET` | `/usuario/:username`  | Permite obtener todos los bloques de código creados por el usuario con nombre de usuario `username`. | <ul><li>**Público:** Sólo si el bloque es público.</li><li>**Mismo usuario:** Todos sus bloques de código, públicos y privados.</li><li>**Admin:** Todos los bloques de código, públicos y privados.</li></ul> | `🔴 Por comenzar` |
| `GET` | `/:idBloque`  | Permite obtener un bloque de código según su ID. | <ul><li>**Público:** Sólo si el bloque es público.</li><li>**Mismo usuario:** Todos los bloques de código con visibilidad pública, sus bloques de código propios, y los bloques de código de terceros a los que tiene acceso.</li><li>**Admin:** Todos los bloques de código, públicos y privados.</li></ul> | `🔴 Por comenzar` |
| `POST` | `/`  | Permite crear un nuevo bloque de código. | <ul><li>**Público:** No puede crear nuevos bloques de código.</li><li>**Usuario común:** Puede crear bloques nuevos.</li><li>**Admin:** No puede crear nuevos bloques de código, solo gestionarlos.</li></ul> | `🔴 Por comenzar` |
| `PUT` | `/:idBloque`  | Permite actualizar un bloque de código. | <ul><li>**Usuario común:** Puede actualizar sus propios bloques de código.</li><li>**Admin:** Puede actualizar todos los bloques de código.</li></ul> | `🔴 Por comenzar` |
| `DELETE` | `/:idBloque`  | Permite eliminar un bloque de código. | <ul><li>**Usuario común:** Puede eliminar sus propios bloques de código.</li><li>**Admin:** Puede eliminar todos los bloques de código.</li></ul> | `🔴 Por comenzar` |

#### Ruta `/comentarios`

> Ruta que permite la gestión de comentarios.

| Tipo  | Ruta | Descripción | Restricciones de acceso                               | Estado            |
| ----- | ---- | ----------- | ----------------------------------------------------- | ----------------- |
| `GET`    | `/:idComentario`     | Obtener un comentario según su ID                         | <ul><li>**Público:** Sólo si el bloque donde está el comentario es público.</li><li>**Mismo usuario:** Todos sus comentarios.</li><li>**Admin:** Todos los comentarios de la base de datos.</li></ul>                                                                    | `🔴 Por comenzar` |
| `GET`    | `/usuario/:username` | Obtener todos los comentarios que ha realizado un usuario | <ul><li>**Público:** Comentarios hechos en bloques públicos.</li><li>**Mismo usuario:** Comentarios hechos del mismo usuario, en bloques públicos, propios, o aquellos a los que tenga acceso.</li><li>**Admin:** Todos los comentarios, públicos y privados.</li></ul>  | `🔴 Por comenzar` |
| `GET`    | `/bloque/:idBloque`  | Obtener todos los comentarios de un bloque                | <ul><li>**Público:** Todos los comentarios, sólo si el bloque es público.</li><li>**Mismo usuario:** Todos los comentarios del bloque.</li><li>**Admin:** Todos los comentarios del bloque.</li></ul>                                                                    | `🔴 Por comenzar` |
| `POST`   | `/bloque/:idBloque`  | Agregar comentario a un bloque                            | <ul><li>**Público:** Todos los comentarios, sólo si el bloque es público.</li><li>**Mismo usuario:** Todos los comentarios del bloque.</li><li>**Admin:** Todos los comentarios del bloque.</li></ul>                                                                    | `🔴 Por comenzar` |
| `PUT`    | `/:idComentario`     | Actualizar comentario                                     | <ul><li>**Público:** Sin acceso.</li><li>**Mismo usuario:** Todos los comentarios que haya realizado el usuario.</li><li>**Admin:** Todos los comentarios.</li></ul>                                                                                                     | `🔴 Por comenzar` |
| `DELETE` | `/:idComentario`     | Eliminar comentario                                       | <ul><li>**Público:** Sin acceso.</li><li>**Usuario autor del comentario:** Todos los comentarios que haya realizado.</li><li>**Usuario autor del bloque:** Todos los comentarios que hayan en bloques de su autoría.</li><li>**Admin:** Todos los comentarios.</li></ul> | `🔴 Por comenzar` |

#### Ruta `/likes`

> Ruta que permite la gestión de los likes.

| Tipo  | Ruta | Descripción | Restricciones de acceso                               | Estado            |
| ----- | ---- | ----------- | ----------------------------------------------------- | ----------------- |
| `GET` | `/usuario/:username`  | Permite obtener todos los likes de un usuario. | <ul><li>**Público:** Sin acceso.</li><li>**Mismo usuario:** Todos los likes que haya realizado.</li><li>**Admin:** Todos los likes.</li></ul> | `🔴 Por comenzar` |
| `GET` | `/bloques/:idBloque`  | Permite obtener todos los likes de un bloque de código. | <ul><li>**Público:** Sólo los likes de bloques de código públicos.</li><li>**Autor del bloque de código:** Todos los likes.</li><li>**Otro usuario:** Si el bloque es público, o tiene acceso a él.</li><li>**Admin:** Todos los likes.</li></ul> | `🔴 Por comenzar` |
| `POST` | `/bloques/:idBloque`  | Permite dar like a un bloque de código. | <ul><li>**Público:** No puede dar like.</li><li>**Usuario autenticado:** Puede dar like si el bloque es público, o si tiene acceso a él.</li><li>**Admin:** No puede dar likes.</li></ul> | `🔴 Por comenzar` |
| `DELETE` | `/:idLike`  | Permite eliminar un like. | <ul><li>**Usuario autenticado:** Puede quitar sus propios likes.</li><li>**Admin:** Todos los likes.</li></ul> | `🔴 Por comenzar` |

* * *
