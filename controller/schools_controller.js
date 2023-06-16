const knex = require("knex")(require("../knexfile"));

const getSchools = () => {
    console.log("Someone tried to get schools.")
}

const getSchoolByID = (req, res) => {
    console.log("Someone tried to get schools.");

    knex("schools")
    .where({ id: req.params.schoolID })
    .then((result) => {
        if (result.length === 0) {
            res
            .status(404)
            .json({ message: "Unable to find school with provided ID." });
        } else {
            const schoolName =  result[0].name;
            res.send(schoolName);
        }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error." });
    });
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
    getSchoolByID,
    postToSchools,
    putSchool,
    deleteSchool
};

