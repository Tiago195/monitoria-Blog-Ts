import { DataTypes, Model } from 'sequelize';

import db from './index';

class Category extends Model { }

Category.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Category',
  tableName: 'categories',
  sequelize: db,
});

export default Category;
