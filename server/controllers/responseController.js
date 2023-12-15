const {
  getResponseWithNumberAndId,
  newResponseWithoutVacansy,
  newResponse,
  getResponseWithNumber,
  getAllResponse,
  deleteResponse,
} = require("../DataBase/index");
const multiparty = require("multiparty");
const MailService = require("../services/mail-service");
class responseController {
  async getAllResponse(req, res) {
    try {
      const data = await getAllResponse();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json("Ошибка сервера " + error);
    }
  }
  async sendResponseOnVacansy(req, res) {
    try {
      const { user_name, user_phone, user_email, vacansy_id } = req.body;
      const IsHaveResponse = await getResponseWithNumberAndId(
        vacansy_id,
        user_phone
      );
      const resume = req.file.path
        ? `http://${req.get("host")}/${req.file.path}`
        : "";
      console.log(IsHaveResponse);
      if (IsHaveResponse) {
        return res.status(400).json("Вы уже откликнулись на эту вакансию");
      }
      if (!user_name) {
        return res.status(400).json("Необходимо указать имя");
      }
      if (!user_phone) {
        return res.status(400).json("Необходимо указать номер телефона");
      }
      if (!user_email) {
        return res.status(400).json("Необходимо указать email");
      }
      if (!vacansy_id) {
        return res.status(400).json("Необходимо указать id вакансии");
      }
      console.log(resume);
      const response = await newResponse(
        user_name,
        user_phone,
        user_email,
        vacansy_id,
        resume
      );
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async sendResponseAnonym(req, res) {
    try {
      console.log(req.file);
      const { user_name, user_phone, user_email, vacansy_name, message } =
        req.body;
      const IsHaveResponse = await getResponseWithNumber(user_phone);
      const resume = req.file
        ? `http://${req.get("host")}/${req.file.path}`
        : "";
      console.log(IsHaveResponse);
      if (IsHaveResponse) {
        return res
          .status(400)
          .json("Вы уже отправили отклик, пожалуйста ожидайте ответа");
      }
      if (!user_name) {
        return res.status(400).json("Необходимо указать имя");
      }
      if (!user_phone) {
        return res.status(400).json("Необходимо указать номер телефона");
      }
      if (!user_email) {
        return res.status(400).json("Необходимо указать email");
      }
      if (!vacansy_name) {
        return res.status(400).json("Необходимо указать название вакансии");
      }
      const response = await newResponseWithoutVacansy(
        user_name,
        user_phone,
        user_email,
        resume,
        vacansy_name,
        message
      );
      await MailService.sendResponse(vacansy_name, resume);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
  async deleteResponse(req, res) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json("Необходимо указать id отклика");
    }
    try {
      const response = await deleteResponse(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json("Ошибка сервера " + error);
    }
  }
}

module.exports = new responseController();
