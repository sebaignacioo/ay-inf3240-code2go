import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

export interface CustomRequest extends Request {
  token: { id: string; username: string; rol: string };
}

function authGuard(req: Request, res: Response, next: NextFunction): void {
  if (!req.header('authorization')) {
    res.status(401).send({
      message: 'Error: No se ha recibido el token de autenticación',
    });
    return;
  }
  const token = req.header('authorization').replace('Bearer ', '');
  try {
    const decoded: { id: string; username: string; rol: string } = jwt.verify(
      token,
      SECRET_KEY,
    ) as { id: string; username: string; rol: string };
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      message: 'Error: Token de autenticación inválido',
    });
    return;
  }
}

function adminGuard(req: Request, res: Response, next: NextFunction): void {
  const token = (req as CustomRequest).token;

  if (token.rol !== 'admin') {
    res.status(403).send({
      message: 'Error: No tienes permisos de administrador',
    });
    return;
  }
  next();
}

function mismoUserGuard(req: Request, res: Response, next: NextFunction): void {
  const { username } = req.params;
  const token = (req as CustomRequest).token;
  if (token.rol !== 'admin' && token.username !== username) {
    res.status(403).send({
      message: 'Error: No tienes permisos para acceder a este recurso',
    });
    return;
  }
  next();
}

export default {
  authGuard,
  adminGuard,
  mismoUserGuard,
};
