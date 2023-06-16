/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("schools").del();
    await knex("schools").insert([
      {
        id: 1,
        name: "The Shire College",
      },
    ]);
  };
  