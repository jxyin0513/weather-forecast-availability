'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkInsert('Cities', [
    {
      countryId: '1',
      name: 'New York City',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '1',
      name: "Cupertino",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '2',
      name: 'Paris',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '1',
      name: 'Palisades Park',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '3',
      name: 'London',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '4',
      name: 'Beijing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '4',
      name:'Shanghai',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '5',
      name:'Toronto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '5',
      name:'Vancouver',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '6',
      name:'Soul',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      countryId: '7',
      name:'Tokyo',
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
   return queryInterface.bulkDelete('Cities', null, {});
  }
};
