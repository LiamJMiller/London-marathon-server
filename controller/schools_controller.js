const knex = require("knex")(require("../knexfile"));

const getSchools = () => {
    console.log("Someone tried to get schools.")
}

const postToSchools = () => {
    console.log("Someone tried to create a school.")
}

const putSchool = () => {
    console.log("Someone tried to edit a school.")
}

const deleteSchool = () => {
    console.log("Someone tried to delete a school.")
}

module.exports = {
    getSchools,
    postToSchools,
    putSchool,
    deleteSchool
};

