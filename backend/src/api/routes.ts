import express from 'express';

import authRoutes from './auth/routes';
import comentariosRoutes from './comentarios/routes';
import likesRoutes from './likes/routes';
import perfilesRoutes from './perfiles/routes';
import usuariosRoutes from './usuarios/routes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/comentarios', comentariosRoutes);
router.use('/likes', likesRoutes);
router.use('/perfiles', perfilesRoutes);
router.use('/usuarios', usuariosRoutes);

router.use('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    message: 'La ruta solicitada no existe o no está disponible temporalmente',
  });
});

export default router;
