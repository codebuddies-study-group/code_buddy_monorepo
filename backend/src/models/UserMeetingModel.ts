'use strict';

import Sequelize from '@sequelize/core';

import UserMeeting from './interfaces/UserMeeting';

module.exports = (sequelize: any, DataTypes: any) => {
    UserMeeting.init({
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        meeting_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Meeting',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'UserMeeting',
        tableName: 'userMeeting',
        omitNull: true,
    });
    return UserMeeting;
};