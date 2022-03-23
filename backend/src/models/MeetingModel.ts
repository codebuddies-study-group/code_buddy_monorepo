"use strict";

import Sequelize from "@sequelize/core";

import Meeting from "./interfaces/Meeting";

module.exports = (sequelize: any, DataTypes: any) => {
  Meeting.init(
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

      topic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
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
      modelName: "Meeting",
      tableName: "meeting",
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      paranoid: true,
      omitNull: true,
    }
  );
  return Meeting;
};
