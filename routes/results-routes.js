const express = require("express");
// const router = express.Router();
const router = express.Router({ mergeParams: true });

apiBody = process.env.API_URL;

const resultsController = require("../controllers/results-controller");

router.route("/healthUse/:healthUseId").get(resultsController.index);
router.route("/healthUse/:id/plant/:plantId").get(resultsController.findOne);

module.exports = router;
