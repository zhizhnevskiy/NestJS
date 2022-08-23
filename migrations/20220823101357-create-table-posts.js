'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('posts', {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: true
            },
            content: {
                type: Sequelize.STRING,
                allowNull: true
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                        schema: 'public'
                    },
                    key: 'id'
                },
                allowNull: true
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('posts');
    }
};
