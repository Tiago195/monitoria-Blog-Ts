import CategoryModel from '../database/models/Category';
import { ICategory } from '../interfaces/ICategory.interface';

export default class Category {
  public async create(category: ICategory) {
    return CategoryModel.create(category);
  }

  public async getAll() {
    return CategoryModel.findAll();
  }
}
