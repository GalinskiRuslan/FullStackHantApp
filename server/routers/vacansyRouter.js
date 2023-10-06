const Router = require("express");
const router = new Router();
const vacansy = require("../controllers/vacansyController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/vacansy", vacansy.getAllVacansy);

router.get("/vacansyCat", vacansy.getVacansyOnCat);

router.get("/vacansyOne", vacansy.getOneVacansy);

router.post("/vacansy", roleMiddleware(["admin"]), vacansy.addVacansy);

router.put("/vacansy", roleMiddleware(["admin"]), vacansy.updateVacansy);

router.put(
  "/changeactivevacansy",
  roleMiddleware(["admin"]),
  vacansy.changeActiveVacansy
);

router.delete("/vacansy", roleMiddleware(["admin"]), vacansy.deleteVacansy);

module.exports = router;
