'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user_roles', {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'roles',
                        schema: 'public'
                    },
                    key: 'id'
                },
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
        await queryInterface.dropTable('user_roles');
    }
};
