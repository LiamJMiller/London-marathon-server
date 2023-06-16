const knex = require("knex")(require("../knexfile"));

const getAthletes = () => {
    console.log("Someone tried to get athletes.")
}

const postToAthletes = () => {
    console.log("Someone tried to create an athlete.")
}

const putAthlete = () => {
    console.log("Someone tried to edit an athlete.")
}

const deleteAthlete = () => {
    console.log("Someone tried to delete an athlete.")
}

module.exports = {
    getAthletes,
    postToAthletes,
    putAthlete,
    deleteAthlete
};

