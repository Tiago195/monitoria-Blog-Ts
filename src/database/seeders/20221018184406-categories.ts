import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, _Sequelize: typeof DataTypes) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: 1,
          name: 'Inovação',
        },
        {
          id: 2,
          name: 'Escola',
        },
      ],
    );
  },

  down: async (queryInterface: QueryInterface, _Sequelize: typeof DataTypes) => {
    await queryInterface.bulkDelete('categories', {});
  },
};
