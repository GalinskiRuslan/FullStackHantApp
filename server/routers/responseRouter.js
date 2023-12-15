const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploadResume");
const responseController = require("../controllers/responseController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/response", responseController.getAllResponse);

router.post(
  "/response",
  upload.single("resume"),
  responseController.sendResponseOnVacansy
);
router.post(
  "/responseAnonymous",
  upload.single("resume"),
  responseController.sendResponseAnonym
);
router.delete(
  "/response",
  roleMiddleware(["admin"]),
  responseController.deleteResponse
);

module.exports = router;
