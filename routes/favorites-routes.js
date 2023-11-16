const express = require("express");
const router = express.Router();

apiBody = process.env.API_URL;

const favoritesController = require("../controllers/favorites-controller");

router.route("/").get(favoritesController.index);
router
  .route("/:id")
  .get(favoritesController.findOne)
  .delete(favoritesController.remove)
  .post(favoritesController.add);

module.exports = router;
