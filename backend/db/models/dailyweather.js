'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailyWeather = sequelize.define('DailyWeather', {
    cityId: DataTypes.INTEGER,
    calendar_date: DataTypes.DATE,
    status: DataTypes.STRING,
    minTemp: DataTypes.INTEGER,
    maxTemp: DataTypes.INTEGER,
    sunrise: DataTypes.TIME,
    sunset: DataTypes.TIME,
    humidity: DataTypes.INTEGER
  }, {});
  DailyWeather.associate = function(models) {
    // associations can be defined here
    DailyWeather.belongsTo(models.City, {foreignKey: 'cityId'})
  };
  return DailyWeather;
};
