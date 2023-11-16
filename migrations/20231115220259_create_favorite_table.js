/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favorite", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("user.id").onDelete("RESTRICT");
    table.integer("plant_id").references("user.id").onDelete("RESTRICT");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("favorite");
};
