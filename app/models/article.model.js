module.exports = (sequelize, Sequelize) => {
    const db = require('./index');

    const Article = sequelize.define("articles", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    const Category = db.category
    Article.belongsTo(Category);

    return Article;
};