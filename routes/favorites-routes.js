const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const favoritesController = require("../controllers/favorites-controller");

router
  .route("/")
  .get(favoritesController.index)
  .post(favoritesController.add)
  .delete(favoritesController.remove);

router.route("/plant").get(favoritesController.findOne);

module.exports = router;
