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
const Vacansy = require("./models/vacansy-model")(sequelize);
const CategoryVacansy = require("./models/category-vacansy")(sequelize);
const Users = require("./models/user-model")(sequelize);

CategoryVacansy.hasMany(Vacansy);
Vacansy.belongsTo(CategoryVacansy);

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
const getOneCategory = async (id) => {
  try {
    const data = await CategoryVacansy.findOne({ where: { id: id } });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const addCategory = async (category_name) => {
  try {
    const category = await CategoryVacansy.create({
      category_name: category_name,
    });
    return "Категория добавлена";
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteCategory = async (id) => {
  try {
    const category = await CategoryVacansy.destroy({ where: { id: id } });
    return "Категория удалена";
  } catch (error) {
    console.log(error);
    return error;
  }
};
const cahngeCategory = async (id, category_name) => {
  try {
    const category = await CategoryVacansy.update(
      { category_name: category_name },
      { where: { id: id } }
    );
    return "Категория изменена";
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Вакансии
const addVacansy = async (
  vacansy_name,
  isActive,
  description,
  skills,
  salary,
  expresion,
  categoryId
) => {
  try {
    const vacansy = await Vacansy.create({
      vacansy_name: vacansy_name,
      isActive: isActive,
      description: description,
      skills: skills,
      salary: salary,
      expresion: expresion,
      categoryId: categoryId,
    });
    return "Вакансия добавлена";
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getAllVacansy = async () => {
  const data = await Vacansy.findAll();
  return await data;
};
const getOneVacansy = async (id) => {
  try {
    const data = await Vacansy.findOne({ where: { id: id } });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const cahngeVacansy = async (
  id,
  vacansy_name,
  isActive,
  description,
  skills,
  salary,
  expresion,
  categoryId
) => {
  try {
    const vacansy = await Vacansy.update(
      {
        vacansy_name: vacansy_name,
        isActive: isActive,
        description: description,
        skills: skills,
        salary: salary,
        expresion: expresion,
        categoryId: categoryId,
      },
      { where: { id: id } }
    );
    return "Вакансия изменена";
  } catch (e) {
    console.log(e);
    return e;
  }
};
const changeActiveVacansy = async (id, isActive) => {
  try {
    const vacansy = await Vacansy.update(
      { isActive: isActive },
      { where: { id: id } }
    );
    return "Вакансия изменена";
  } catch (e) {
    console.log(e);
    return e;
  }
};
const getVacansyOnCat = async (id) => {
  try {
    const data = await Vacansy.findAll({ where: { categoryId: id } });
    return await data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteVacansy = async (id) => {
  try {
    const vacansy = await Vacansy.destroy({ where: { id: id } });
    return "Вакансия удалена";
  } catch (error) {
    console.log(error);
    return error;
  }
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
  addCategory,
  getOneCategory,
  deleteCategory,
  cahngeCategory,
  addVacansy,
  getAllVacansy,
  getOneVacansy,
  cahngeVacansy,
  changeActiveVacansy,
  getVacansyOnCat,
  deleteVacansy,
};
