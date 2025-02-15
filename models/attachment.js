'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attachment.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });
      Attachment.belongsTo(models.BusinessRequirementRaw, {
        foreignKey: 'businessRequirementRawId',
        as: 'businessRequirementRaws',
      });
      Attachment.belongsTo(models.ApproveRequirements, {
        foreignKey: 'approveRequirementId',
        as: 'approveRequirements',
      });
      Attachment.belongsTo(models.WorkItem, {
        foreignKey: 'workItemId',
        as: 'workItems',
      });
      Attachment.belongsTo(models.comment, {
        foreignKey: 'commentId',
        as: 'comments',
      });
    }
  }
  Attachment.init({
    fileName: DataTypes.STRING,
    file: DataTypes.TEXT,
    imageName: DataTypes.STRING,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    futureUses: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};