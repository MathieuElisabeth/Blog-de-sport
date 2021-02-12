require('dotenv').config()

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.articles = require("./article.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);

module.exports = db;
