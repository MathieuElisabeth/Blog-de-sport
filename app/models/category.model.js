module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        name: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    Category.associate = (models) => {
        Category.hasMany(models.articles)
    }

    return Category;
}