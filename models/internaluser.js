'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InternalUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InternalUser.belongsTo(models.JobType, {
        foreignKey: 'jobTypeId',
        as: 'jobType',
      });
      InternalUser.belongsTo(models.Team, {
        foreignKey: 'teamId',
        as: 'team',
      });

      InternalUser.hasMany(models.ApproveRequirements, {
        foreignKey: 'internalUserId',
        as: 'approveRequirements',
      });
      InternalUser.hasMany(models.Project, {
        foreignKey: 'internalUserId',
        as: 'projects',
      });
      InternalUser.hasMany(models.UserProject, {
        foreignKey: 'internalUserId',
        as: 'userProjects',
      });
      InternalUser.hasMany(models.BuildList, {
        foreignKey: 'internalUserId',
        as: 'buildLists',
      });
      InternalUser.hasMany(models.ReleaseVersion, {
        foreignKey: 'internalUserId',
        as: 'releaseVersions',
      });
      InternalUser.hasMany(models.WorkItem, {
        foreignKey: 'internalUserId',
        as: 'workItems',
      });
      InternalUser.hasMany(models.comment, {
        foreignKey: 'internalUserId',
        as: 'comments',
      });
      InternalUser.hasMany(models.Attachment, {
        foreignKey: 'internalUserId',
        as: 'attachments',
      });

    }
  }
  InternalUser.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      workingMail: DataTypes.STRING,
      serviceYear: DataTypes.NUMBER,
      startWorkingDate: DataTypes.DATE,
      currentlyWorking: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'InternalUser',
    },
  );
  return InternalUser;
};
