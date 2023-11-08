import express from 'express';

import middlewares from '../middlewares';
import perfilesControllers from './controllers';

const perfilesRoutes = express.Router();

perfilesRoutes.get(
  '/',
  middlewares.authGuard,
  middlewares.adminGuard,
  perfilesControllers.getAll,
);

perfilesRoutes.get('/:username', perfilesControllers.getOne);
perfilesRoutes.put(
  '/:username',
  middlewares.authGuard,
  middlewares.mismoUserGuard,
  perfilesControllers.update,
);
perfilesRoutes.delete(
  '/:username',
  middlewares.authGuard,
  middlewares.mismoUserGuard,
  perfilesControllers.remove,
);

export default perfilesRoutes;
