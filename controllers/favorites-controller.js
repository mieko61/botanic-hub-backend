const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  try {
    const favoritePlants = await knex("plant")
      .join("favorite", "plant.id", "favorite.plant_id")
      .where("favorite.user_id", req.user_id);

    return res.status(200).json(favoritePlants);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

const findOne = async (req, res) => {
  const plantId = req.query.plant;
  console.log("here");

  try {
    const plantFound = await knex("user")
      .join("favorite", "user.id", "favorite.user_id")
      .join("plant", "favorite.plant_id", "plant.id")
      .where("user.id", req.user_id)
      .andWhere("favorite.id", favoriteId);

    if (plantFound.length === 0) {
      return res.status(404).json({
        message: `Plant with ID ${plantId} not found`,
      });
    }

    const selectedPlant = plantFound[0];
    res.status(200).json(selectedPlant);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve plant with ID ${favoriteId}`,
      error: error,
    });
  }
};

const remove = async (req, res) => {
  const plantId = req.query.plant_id;

  try {
    const plantDeleted = await knex("user")
      .join("favorite", "favorite.user_id", "user.id")
      .where("user.id", req.user_id)
      .andWhere("favorite.plant_id", plantId)
      .delete();

    if (plantDeleted === 0) {
      return res.status(404).json({
        message: `Plant with ID ${plantId} not found`,
      });
    }
    return res.status(200).json({
      message: `Successfully deleted plant with ID ${plantId}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete plant ${error}`,
    });
  }
};

const add = async (req, res) => {
  const plantId = req.body.plant_id;
  try {
    const plantAdded = await knex("favorite")
      .insert({ plant_id: plantId, user_id: req.user_id })
      .join("plant", "favorite.plant_id", "plant.id")
      .where(req.user_id, "favorite.user_id")
      .onConflict(["favorite.plant_id", plantId])
      .ignore();

    res.status(201).json({
      message: `Plant ${plantId} was successfully added`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to add plant ${error}`,
      error: error,
    });
  }
};

module.exports = {
  index,
  findOne,
  remove,
  add,
};
