/**
 * auto generated file with
 * ```
 * npx sequelize-cli init
 * ```
 */

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
type DBType = any;

const db: DBType = {} as DBType;

let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    // read files that ends with ".ts"
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      !file.endsWith("Model.d.ts")
    );
  })
  .forEach((file: string) => {
    const modelConstructor = require(path.join(__dirname, file));
    if (modelConstructor instanceof Function) {
      const model = modelConstructor(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
