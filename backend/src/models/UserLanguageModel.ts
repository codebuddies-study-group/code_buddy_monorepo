'use strict';

import Sequelize from '@sequelize/core';

import UserLanguage from './interfaces/UserLanguage';

module.exports = (sequelize: any, DataTypes: any) => {
    UserLanguage.init({
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        language_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Language',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'UserLanguage',
        tableName: 'userLanguage',
        omitNull: true,
    });
    return UserLanguage;
};