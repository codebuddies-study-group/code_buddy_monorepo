import database from "../database";
import Sequelize from "@sequelize/core";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

// order of InferAttributes & InferCreationAttributes is important.
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    // 'CreationOptional' is a special type that marks the field as optional
    // when creating an instance of the model (such as using Model.create()).
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;
}

User.init(
    {
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
            allowNull: false,
            unique: true,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
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
    },
    {
        tableName: 'user',
        sequelize: database, // passing the `sequelize` instance is required
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: true,
        omitNull: true,
    }
)

export default User;