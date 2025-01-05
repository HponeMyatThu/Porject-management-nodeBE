'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobType.hasMany(models.InternalUser, {
        foreignKey: 'jobTypeId',
        as: 'internalUsers',
      });
      JobType.hasMany(models.UserProject, {
        foreignKey: 'jobTypeId',
        as: 'userProjects',
      });
    }
  }
  JobType.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'JobType',
    },
  );
  return JobType;
};
