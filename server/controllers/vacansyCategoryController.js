const {
  getAllCategory,
  addCategory,
  cahngeCategory,
  deleteCategory,
  getOneCategory,
} = require("../DataBase/index");
const multiparty = require("multiparty");
const fs = require("fs");

class Category {
  async getAllCategory(req, res) {
    try {
      const data = await getAllCategory();
      console.log(data);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async addCategory(req, res) {
    try {
      console.log(req.body);
      const data = await addCategory(
        req.body.category_name,
        req.file.path ? `http://${req.get("host")}/${req.file.path}` : "",
        req.body.description
      );

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json("Ошибка сервера " + error);
    }
  }

  async updateCategory(req, res) {
    try {
      const { id, category_name, description } = req.body;
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      if (!category_name) {
        return res.status(400).json("Необходимо указать название категории");
      }
      const data = await cahngeCategory(
        id,
        category_name,
        // req.file?.path ? `http://${req.get("host")}/${req.file.path}` : null,
        description
      );
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async deleteCategory(req, res) {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const cat = await getOneCategory(id);
      fs.unlinkSync(cat.imageSrc.split("/")[3]);
      const data = await deleteCategory(id);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async getOneCategory(req, res) {
    try {
      const { id } = req.query;
      console.log(req.query);
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const data = await getOneCategory(id);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
}
module.exports = new Category();
