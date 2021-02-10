
const Sequelize = require("sequelize");
const sequelize = new Sequelize("blog_sport", "postgres", "nz93dc93", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.articles = require("./article.model.js")(sequelize, Sequelize);

module.exports = db;
