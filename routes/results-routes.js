const express = require("express");
const resultsRouter = express.Router();
const selectedResultRouter = express.Router({ mergeParams: true });

apiBody = process.env.API_URL;

const resultsController = require("../controllers/results-controller");

resultsRouter.route("/healthUse/:healthUseId").get(resultsController.index);
selectedResultRouter
  .route("/healthUse/:healthUseId/plant/:plantId")
  .get(resultsController.findOne);

(module.exports = resultsRouter), selectedResultRouter;
