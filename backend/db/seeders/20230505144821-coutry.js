'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkInsert('Countries', [
    {
      name: 'the United States',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "France",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'the United Kingdom of Great Britain',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'China',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Canada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'South Korea',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Japan',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkDelete('Countries', null, {});
  }
};
