import { POSTGRESS_PASSWORD, POSTGRESS_USERNAME } from "./constants";
import { Sequelize } from "sequelize";

console.log("Connecting to database");
// const database = new Sequelize('sqlite::memory:');

const database = new Sequelize("postgres://postgres@localhost:5438/postgres", {
  dialect: "postgres",
  username: POSTGRESS_USERNAME,
  password: POSTGRESS_PASSWORD,
});

(async () => {
  console.log("testing connection");
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default database;
