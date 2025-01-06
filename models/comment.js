'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });
      comment.belongsTo(models.ApproveRequirements, {
        foreignKey: 'approveRequirementId',
        as: 'approveRequirements',
      });
      comment.belongsTo(models.BusinessRequirementRaw, {
        foreignKey: 'businessRequirementRawId',
        as: 'businessRequirementRaws',
      });
      comment.belongsTo(models.WorkItem, {
        foreignKey: 'workItemId',
        as: 'workItems',
      });

      comment.hasMany(models.Attachment, {
        foreignKey: 'commentId',
        as: 'attachments',
      });
    }
  }
  comment.init(
    {
      content: DataTypes.STRING,
      Description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'comment',
    },
  );
  return comment;
};
