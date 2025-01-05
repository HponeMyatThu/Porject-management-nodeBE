'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BusinessOwner.hasMany(models.BusinessRequirementRaw, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });
      BusinessOwner.hasMany(models.ApproveRequirements, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });
      BusinessOwner.hasMany(models.Project, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      });
      BusinessOwner.hasMany(models.ReleaseVersion, {
        foreignKey: 'businessOwnerId',
        as: 'businessOwner',
      })
    }
  }
  BusinessOwner.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BusinessOwner',
    },
  );
  return BusinessOwner;
};
