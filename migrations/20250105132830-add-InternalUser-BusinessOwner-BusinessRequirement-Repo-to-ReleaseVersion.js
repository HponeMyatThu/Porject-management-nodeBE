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
    await queryInterface.addColumn('ReleaseVersions', 'businessOwnerId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'BusinessOwners',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('ReleaseVersions', 'repositoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Repositories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn('ReleaseVersions', 'internalUserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'InternalUsers',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addColumn(
      'ReleaseVersions',
      'businessRequirementRawId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BusinessRequirementRaws',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('ReleaseVersions', 'businessOwnerId');
    await queryInterface.removeColumn('ReleaseVersions', 'repositoryId');
    await queryInterface.removeColumn('ReleaseVersions', 'internalUserId');
    await queryInterface.removeColumn(
      'ReleaseVersions',
      'businessRequirementRawId',
    );
  },
};
