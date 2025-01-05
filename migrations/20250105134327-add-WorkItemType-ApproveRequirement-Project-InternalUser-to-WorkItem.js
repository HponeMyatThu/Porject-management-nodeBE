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
    await queryInterface.addColumn('WorkItems', 'workItemTypeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'WorkItemTypes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('WorkItems', 'approveRequirementId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ApproveRequirements',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('WorkItems', 'projectId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('WorkItems', 'internalUserId', {
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
    await queryInterface.removeColumn('WorkItems', 'workItemTypeId');
    await queryInterface.removeColumn('WorkItems', 'approveRequirementId');
    await queryInterface.removeColumn('WorkItems', 'projectId');
    await queryInterface.removeColumn('WorkItems', 'internalUserId');
  },
};
