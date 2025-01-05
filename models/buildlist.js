'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BuildList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BuildList.belongsTo(models.Repository, {
        foreignKey: 'repositoryId',
        as: 'repository',
      });
      BuildList.belongsTo(models.InternalUser, {
        foreignKey: 'internalUserId',
        as: 'internalUsers',
      });
    }
  }
  BuildList.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BuildList',
    },
  );
  return BuildList;
};
