"use strict";

import Sequelize from "@sequelize/core";

import User from "./interfaces/User";

module.exports = (sequelize: any, DataTypes: any) => {
  User.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
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
      sequelize,
      modelName: "User",
      tableName: "user",
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      paranoid: true,
      omitNull: true,
    }
  );
  return User;
};
