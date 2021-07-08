'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cineplexes', [{
      id: 1,
      name: "BHD",
      logo: "bhd.jpg",
      createdAt: "2021-07-06 9:10:10",
      updatedAt:  "2021-07-06 9:10:10",
     },{
      id: 2,
      name: "DDC",
      logo: "ddc.jpg",
      createdAt: "2021-07-06 9:10:10",
      updatedAt:  "2021-07-06 9:10:10",
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cineplexes', null, {});
  }
};
