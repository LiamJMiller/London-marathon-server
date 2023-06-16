/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("athletes").del();
  await knex("athletes").insert([
    {
      id: 1,
      first_name: "Jack",
      last_name: "Jill",
      contact: "example10@example.com",
      event: "Run Run Run",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 2,
      first_name: "Jack",
      last_name: "Jill",
      contact: "example10@example.com",
      event: "Run Run Run",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 3,
      first_name: "Jack",
      last_name: "Jill",
      contact: "example10@example.com",
      event: "Run Run Run",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
  ]);
};
