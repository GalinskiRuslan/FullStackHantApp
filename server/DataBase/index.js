const Sequelize = require("sequelize");

const sequelize = new Sequelize("hunt", "root", "", {
  port: 3308,
  host: "localhost",
  dialect: "mysql",
});

const CategoryVacansy = require("./models/category-vacansy")(sequelize);

const getAllCategory = async () => {
  const data = await CategoryVacansy.findAll();
  return await data;
};

module.exports = {
  sequelize: sequelize,
  CategoryVacansy: CategoryVacansy,
  getAllCategory: getAllCategory,
};
