import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { existeUsuario, usuariosRepo } from '../../data/functions/usuarios';
import { validateIn } from '../functions';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

async function crearCuenta(req: Request, res: Response): Promise<void> {
  if (await existeUsuario(req.body.username, req.body.email)) {
    res
      .status(400)
      .json({
        message: 'El usuario o el email ya se encuentran registrados',
      })
      .end();
    return;
  }

  if (!validateIn(req.body, ['username', 'email', 'password'])) {
    res.status(400).send({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }

  const { username, email, password } = req.body;

  if (await existeUsuario(username, email)) {
    res
      .status(400)
      .json({
        message: 'El usuario o el email ya se encuentran registrados',
      })
      .end();
    return;
  }

  const usuario = usuariosRepo.create({
    username,
    email,
    password,
    rol: 'usuario',
  });
  const {
    id: savedId,
    username: savedUsername,
    email: savedEmail,
    perfil: savedPerfil,
  } = await usuariosRepo.save(usuario);

  res.status(201).send({
    message: 'Usuario creado con éxito',
    usuario: {
      id: savedId,
      username: savedUsername,
      email: savedEmail,
      rol: 'usuario',
      idPerfil: savedPerfil?.id ?? null,
    },
  });
}

async function iniciarSesion(req: Request, res: Response): Promise<void> {
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(400).send({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const { username, password } = req.body;
  const usuario = await usuariosRepo.findOne({ where: { username } });
  if (!usuario) {
    res.status(404).send({
      message: 'El usuario no existe',
    });
    return;
  }
  if (!bcrypt.compareSync(password, usuario.password)) {
    res.status(401).send({
      message: 'Contraseña incorrecta',
    });
    return;
  }
  const token = jwt.sign(
    { id: usuario.id, username: usuario.username, rol: usuario.rol },
    SECRET_KEY,
    { expiresIn: '24h' },
  );

  res.status(200).send({
    message: 'Inicio de sesión correcto',
    token: {
      token,
      expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(),
    },
    usuario: {
      id: usuario.id,
      username: usuario.username,
      rol: usuario.rol,
    },
  });
}

export default {
  crearCuenta,
  iniciarSesion,
};
