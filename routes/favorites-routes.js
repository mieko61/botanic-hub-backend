const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
apiBody = process.env.API_URL;

const favoritesController = require("../controllers/favorites-controller");

router.use("/", authenticate);

router
  .route("/")
  .get(favoritesController.index)
  .post(favoritesController.add)
  .delete(favoritesController.remove);

// router.route("/plant").get(favoritesController.findOne);

module.exports = router;
