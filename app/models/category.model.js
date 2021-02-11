module.exports = (sequelize, Sequelize) => {
    const db = require('./index')
    const Category = sequelize.define("categories", {
        name: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    const Article = db.articles
    Category.hasMany(Article)

    return Category;
}