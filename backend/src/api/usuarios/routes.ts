import express from 'express';

import usuariosControllers from './controllers';
import middlewares from '../middlewares';

const usuariosRoutes = express.Router();

usuariosRoutes.use(middlewares.authGuard);
usuariosRoutes.use(middlewares.adminGuard);

usuariosRoutes.get('/', usuariosControllers.getAll);
usuariosRoutes.get('/:username', usuariosControllers.getOne);
usuariosRoutes.put('/:username', usuariosControllers.update);
usuariosRoutes.post('/admin/:username', usuariosControllers.hacerAdmin);
usuariosRoutes.delete('/:username', usuariosControllers.remove);

export default usuariosRoutes;
