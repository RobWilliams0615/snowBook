
'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class skiStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      skiStore.belongsTo(models.User,
        {
          foreignKey: "userId",
        });
    }
  }
  skiStore.init(
    {
      cityId: DataTypes.INTEGER,
      rentalsOffered: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      name: DataTypes.STRING,
      services: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      guidesOffered: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "skiStore",
      tableName: "skistores",
    }
  );
  return skiStore;
};
