import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Bloque } from './Bloque';
import { Like } from './Like';
import { Comentario } from './Comentario';

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column({ nullable: true })
  titulo?: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column({ nullable: true })
  fecha_nacimiento?: Date;

  @Column({ nullable: true })
  pais?: string;

  @OneToMany(() => Bloque, (bloque) => bloque.perfil)
  bloques: Bloque[];

  @ManyToMany(() => Bloque, (bloque) => bloque.perfilesAdmitidos)
  bloquesAdmitidos: Bloque[];

  @OneToMany(() => Like, (like) => like.perfil)
  likes: Like[];

  @OneToMany(() => Comentario, (comentario) => comentario.perfil)
  comentarios: Comentario[];
}
