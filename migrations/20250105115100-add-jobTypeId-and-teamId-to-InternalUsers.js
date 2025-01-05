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
    await queryInterface.addColumn('InternalUsers', 'jobTypeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'JobTypes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addColumn("InternalUsers", "teamId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Teams',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('InternalUsers', 'jobTypeId');
    await queryInterface.removeColumn('InternalUsers', 'teamId');
  },
};
