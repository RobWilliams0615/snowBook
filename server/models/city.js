'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      City.belongsTo(models.User, 
        { 
          foreignKey: 'userId',
        });
    }
  }
  City.init(
    {
      userId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
      resorts: DataTypes.STRING,
      name: DataTypes.STRING,
      ratings: DataTypes.INTEGER,
      review: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities'
    }
  );
  return City;
};
