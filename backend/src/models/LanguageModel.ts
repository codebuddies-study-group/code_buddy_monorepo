'use strict';

import Sequelize from '@sequelize/core';

import Language from './interfaces/Language';

module.exports = (sequelize: any, DataTypes: any) => {
    Language.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: Sequelize.DATE,
        },
    }, {
        sequelize,
        modelName: 'Language',
        tableName: 'language',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: true,
        omitNull: true,
    });
    return Language;
};