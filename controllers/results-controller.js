const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const healthUseId = req.params.healthUseId;
  try {
    const plantsFound = await knex("plant")
      .join("plantUse", "plant.id", "plantUse.plant_id")
      .where("plantUse.healthUse_id", healthUseId);
    return res.status(200).json(plantsFound);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

const findOne = async (req, res) => {
  const healthUseId = req.params.healthUseId;
  const plantId = req.params.plantId;

  try {
    const plantFound = await knex("plant")
      .join("plantUse", "plant_id", "plantUse.plant_id")
      .where("plantUse.healthUse_id", healthUseId)
      .andWhere("plant.id", plantId);

    if (plantFound.length === 0) {
      return res.status(404).json({
        message: `Plant with ID ${plantId} not found`,
      });
    }

    const selectedPlant = plantFound[0];
    res.status(200).json(selectedPlant);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve plant with ID ${plantId}`,
      error: error,
    });
  }
};

module.exports = {
  index,
  findOne,
};
