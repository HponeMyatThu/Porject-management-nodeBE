'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProject.belongsTo(models.JobType, {
        foreignKey: 'jobTypeId',
        as: 'jobTypes',
      });
      UserProject.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'projects',
      });
      UserProject.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });
    }
  }
  UserProject.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'UserProject',
    },
  );
  return UserProject;
};
