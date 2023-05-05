'use strict';
module.exports = (sequelize, DataTypes) => {
  const HourlyWeather = sequelize.define('HourlyWeather', {
    cityId: DataTypes.INTEGER,
    temperature: DataTypes.INTEGER,
    acTemp: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    starttime: DataTypes.TIME,
    endtime: DataTypes.TIME
  }, {});
  HourlyWeather.associate = function(models) {
    // associations can be defined here
    HourlyWeather.belongsTo(models.City, {foreignKey:'cityId'})
  };
  return HourlyWeather;
};
