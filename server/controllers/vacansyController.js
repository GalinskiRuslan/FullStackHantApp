const {
  addVacansy,
  getAllVacansy,
  getOneVacansy,
  cahngeVacansy,
  changeActiveVacansy,
  getVacansyOnCat,
  deleteVacansy,
} = require("../DataBase/index");
class Vacansy {
  async getAllVacansy(req, res) {
    try {
      const data = await getAllVacansy();
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async addVacansy(req, res) {
    try {
      const {
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        tasks,
        city,
        categoryId,
      } = req.body;
      if (
        !vacansy_name ||
        !description ||
        !skills ||
        !salary ||
        !expresion ||
        !categoryId
      ) {
        return res.status(400).json("Необходимо заполнить все поля");
      }
      const data = await addVacansy(
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        categoryId,
        tasks,
        city
      );
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }

  async updateVacansy(req, res) {
    try {
      const {
        id,
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        categoryId,
        tasks,
        city,
      } = req.body;
      if (!id) {
        return res.status(400).json("Необходимо указать id Вакансии");
      }
      if (
        !vacansy_name ||
        !description ||
        !skills ||
        !salary ||
        !expresion ||
        !categoryId
      ) {
        return res.status(400).json("Необходимо заполнить все данные");
      }
      const data = await cahngeVacansy(
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
      );
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async deleteVacansy(req, res) {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const data = await deleteVacansy(id);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async getOneVacansy(req, res) {
    try {
      const { id } = req.query;
      console.log(req.query);
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const data = await getOneVacansy(id);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async changeActiveVacansy(req, res) {
    try {
      const { id, isActive } = req.body;
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const data = await changeActiveVacansy(id, isActive);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async getVacansyOnCat(req, res) {
    try {
      const { id } = req.query;
      console.log(req.query);
      if (!id) {
        return res.status(400).json("Необходимо указать id категории");
      }
      const data = await getVacansyOnCat(id);
      return res.status(200).json(await data);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
}

module.exports = new Vacansy();
