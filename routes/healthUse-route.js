const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const healthUseController = require("../controllers/healthUse-controller");

router.route("/").get(healthUseController.index);

module.exports = router;
