'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.BusinessOwner, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });
      Project.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'projects',
      });
      Project.belongsTo(models.Team, {
        foreignKey: 'teamId',
        as: 'projects',
      });

      Project.hasMany(models.UserProject, {
        foreignKey: 'projectId',
        as: 'userProjects',
      });
      Project.hasMany(models.Repository, {
        foreignKey: 'projectId',
        as:'repositories',
      });
      Project.hasMany(models.WorkItem, {
        foreignKey: 'projectId',
        as: 'workItems',
      });
    }
  }
  Project.init(
    {
      ProjectName: DataTypes.STRING,
      Description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Project',
    },
  );
  return Project;
};
