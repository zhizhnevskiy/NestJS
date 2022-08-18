'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const date = new Date();
    await queryInterface.bulkInsert('roles', [{
      value: "ADMIN",
      description: "Administrator",
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString()
    }], {});
    await queryInterface.bulkInsert('roles', [{
      value: "USER",
      description: "User",
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', null, {});
  }
};

