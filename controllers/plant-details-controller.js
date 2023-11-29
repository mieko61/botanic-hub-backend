const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const plantId = req.query.plant;
  try {
    const plantFound = await knex("plant").where("plant.id", plantId).first();

    if (!plantFound) {
      return res.status(404).json({
        message: `Plant with ID ${plantId} not found`,
      });
    }
    res.status(200).json(plantFound);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve plant with ID ${plantId}`,
      error: error,
    });
  }
};

const plantUses = async (req, res) => {
  const plantId = req.query.plant;
  try {
    const healthUsesFound = await knex("plantUse")
      .join("plant", "plantUse.plant_id", "plant_id")
      .where("plant_id", plantId);
    return res.status(200).json(healthUsesFound);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

module.exports = {
  index,
  plantUses,
};
