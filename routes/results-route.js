const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const resultsController = require("../controllers/results-controller");

router.route("/").get(resultsController.index);
router.route("/:id").get(resultsController.findOne);

module.exports = router;
