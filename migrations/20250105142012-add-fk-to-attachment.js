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
    await queryInterface.addColumn('Attachments', 'internalUserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'InternalUsers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Attachments', 'businessRequirementRawId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'BusinessRequirementRaws',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Attachments', 'approveRequirementId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'ApproveRequirements',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Attachments', 'workItemId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'WorkItems',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Attachments', 'commentId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'comments',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Attachments', 'internalUserId');
    await queryInterface.removeColumn(
      'Attachments',
      'businessRequirementRawId',
    );
    await queryInterface.removeColumn('Attachments', 'approveRequirementId');
    await queryInterface.removeColumn('Attachments', 'workItemId');
    await queryInterface.removeColumn('Attachments', 'commentId');
  },
};
