import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Bloque } from './Bloque';
import { Perfil } from './Perfil';

@Entity()
export class Like {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @ManyToOne(() => Bloque, (bloque) => bloque.likes)
  bloque: Bloque;

  @ManyToOne(() => Perfil, (perfil) => perfil.likes)
  perfil: Perfil;
}
