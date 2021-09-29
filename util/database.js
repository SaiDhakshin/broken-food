require('dotenv').config();
// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user : process.env.DB_USER,
//     password : process.env.DB_PASSWORD,
//     database : process.env.DB_DATABASE,
//     host : process.env.DB_HOST,
//     port : process.env.DB_PORT
// })

// module.exports = pool;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('authuser','postgres','qmpzfgh4563',{
    dialect: 'postgres',
    host : 'localhost',
    storage : './session.postgres'
})

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;