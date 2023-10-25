import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Perfil } from './Perfil';
import { Bloque } from './Bloque';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column({ type: 'text', length: 200 })
  comentario: string;

  @ManyToOne(() => Perfil, (perfil) => perfil.comentarios)
  perfil: Perfil;

  @ManyToOne(() => Bloque, (bloque) => bloque.comentarios)
  bloque: Bloque;
}
