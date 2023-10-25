import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Perfil } from './Perfil';
import { Like } from './Like';
import { Comentario } from './Comentario';

@Entity()
export class Bloque {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column({ type: 'text', length: 100 })
  nombre: string;

  @Column({ type: 'text', length: 2500 })
  codigo: string;

  @Column({ type: 'text', length: 20 })
  lenguaje: string;

  @Column({ type: 'text', length: 500 })
  descripcion: string;

  @Column({ type: 'boolean', default: false })
  isPublic: boolean;

  @ManyToOne(() => Perfil, (perfil) => perfil.bloques)
  perfil: Perfil;

  @ManyToMany(() => Perfil, (perfil) => perfil.bloquesAdmitidos)
  perfilesAdmitidos: Perfil[];

  @OneToMany(() => Comentario, (comentario) => comentario.bloque)
  comentarios: Comentario[];

  @OneToMany(() => Like, (like) => like.bloque)
  likes: Like[];
}
