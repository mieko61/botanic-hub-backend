const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const resultsController = require("../controllers/results-controller");

router.route("/").get(resultsController.index);

(module.exports = router), router;
