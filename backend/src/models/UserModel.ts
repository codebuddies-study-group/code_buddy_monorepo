import database from "../database";
import Sequelize from "@sequelize/core";

const user = database.define('User', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'user'
    }
);

export default user;