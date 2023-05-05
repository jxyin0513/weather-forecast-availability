'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.City, {foreignKey: 'countryId', onDelete:"cascade", hooks:true})
  };
  return Country;
};
