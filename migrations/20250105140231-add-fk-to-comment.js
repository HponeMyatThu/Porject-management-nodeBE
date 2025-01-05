'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = 'comments';

    const tableDefinition = await queryInterface.describeTable(tableName);

    if (!tableDefinition.internalUserId) {
      await queryInterface.addColumn(tableName, 'internalUserId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'InternalUsers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }

    if (!tableDefinition.approveRequirementId) {
      await queryInterface.addColumn(tableName, 'approveRequirementId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ApproveRequirements',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }

    if (!tableDefinition.businessRequirementRawId) {
      await queryInterface.addColumn(tableName, 'businessRequirementRawId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'BusinessRequirementRaws',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }

    if (!tableDefinition.workItemId) {
      await queryInterface.addColumn(tableName, 'workItemId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'WorkItems',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('comments', 'internalUserId');
    await queryInterface.removeColumn('comments', 'approveRequirementId');
    await queryInterface.removeColumn('comments', 'businessRequirementRawId');
    await queryInterface.removeColumn('comments', 'workItemId');
  },
};
