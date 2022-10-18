import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, _Sequelize: typeof DataTypes) => {
    await queryInterface.bulkInsert(
      'posts_categories',
      [
        {
          postId: 1,
          categoryId: 1,
        },
        {
          postId: 2,
          categoryId: 2,
        },
      ],
    );
  },

  down: async (queryInterface: QueryInterface, _Sequelize: typeof DataTypes) => {
    await queryInterface.bulkDelete('posts_categories', {});
  },
};
