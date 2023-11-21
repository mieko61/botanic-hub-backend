const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const categoriesController = require("../controllers/categories-controller");

router.route("/").get(categoriesController.index);

module.exports = router;
