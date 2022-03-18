
import { POSTGRESS_PASSWORD, POSTGRESS_USERNAME } from "./constants";
import { Sequelize } from 'sequelize-typescript';


// TODO: not working
console.log('Connecting to database');
const database = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',

});

// const database = new Sequelize('postgres://postgres@localhost:5438/postgres', {
//     dialect: 'postgres', username: POSTGRESS_USERNAME, password: POSTGRESS_PASSWORD,
// });

export default database;