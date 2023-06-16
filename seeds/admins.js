/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("admins").del();
  await knex("admins").insert([
    {
      id: 1,
      first_name: "Mary",
      last_name: "Jane",
      password: "khit2d378",
      contact: "7543969861",
      school_id: 1,
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      password: "xv79dt123g",
      contact: "7543969861",
      school_id: 1,
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Brown",
      password: "i7td1gou",
      contact: "7543969861",
      school_id: 1,
    },
    {
      id: 4,
      first_name: "Will",
      last_name: "Sharpe",
      password: "9ydhiph",
      contact: "7543969861",
      school_id: 1,
    },
    {
      id: 5,
      first_name: "Thomas",
      last_name: "Whyte",
      password: "o8yo0yxg2h3",
      contact: "7543969861",
      school_id: 1,
    },
  ]);
};
