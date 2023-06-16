const knex = require("knex")(require("../knexfile"));

const getAdmins = () => {
    console.log("Someone tried to get admins.")
}

const postToAdmins = () => {
    console.log("Someone tried to create an admin.")
}

const putAdmin = () => {
    console.log("Someone tried to edit an admin.")
}

const deleteAdmin = () => {
    console.log("Someone tried to delete an admin.")
}

module.exports = {
    getAdmins,
    postToAdmins,
    putAdmin,
    deleteAdmin
};

