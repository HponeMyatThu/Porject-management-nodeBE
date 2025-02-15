'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApproveRequirements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApproveRequirements.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUser',
      });
      ApproveRequirements.belongsTo(models.BusinessRequirementRaw, {
        foreignKey: 'businessRequirementRawId',
        as: 'BusinessRequirementRaws',
      });
      ApproveRequirements.belongsTo(models.BusinessOwner, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });

      ApproveRequirements.hasMany(models.WorkItem, {
        foreignKey: 'approveRequirementId',
        as: 'workItems',
      });
      ApproveRequirements.hasMany(models.comment, {
        foreignKey: 'approveRequirementId',
        as: 'comments',
      });
      ApproveRequirements.hasMany(models.Attachment, {
        foreignKey: 'approveRequirementId',
        as: 'attachments',
      });
    }
  }
  ApproveRequirements.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      furtureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ApproveRequirements',
    },
  );
  return ApproveRequirements;
};
