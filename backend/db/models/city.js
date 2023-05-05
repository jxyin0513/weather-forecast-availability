'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.belongsTo(models.User, {foreignKey: 'userId'})
    City.belongsTo(models.Country, {foreignKey:'countryId'})
    City.hasMany(models.HourlyWeather, {foreignKey:'cityId', onDelete:"cascade", hooks:true})
    City.hasMany(models.DailyWeather, {foreignKey:'cityId', onDelete:"cascade", hooks:true})
  };
  return City;
};
