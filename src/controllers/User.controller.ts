import { NextFunction, Request, Response } from 'express';

import { IUser } from '../interfaces/IUser.interface';
import UserService from '../services/User.service';

export default class User {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
    this.login = this.login.bind(this);
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email, password } = req.body;
      const token = await this._service.login({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        displayName, email, password, image,
      } = req.body;
      const token = await this._service.create({
        displayName, email, password, image,
      });

      return res.status(201).json({ token });
    } catch (error) {
      return next(error);
    }
  }
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this._service.getAll();

      return res.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  }
  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this._service.getById(id);

      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  }
}
