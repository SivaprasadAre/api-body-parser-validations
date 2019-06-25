var express = require("express"),
  router = express.Router();
var UserController = require("../controller/userController");
var validate = require("../utils/bodyValidators/userValidators");
var uc = new UserController();

router.get("/", uc.getAll.bind(uc));
router.post("/", validate.post_credit_check , uc.create.bind(uc));
router.put("/:id", uc.update.bind(uc));
router.delete("/:id", uc.remove.bind(uc));

module.exports = router;