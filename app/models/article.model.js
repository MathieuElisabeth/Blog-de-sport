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
    Article.associate = (models) => {
        Article.belongsTo(models.categories);
    }

    return Article;
};