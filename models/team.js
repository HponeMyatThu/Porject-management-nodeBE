'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.InternalUser, {
        foreignKey: 'teamId',
        as: 'internalUsers',
      });
      Team.hasMany(models.Project, {
        foreignKey: 'teamId',
        as: 'projects',
      });
    }
  }
  Team.init(
    {
      TeamName: DataTypes.STRING,
      Description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      furtureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Team',
    },
  );
  return Team;
};
