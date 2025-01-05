'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('BuildLists', 'repositoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Repositories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('BuildLists', 'internalUserId',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'InternalUsers',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('BuildLists', 'repositoryId');
    await queryInterface.removeColumn('BuildLists', 'internalUserId');
  },
};
