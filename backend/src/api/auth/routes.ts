import express from 'express';

import authControllers from './controllers';

const authRoutes = express.Router();

authRoutes.post('/crear-cuenta', authControllers.crearCuenta);
authRoutes.post('/iniciar-sesion', authControllers.iniciarSesion);

export default authRoutes;
