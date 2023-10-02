const Sequelize = require("sequelize");

const sequelize = new Sequelize("hunt", "root", "1234", {
  port: 3306,
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const CategoryVacansy = require("./models/category-vacansy")(sequelize);
const Users = require("./models/user-model")(sequelize);

// Регистрация пользователя
const registerUser = async (data) => {
  try {
    const { user_name, user_role, password, user_email } = data;
    const user = await Users.create({
      user_name: user_name,
      user_role: user_role,
      password: password,
      user_email: user_email,
    });
    return await user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const findOneUser = async (user_email) => {
  return await Users.findOne({ where: { user_email: user_email } });
};

// Категории вакансий
const getAllCategory = async () => {
  const data = await CategoryVacansy.findAll();
  return await data;
};

sequelize
  .sync()
  .then(() => {
    console.log("Book table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = {
  sequelize: sequelize,
  CategoryVacansy: CategoryVacansy,
  getAllCategory: getAllCategory,
  registerUser,
  findOneUser,
};
