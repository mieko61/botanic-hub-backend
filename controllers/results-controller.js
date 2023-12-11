const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const healthUseId = req.query.healthUse;
  try {
    const plantsFound = await knex("plantUse")
      .join("plant", "plant.id", "plantUse.plant_id")
      .where("plantUse.healthUse_id", healthUseId);
    return res.status(200).json(plantsFound);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

module.exports = {
  index,
};
