const express = require("express");
const router = express.Router();
// const selectedResultRouter = express.Router({ mergeParams: true });

apiBody = process.env.API_URL;

const resultsController = require("../controllers/results-controller");

router
  .route("/healthUse/:healthUseId/plant/:plantId")
  .get(resultsController.findOne);
router.route("/healthUse/:healthUseId").get(resultsController.index);

(module.exports = router), router;
