const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const plantDetailsController = require("../controllers/plant-details-controller");

router.route("/").get(plantDetailsController.index);

(module.exports = router), router;
