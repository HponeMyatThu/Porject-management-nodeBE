'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repository extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Repository.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'projects',
      });

      Repository.hasMany(models.BuildList, {
        foreignKey: 'repositoryId',
        as: 'buildLists',
      });
      Repository.hasMany(models.ReleaseVersion, {
        foreignKey:'repositoryId',
        as:'releaseVersions',
      });
    }
  }
  Repository.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      futureUses: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Repository',
    },
  );
  return Repository;
};
