module.exports = (sequelize, Sequelize) => {

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
    const Category = sequelize.define("categories", {
        name: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    Article.belongsTo(Category);
    Category.hasMany(Article)

    return Article;
};