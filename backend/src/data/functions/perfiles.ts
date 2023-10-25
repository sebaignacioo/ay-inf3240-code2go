import AppDataSource from '..';

import { Perfil } from '../entity/Perfil';

export const perfilesRepo = AppDataSource.getRepository(Perfil);
