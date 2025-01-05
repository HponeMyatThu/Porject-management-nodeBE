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
    await queryInterface.addColumn('UserProjects', 'jobTypeId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'JobTypes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('UserProjects', 'projectId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('UserProjects', 'internalUserId', {
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
    await queryInterface.removeColumn('UserProjects', 'jobTypeId');
    await queryInterface.removeColumn('UserProjects', 'projectId');
    await queryInterface.removeColumn('UserProjects', 'internalUserId');
  },
};
