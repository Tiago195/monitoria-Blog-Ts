import { NextFunction, Request, Response } from 'express';

import CategoryService from '../services/Category.service';

export default class Category {
  private _service: CategoryService;

  constructor(service: CategoryService) {
    this._service = service;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const category = await this._service.create({ name });

      return res.status(201).json(category);
    } catch (error) {
      return next(error);
    }
  }
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this._service.getAll();

      return res.status(200).json(categories);
    } catch (error) {
      return next(error);
    }
  }
}
