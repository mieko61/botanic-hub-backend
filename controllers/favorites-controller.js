const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  const userId = req.params.userId;
  try {
    const favoritePlants = await knex("plant")
      .join("favorite", "plant.id", "favorite.plant_id")
      .where("favorite.user_id", userId);

    return res.status(200).json(favoritePlants);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

const findOne = async (req, res) => {
  const plantId = req.params.plantId;
  const userId = req.params.userId;

  try {
    const plantFound = await knex
      .select("plant")
      .join("favorite", plantId, "favorite.plant_id")
      .where("favoritePlant.user_id", userId);

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
  // const userId = req.params.userId;
  const plantId = req.params.plantId;

  try {
    const plantDeleted = await knex("favorite")
      // .join("user", "favorite.user_id", userId)
      .where("favorite.plant_id", plantId)
      .delete();

    if (plantDeleted === 0) {
      return res.status(404).json({
        message: `Plant with ID ${plantId} not found`,
      });
    }
    return res.status(204).json({
      message: `Successfully deleted plant with ID ${plantId}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete plant ${error}`,
    });
  }
};

const add = async (req, res) => {
  const plantId = req.params.plantId;

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
