/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("plantUse", (table) => {
    table.increments("id").primary();
    table.integer("plant_id").references("user.id").onDelete("RESTRICT");
    table.integer("use_id").references("use.id").onDelete("RESTRICT");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("plantUse");
};
