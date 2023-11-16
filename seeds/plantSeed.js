const useData = require("../seed-data/use");
const plantData = require("../seed-data/plants");
const plantUseData = require("../seed-data/plantUse");
const userData = require("../seed-data/user");
const favoriteData = require("../seed-data/favorite");

exports.seed = async function (knex) {
  await knex("favorite").del();
  await knex("plantUse").del();
  await knex("user").del();
  await knex("plant").del();
  await knex("healthUse").del();
  await knex("healthUse").insert(useData);
  await knex("plant").insert(plantData);
  await knex("user").insert(userData);
  await knex("plantUse").insert(plantUseData);
  await knex("favorite").insert(favoriteData);
};
