const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const plantDetailsController = require("../controllers/plant-details-controller");

router.route("/").get(plantDetailsController.index);
router.route("/plantuses").get(plantDetailsController.plantUses);

module.exports = router;
