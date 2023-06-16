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
      event: "Running",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 2,
      first_name: "Tom",
      last_name: "Brown",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 3,
      first_name: "Chrissy",
      last_name: "Whyte",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 4,
      first_name: "Isobella",
      last_name: "Lawrence",
      contact: "example7@example.com",
      event: "walking",
      attendance_status: "Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 5,
      first_name: "Rhonda",
      last_name: "Nunez",
      contact: "example10@example.com",
      event: "walking",
      attendance_status: "Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 6,
      first_name: "Alessia",
      last_name: "Tucker",
      contact: "example10@example.com",
      event: "walking",
      attendance_status: "Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 7,
      first_name: "Cory",
      last_name: "Walsh",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 8,
      first_name: "Nathaniel",
      last_name: "Casey",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Waitlist",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 9,
      first_name: "Stella",
      last_name: "Rosales",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Waitlist",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 10,
      first_name: "Nadine",
      last_name: "Paul",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 11,
      first_name: "Ralph",
      last_name: "Campbell",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 12,
      first_name: "Saba",
      last_name: "Mcguire",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: false,
      borough: "The Shire"
    },
    {
      id: 14,
      first_name: "Armaan",
      last_name: "Pittman",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Confirmed",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: true,
      borough: "The Shire"
    },
    {
      id: 15,
      first_name: "Rosanna",
      last_name: "Barrett",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Not Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: true,
      borough: "The Shire"
    },
    {
      id: 16,
      first_name: "Jon",
      last_name: "Mccarthy",
      contact: "example10@example.com",
      event: "Running",
      attendance_status: "Attending",
      age: 15,
      school_id: 1,
      wheelchair_ambulant: true,
      borough: "The Shire"
    },
  ]);
};
