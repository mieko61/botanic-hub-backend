const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  try {
    const allCategories = await knex.select("*").from("category");
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).send(`Unable to retrieve results: ${error}`);
  }
};

// const topics = async (req, res) => {
//   const categoryId = req.params.categoryId;
//   try {
//     const topicsFound = await knex("healthUse")
//       .join("category", "healthUse.category_id", "category.id")
//       .where("category.id", categoryId);
//     return res.status(200).json(topicsFound);
//   } catch (error) {
//     return res.status(500).send(`Unable to retrieve results: ${error}`);
//   }
// };

module.exports = { index };
