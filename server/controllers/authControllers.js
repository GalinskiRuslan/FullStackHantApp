const jwt = require("jsonwebtoken");

const generateAccessToken = () => {
  const payload = { id: "admin" };
  console.log(payload);
  return jwt.sign(payload, "secret", { expiresIn: "24h" });
};

class authController {
  async login(req, res) {
    try {
      const { login, password } = req.body;
      if (login === "admin" && password === "admin1247") {
        const token = generateAccessToken();
        return res.status(200).json({ token });
      } else {
        return res.status(400).json("Неверные данные, повторите попытку");
      }
    } catch (error) {
      return res.status(400).json("Ошибка сервера" + error);
    }
  }
}

module.exports = new authController();
