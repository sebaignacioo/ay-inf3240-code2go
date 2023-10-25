import AppDataSource from '..';

import { Comentario } from '../entity/Comentario';

export const comentariosRepo = AppDataSource.getRepository(Comentario);
