const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const requestedUser = req.params.id;
  try {
    const data = await knex
      .select("*")
      .from("favorite")
      .where("user_id", requestedUser);

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
      .join("favoritePlant", "plantId", "favoritePlant.plant_id")
      .where("favoritePlant.plant_id", requestedPlant);

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

const remove = async (req, res) => {
  const selectedPlantId = req.params.id;

  try {
    const plantDeleted = await knex("favorite")
      .where("favorite.id", selectedPlantId)
      .delete();

    if (plantDeleted === 0) {
      return res.status(404).json({
        message: `Plant with ID ${selectedPlantId} not found`,
      });
    }
    return res.status(204).json({
      message: `Successfully deleted plant with ID ${selectedplantId}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete plant ${error}`,
    });
  }
};

const add = async (req, res) => {
  const selectedPlantId = req.params.id;

  try {
    const plantAdded = await knex("favoritePlant")
      .insert(selectedPlantId)
      .join("plant", selectedPlantId, "plant.id");

    res.status(201).json({
      message: `Plant with ID ${selectedPlantId} was successfully added`,
    });
    // json(plantAdded);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add plant ${error}`,
    });
  }
};

module.exports = {
  index,
  findOne,
  remove,
  add,
};
