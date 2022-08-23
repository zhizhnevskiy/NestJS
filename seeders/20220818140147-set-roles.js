'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [{
      value: "ADMIN",
      description: "Administrator",
    }], {});
    await queryInterface.bulkInsert('roles', [{
      value: "USER",
      description: "User",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};

