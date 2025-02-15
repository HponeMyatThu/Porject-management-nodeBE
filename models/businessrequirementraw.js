'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessRequirementRaw extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BusinessRequirementRaw.belongsTo(models.Priority, {
        foreignKey: 'priorityId',
        as: 'priority',
      });
      BusinessRequirementRaw.belongsTo(models.BusinessOwner, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });

      BusinessRequirementRaw.hasMany(models.ApproveRequirements, {
        foreignKey: 'businessRequirementRawId',
        as: 'BusinessRequirementRaws',
      });
      BusinessRequirementRaw.hasMany(models.ReleaseVersion, {
        foreignKey: 'businessRequirementRawId',
        as: 'releaseVersions',
      });
      BusinessRequirementRaw.hasMany(models.comment, {
        foreignKey: 'businessRequirementRawId',
        as: 'comments',
      });
      BusinessRequirementRaw.hasMany(models.Attachment, {
        foreignKey: 'businessRequirementRawId',
        as: 'attachements',
      });
    }
  }
  BusinessRequirementRaw.init(
    {
      requirementName: DataTypes.STRING,
      description: DataTypes.STRING,
      wantedDate: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      targetBudget: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'BusinessRequirementRaw',
    },
  );
  return BusinessRequirementRaw;
};
