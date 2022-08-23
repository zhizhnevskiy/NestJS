'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('roles', {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            value: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('roles');
    }
};
