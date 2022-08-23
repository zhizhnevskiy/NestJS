'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true
            },
            banned: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            banReason: {
                type: Sequelize.STRING,
                allowNull: true
            },
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
