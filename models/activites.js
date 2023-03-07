'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Activites.hasMany(models.Day, {
      //   foreignKey: 'activityId'
      // })
    }
  }
  Activites.init({
    activityName: DataTypes.STRING,
    price: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    date: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Activites',
  });
  return Activites;
};