import { Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Bloque } from './Bloque';
import { Like } from './Like';
import { Comentario } from './Comentario';

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @OneToMany(() => Bloque, (bloque) => bloque.perfil)
  bloques: Bloque[];

  @ManyToMany(() => Bloque, (bloque) => bloque.perfilesAdmitidos)
  bloquesAdmitidos: Bloque[];

  @OneToMany(() => Like, (like) => like.perfil)
  likes: Like[];

  @OneToMany(() => Comentario, (comentario) => comentario.perfil)
  comentarios: Comentario[];
}
