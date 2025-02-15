'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkItem.belongsTo(models.WorkItemType, {
        foreignKey: 'workItemTypeId',
        as: 'workItemTypes',
      });
      WorkItem.belongsTo(models.ApproveRequirements, {
        foreignKey: 'approveRequirementId',
        as: 'approveRequirements',
      });
      WorkItem.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'projects',
      });
      WorkItem.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });

      WorkItem.hasMany(models.comment, {
        foreignKey: 'workItemId',
        as: 'comments',
      });
      WorkItem.hasMany(models.Attachment, {
        foreignKey: 'workItemId',
        as: 'attachments',
      });
    }
  }
  WorkItem.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'WorkItem',
    },
  );
  return WorkItem;
};
