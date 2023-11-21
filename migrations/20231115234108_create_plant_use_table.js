/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("plantUse", (table) => {
    table.increments("id").primary();
    table
      .integer("plant_id")
      .unsigned()
      .references("plant.id")
      .onDelete("RESTRICT");
    table
      .integer("healthUse_id")
      .unsigned()
      .references("healthUse.id")
      .onDelete("RESTRICT");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("plantUse");
};
