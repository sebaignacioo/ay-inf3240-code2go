import { Request, Response } from 'express';

import { usuariosRepo } from '../../data/functions/usuarios';
import { perfilesRepo } from '../../data/functions/perfiles';

async function getAll(req: Request, res: Response): Promise<void> {
  try {
    const perfiles = await perfilesRepo.find({
      relations: ['likes', 'bloques', 'comentarios'],
    });
    const conUsuarios = await Promise.all(
      perfiles.map(async (perfil) => ({
        username:
          (await usuariosRepo.findOne({ where: { perfil } }))?.username ??
          'No hay usuario asociado',
        ...perfil,
      })),
    );
    res.status(200).json(conUsuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req: Request, res: Response): Promise<void> {
  try {
    const { username } = req.params;
    const usuario = await usuariosRepo.findOne({
      where: { username },
      relations: ['perfil'],
    });
    if (!usuario) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    const perfil = await perfilesRepo.findOne({
      where: { id: usuario.perfil.id },
      relations: ['likes', 'bloques', 'comentarios'],
    });
    if (!perfil) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    const conUsuario = {
      username:
        (await usuariosRepo.findOne({ where: { perfil } }))?.username ??
        'No hay usuario asociado',
      ...perfil,
    };
    res.status(200).json(conUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req: Request, res: Response): Promise<void> {
  try {
    const { username } = req.params;
    const usuario = await usuariosRepo.findOne({
      where: { username },
      relations: ['perfil'],
    });
    if (!usuario) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    const perfil = await perfilesRepo.findOne({
      where: { id: usuario.perfil.id },
      relations: ['likes', 'bloques', 'comentarios'],
    });
    if (!perfil) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    perfil.titulo = req.body.titulo ?? perfil.titulo;
    perfil.descripcion = req.body.descripcion ?? perfil.descripcion;
    perfil.fecha_nacimiento =
      req.body.fecha_nacimiento ?? perfil.fecha_nacimiento;
    perfil.pais = req.body.pais ?? perfil.pais;
    const updated = await perfilesRepo.save(perfil);
    const conUsuario = {
      username:
        (await usuariosRepo.findOne({ where: { perfil } }))?.username ??
        'No hay usuario asociado',
      ...updated,
    };
    res.status(200).json(conUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { username } = req.params;
    const usuario = await usuariosRepo.findOne({
      where: { username },
      relations: ['perfil'],
    });
    if (!usuario) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    const perfil = await perfilesRepo.findOne({
      where: { id: usuario.perfil.id },
      relations: ['likes', 'bloques', 'comentarios'],
    });
    if (!perfil) {
      res.status(404).json({ error: 'Perfil no encontrado' });
      return;
    }
    const removed = await perfilesRepo.remove(perfil);
    const conUsuario = {
      username:
        (await usuariosRepo.findOne({ where: { perfil } }))?.username ??
        'No hay usuario asociado',
      ...removed,
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAll,
  getOne,
  update,
  remove,
};
