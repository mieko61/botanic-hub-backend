const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const favoritesController = require("../controllers/favorites-controller");

router.route("/userId/:userId").get(favoritesController.index);

router
  .route("/userId/:userId/plantId/:plantId")
  .get(favoritesController.findOne)
  .post(favoritesController.add);

router
  .route("/userId/:userId/remove/:plantId")
  .delete(favoritesController.remove);

module.exports = router;
