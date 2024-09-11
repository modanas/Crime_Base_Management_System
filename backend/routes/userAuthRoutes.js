const express = require("express");
const controllers = require("../controllers/userAuthController");
const router = express.Router();

router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.get("/logout", controllers.logout);

// module.exports = router;
module.exports = router;
