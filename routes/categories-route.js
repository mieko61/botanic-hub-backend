const express = require("express");
const categoriesRoute = express.Router();

apiBody = process.env.API_URL;

const categoriesController = require("../controllers/categories-controller");

router.route("/categories").get(categoriesController.index);

module.exports = router;
