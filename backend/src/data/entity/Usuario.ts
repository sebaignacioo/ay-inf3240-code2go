import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
  PrimaryColumn,
  Generated,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Perfil } from './Perfil';

@Entity()
@Unique(['username', 'id', 'email'])
export class Usuario {
  @PrimaryColumn()
  username: string;

  @Column()
  @Generated('uuid')
  id: string;

  @Column({ type: 'text', length: 80 })
  email: string;

  @Column({ type: 'text', length: 20 })
  password: string;

  @Column({ type: 'text', length: 20 })
  rol: string;

  @OneToOne(() => Perfil)
  @JoinColumn()
  perfil: Perfil;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}
