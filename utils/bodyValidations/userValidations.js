var validator = require("express-validator/check");

// const {
//   check,
//   body,
//   query,
//   oneOf,
//   validationResult
// } = require("express-validator/check");

exports.post_credit_check = [
  validator
    .body("name")
    .exists()
    .withMessage("Name should be mest be")
    .isAlphanumeric()
    .withMessage("Name should be alpanumeric")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "Name should not be empty, should be more than one and less than 50 character"
    )
    .trim(),
  validator
    .body("password")
    .exists()
    .isLength({ min: 6, max: undefined })
    .withMessage("password should not be empty, should be more than 6 ")
    .trim(),
  validator
    .body("phonNumber")
    .isInt()
    .withMessage("phonNumber should be number")
    .exists()
    .isLength({ min: 10, max: 10 })
    .withMessage("phonNumber should not be empty, should be must 10 character")
    .trim(),
  validator.body("confimePassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
  validator
    .body("email")
    .exists()
    .trim()
    .isEmail(),

  function(req, res, next) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
