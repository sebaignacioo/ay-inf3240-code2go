import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

import bcrypt from 'bcrypt';

import { Usuario } from '../entity/Usuario';
import { Perfil } from '../entity/Perfil';

@EventSubscriber()
export class UsuarioSubscriber implements EntitySubscriberInterface<Usuario> {
  listenTo() {
    return Usuario;
  }

  async beforeInsert(event: InsertEvent<Usuario>) {
    const { manager, entity: usuario } = event;
    const perfilRepository = manager.getRepository(Perfil);
    const perfil = new Perfil();

    perfil.bloques = [];
    perfil.bloquesAdmitidos = [];
    perfil.likes = [];
    perfil.comentarios = [];

    await perfilRepository.save(perfil);
    usuario.perfil = perfil;
    usuario.password = await bcrypt.hash(usuario.password, 10);
  }

  async beforeUpdate(event: UpdateEvent<Usuario>) {
    const { updatedColumns, entity: usuario } = event;
    if (updatedColumns.map((col) => col.propertyName).includes('password'))
      usuario.password = await bcrypt.hash(usuario.password, 10);
  }
}
