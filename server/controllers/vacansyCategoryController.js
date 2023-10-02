const { getAllCategory } = require("../DataBase/index");
class Category {
  async getAllCategory(req, res) {
    try {
      const data = await getAllCategory();
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
}

module.exports = new Category();
