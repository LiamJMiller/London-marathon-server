/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("admin").del();
  await knex("admin").insert([
    {
      id: 1,
      first_name: "Mary",
      last_name: "Jane",
      password: "khit2d378",
      email: "example@example.com",
      school: "London High School",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      password: "xv79dt123g",
      email: "example1@example.com",
      school: "Manchester Secondary School",
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Brown",
      password: "i7td1gou",
      email: "example2@example.com",
      school: "Brighton Secondary School",
    },
    {
      id: 4,
      first_name: "Will",
      last_name: "Sharpe",
      password: "9ydhiph",
      email: "example3@example.com",
      school: "Norwich High School",
    },
    {
      id: 5,
      first_name: "Thomas",
      last_name: "Whyte",
      password: "o8yo0yxg2h3",
      email: "example4@example.com",
      school: "Ipswich Secondary School",
    },
  ]);
};
