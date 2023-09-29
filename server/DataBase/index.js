const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema2", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const CategoryVacansy = require("./models/category-vacansy")(sequelize);

module.exports = {
  sequelize: sequelize,
  CategoryVacansy: CategoryVacansy,
};
