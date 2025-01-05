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
    await queryInterface.addColumn('ApproveRequirements', 'internalUserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'InternalUsers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn(
      'ApproveRequirements',
      'businessRequirementRawId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BusinessRequirementRaws',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    );
    await queryInterface.addColumn('ApproveRequirements', 'businessOwnerId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'BusinessOwners',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('ApproveRequirements', 'internalUserId');
    await queryInterface.removeColumn(
      'ApproveRequirements',
      'businessRequirementRawId',
    );
    await queryInterface.removeColumn('ApproveRequirements', 'businessOwnerId');
  },
};
