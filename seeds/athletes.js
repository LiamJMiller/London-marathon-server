/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("athlete").del();
  await knex("athlete").insert([
    {
      id: 1,
      first_name: "Jack",
      last_name: "Jill",
      attendance_status: "Not Confirmed",
      parent_email: "example10@example.com",
      age: "15"
    },
    {
      id: 2,
      first_name: "Richie",
      last_name: "Rich",
      attendance_status: "Not Attending",
      parent_email: "example11@example.com",
      age: "17"
    },
    {
      id: 3,
      first_name: "Harry",
      last_name: "Potter",
      attendance_status: "Attending",
      parent_email: "example12@example.com",
      age: "16"
    },
    {
      id: 4,
      first_name: "Mathilda",
      last_name: "Shelley",
      attendance_status: "Waitlist",
      parent_email: "example13@example.com",
      age: "14"
    },
    {
      id: 5,
      first_name: "Kevin",
      last_name: "Alone",
      attendance_status: "Attending",
      parent_email: "example14@example.com",
      age: "15"
    },
    {
      id: 6,
      first_name: "Jimmy",
      last_name: "Nuetron",
      attendance_status: "Not Confirmed",
      parent_email: "example15@example.com",
      age: "16"
    },
    {
      id: 7,
      first_name: "Timmy",
      last_name: "Turner",
      attendance_status: "Not Attending",
      parent_email: "example16@example.com",
      age: "15"
    },
    {
      id: 8,
      first_name: "Dexter",
      last_name: "Labs",
      attendance_status: "Attending",
      parent_email: "example17@example.com",
      age: "17"
    },
    {
      id: 9,
      first_name: "Tom",
      last_name: "Jerry",
      attendance_status: "Waitlist",
      parent_email: "example18@example.com",
      age: "14"
    },
    {
      id: 10,
      first_name: "Pinkpanter",
      last_name: "Pink",
      attendance_status: "Waitlist",
      parent_email: "example14@example.com",
      age: "17"
    },
  ]);
};
