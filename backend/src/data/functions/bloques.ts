import AppDataSource from '..';

import { Bloque } from '../entity/Bloque';

export const bloquesRepo = AppDataSource.getRepository(Bloque);
