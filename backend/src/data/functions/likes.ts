import AppDataSource from '..';

import { Like } from '../entity/Like';

export const likesRepo = AppDataSource.getRepository(Like);
