import { Request, Response } from 'express';

import { usuariosRepo } from '../../data/functions/usuarios';
import { validateIn } from '../functions';

async function getOne(req: Request, res: Response) {
  if (!validateIn(req.params, ['username'])) {
    res
      .status(400)
      .json({
        message: 'Error: No se ha recibido el nombre de usuario',
      })
      .end();
    return;
  }

  const { username } = req.params;
  const foundedUser = await usuariosRepo.findOne({
    where: { username },
    relations: ['perfil'],
  });

  if (!foundedUser) {
    res
      .status(404)
      .json({
        message: `Error: No se ha encontrado el usuario con nombre de usuario ${username}`,
      })
      .end();
    return;
  }

  const { id, email, rol, perfil, ...restFounded } = foundedUser;

  res
    .status(200)
    .json({
      message: `Usuario con nombre de usuario ${username} encontrado`,
      usuario: {
        id,
        username,
        email,
        rol,
        perfil_id: perfil?.id ?? null,
      },
    })
    .end();
}

async function getAll(req: Request, res: Response) {
  const usuarios = await usuariosRepo.find({
    relations: ['perfil'],
  });

  res.status(200).json({
    message: `Se han encontrado ${usuarios.length} usuario/s`,
    usuarios: usuarios.map((usuario) => {
      const { id, username, email, rol, perfil } = usuario;
      return {
        id,
        username,
        email,
        rol,
        perfil_id: perfil.id,
      };
    }),
  });
}

async function update(req: Request, res: Response) {
  if (!validateIn(req.params, ['username'])) {
    res
      .status(400)
      .json({
        message: 'Error: No se ha recibido el nombre de usuario',
      })
      .end();
    return;
  }
  if (!validateIn(req.body, ['email', 'password'], true)) {
    res
      .status(400)
      .json({
        message: 'Error: No se han recibido datos válidos para actualizar',
      })
      .end();
    return;
  }

  const { username } = req.params;

  const foundedUser = await usuariosRepo.findOne({
    where: { username },
  });

  if (!foundedUser) {
    res
      .status(404)
      .json({
        message: `Error: No se ha encontrado el usuario con nombre de usuario ${username}`,
      })
      .end();
    return;
  }

  foundedUser.email = req.body.email ?? foundedUser.email;
  foundedUser.password = req.body.password ?? foundedUser.password;

  const updatedUser = await usuariosRepo.save(foundedUser);
  const { id, email, rol } = updatedUser;

  res
    .status(200)
    .json({
      message: `Usuario con nombre de usuario ${username} se ha actualizado correctamente.`,
      usuario_actualizado: {
        id,
        username,
        email,
        rol,
      },
    })
    .end();
}

async function remove(req: Request, res: Response) {
  if (!validateIn(req.params, ['username'])) {
    res
      .status(400)
      .json({
        message: 'Error: No se ha recibido el nombre de usuario',
      })
      .end();
    return;
  }
  const { username } = req.params;
  const usuario = await usuariosRepo.findOne({ where: { username } });

  if (!usuario) {
    res.status(404).json({
      message: `Error: No se ha encontrado el usuario con nombre de usuario ${username}`,
    });
    return;
  }

  usuario.deleted_at = new Date();
  const removedUser = await usuariosRepo.save(usuario);
  const { id, email, rol, perfil } = removedUser;
  res.status(200).json({
    message: `Usuario con nombre de usuario ${username} eliminado correctamente`,
    usuario_eliminado: {
      id,
      username,
      email,
      rol,
      perfil_id: perfil?.id ?? null,
    },
  });
}

async function hacerAdmin(req: Request, res: Response) {
  if (!validateIn(req.params, ['username'])) {
    res
      .status(400)
      .json({
        message: 'Error: No se ha recibido el nombre de usuario',
      })
      .end();
    return;
  }
  const { username } = req.params;
  const usuario = await usuariosRepo.findOne({
    where: { username },
    relations: ['perfil'],
  });

  if (!usuario) {
    res.status(404).json({
      message: `Error: No se ha encontrado el usuario con nombre de usuario ${username}`,
    });
    return;
  }

  usuario.rol = 'admin';
  const updatedUser = await usuariosRepo.save(usuario);
  const { id, email, rol, perfil } = updatedUser;
  res.status(200).json({
    message: `El usuario ${username} ha sido actualizado a administrador correctamente`,
    nuevo_usuario_admin: {
      id,
      username,
      email,
      rol,
      perfil_id: perfil?.id ?? null,
    },
  });
}

export default {
  getOne,
  getAll,
  update,
  remove,
  hacerAdmin,
};
