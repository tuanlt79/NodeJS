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
    await queryInterface.bulkInsert('Cinemas', [{
      id: 1,
      name: "BHD Quan 1",
      address: "117 Nguyen Du,Quan 1, HCM",
      image: "bhd.jpg",
      cineplexID: 1,
      createdAt: "2021-07-06 9:10:10",
      updatedAt: "2021-07-06 9:10:10"
     },{
      id: 2,
      name: "BHD Quan 3",
      address: "1 Truong Dinh ,Quan 3, HCM",
      image: "bhd.jpg",
      cineplexID: 1,
      createdAt: "2021-07-06 9:10:10",
      updatedAt: "2021-07-06 9:10:10"
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cinemas', null, {});
  }
};
