"use strict";

import Sequelize from "@sequelize/core";

import UserLanguage from "../src/models/UserLanguage";

module.exports = (sequelize: any, DataTypes: any) => {
  UserLanguage.init(
    {
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "User",
          key: "id",
        },
      },
      LanguageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Language",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserLanguage",
      tableName: "userLanguage",
      omitNull: true,
    }
  );
  return UserLanguage;
};
