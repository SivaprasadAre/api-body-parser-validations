var express = require("express"),
  router = express.Router();
var ClientController = require("../controller/clientController");
var payloadChecker = require('payload-validator');
var expectedPayload = {
    "name": "",
    "email": "",
    "phonNumber": 0
};
var uc = new ClientController();

router.get("/", uc.getAll.bind(uc));
router.post('/',function (req, res) {
    // cross check req.body.message payload
    if (req.body) {
        var result = payloadChecker.validator(req.body, expectedPayload , ["name", "email", "phonNumber"], false);
        if (result.success) {
            uc.create(req,res);
        } else {
            res.status(422).json({ "message": result.response.errorMessage });
        }
    } else {
        res.status(422).json({ "message": "paylod not correct" });
    }
});
router.put("/:id", uc.update.bind(uc));
router.delete("/:id", uc.remove.bind(uc));

module.exports = router;



