const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const plantUseId = req.params.id;

  try {
    const dataCheck = await knex("plantUse").where("use_id", plantUseId);

    if (dataCheck.length === 0) {
      return res.status(404).send(`Unable to retrieve results: ${err}`);
    }

    const data = await knex("plant")
      .join("plantUse", "plantId", "plantUse.plant_id")
      .where("plantUse.use_id")
      .select("*")
      .from("plant");

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

const findOne = async (req, res) => {
  const requestedPlant = req.params.id;

  try {
    const plantFound = await knex
      .select("plant.*")
      .join("plantUse", "plantId", "plantUse.plant_id")
      .where("plantUse.use_id", requestedPlant);

    if (plantFound.length === 0) {
      return res.status(404).json({
        message: `Plant with ID ${requestedPlant} not found`,
      });
    }

    const selectedPlant = plantFound[0];
    res.status(200).json(selectedPlant);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve plant with ID ${requestedPlant}`,
    });
  }
};

module.exports = {
  index,
  findOne,
};
