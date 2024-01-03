const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  /*  "galinsiz_123",
  "galinsiz_123",
  "nq5v39hYFiZ5", */
  // "hunt",
  // "root",
  // "1234",
  "BigR",
  "root",
  "gal4815162342war",
  {
    port: 3306,
    // host: "galinsiz.beget.tech",
    host: "localhost",
    dialect: "mysql",
  }
);
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
const ResponseVacansy = require("./models/response-vacansy")(sequelize);

CategoryVacansy.hasMany(Vacansy);
Vacansy.belongsTo(CategoryVacansy);

Vacansy.hasMany(ResponseVacansy);
ResponseVacansy.belongsTo(Vacansy);

// Регистрация пользователя
const registerUser = async (data) => {
  try {
    const {
      user_name,
      user_role,
      password,
      user_email,
      user_phone,
      resume,
      user_surmane,
    } = data;
    const user = await Users.create({
      user_name: user_name,
      user_role: user_role,
      password: password,
      user_email: user_email,
      user_phone: user_phone,
      resume: resume,
      user_surmane: user_surmane,
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
const addCategory = async (category_name, background_photo, description) => {
  try {
    const category = await CategoryVacansy.create({
      category_name: category_name,
      imageSrc: background_photo,
      description: description,
    });
    return category;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteCategory = async (id) => {
  try {
    const category = await CategoryVacansy.destroy({ where: { id: id } });
    return category;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const cahngeCategory = async (id, category_name, description) => {
  try {
    const category = await CategoryVacansy.update(
      {
        category_name: category_name,
        description: description,
      },
      { where: { id: id } }
    );
    return category;
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
  categoryId,
  tasks,
  city
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
      tasks,
      city,
    });
    return vacansy;
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
  categoryId,
  tasks,
  city
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
        tasks,
        city: city,
      },
      { where: { id: id } }
    );
    return vacansy;
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
    return vacansy;
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
    return vacansy;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Отклики на вакансии

const newResponse = async (
  user_name,
  user_phone,
  user_email,
  vacansy_id,
  resume
) => {
  try {
    const response = await ResponseVacansy.create({
      user_name,
      user_phone,
      user_email,
      vacansyId: vacansy_id,
      resume,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const newResponseWithoutVacansy = async (
  user_name,
  user_phone,
  user_email,
  resume,
  vacansy_name,
  message
) => {
  try {
    const response = await ResponseVacansy.create({
      user_name,
      user_phone,
      user_email,
      resume,
      vacancy_name: vacansy_name,
      message,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getResponseWithNumberAndId = async (id_vacansy, number) => {
  try {
    const data = await ResponseVacansy.findOne({
      where: { vacansyId: id_vacansy, user_phone: number },
    });

    return data;
  } catch (error) {}
};
const getResponseWithNumber = async (number) => {
  try {
    const data = await ResponseVacansy.findOne({
      where: { user_phone: number },
    });

    return data;
  } catch (error) {}
};
const getAllResponse = async () => {
  try {
    const data = await ResponseVacansy.findAll();
    return await data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteResponse = async (id) => {
  try {
    const response = await ResponseVacansy.destroy({ where: { id: id } });
    return response;
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
  newResponse,
  newResponseWithoutVacansy,
  getResponseWithNumberAndId,
  getResponseWithNumber,
  getAllResponse,
  deleteResponse,
};
