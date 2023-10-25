import 'dotenv/config';
import app from './api/app';

import AppDataSource from './data';
import { Usuario } from './data/entity/Usuario';

const PORT = process.env.EXPRESS_PORT ?? 3000;

const initializeAdminUser = async () => {
  const repo = AppDataSource.getRepository(Usuario);
  const admin = await repo.findOne({ where: { username: 'admin' } });
  if (!admin) {
    const usuario = repo.create({
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin123',
      rol: 'admin',
    });
    await repo.save(usuario);
  }
};

AppDataSource.initialize()
  .then(async () => {
    console.log('[✅] TypeORM fue cargado exitosamente!');
    await initializeAdminUser();
    try {
      app.listen(PORT, () => {
        console.log(`  -> [ℹ️ ] Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.log('[❌] Error al iniciar el servidor: ', error);
    }
  })
  .catch((error) => {
    console.log('[❌] Error al cargar TypeORM: ', error);
  });
