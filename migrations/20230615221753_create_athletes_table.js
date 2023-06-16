/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("athletes", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("contact").notNullable();
    table.string("event").notNullable();
    table
      .string("attendance_status")
      .checkIn(["Not Confirmed", "Attending", "Not Attending", "Waitlist"]);
    table.integer("age").notNullable();
    table.string("school_id").notNullable();
    table.string("wheelchair_ambulant").notNullable();
    table.string("borough").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("athletes");
};
