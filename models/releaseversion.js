'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReleaseVersion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReleaseVersion.belongsTo(models.BusinessOwner, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwners',
      });
      ReleaseVersion.belongsTo(models.Repository, {
        foreignKey: 'repositoryId',
        as: 'repositories',
      });
      ReleaseVersion.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });
      ReleaseVersion.belongsTo(models.BusinessRequirementRaw, {
        foreignKey: 'businessRequirementRawId',
        as: 'businessRequirementRaws',
      });
    }
  }
  ReleaseVersion.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ReleaseVersion',
    },
  );
  return ReleaseVersion;
};
