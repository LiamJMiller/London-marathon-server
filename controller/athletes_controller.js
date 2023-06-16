const knex = require("knex")(require("../knexfile"));

const getAthletesBySchoolID = (req, res) => {
  console.log("Someone tried to get athletes by schoolID.");

  knex("athletes")
    .where({ school_id: req.params.schoolID })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).json({
          message: "Unable to find athletes with provided school_id.",
        });
      } else {
        const athletes = result;
        res.send(athletes);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error." });
    });
};

const postToAthletes = (req, res) => {
  console.log("Someone tried to create an athlete.");
  console.log("req.body: ", req.body);

  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.contact ||
    !req.body.event ||
    !req.body.age ||
    !req.body.borough ||
    !req.body.school_id ||
    !req.body.wheelchair_ambulant ||
    !req.body.attendance_status
  ) {
    res.status(400).send("Please provide required information in the request.");
  }
  //   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (!req.body.contact.match(mailformat)) {
  //     return res.status(400).send("Please provide a valid contact email.");
  //   }

  //   if (!validatePhone(req.body.contact_phone)) {
  //     console.log(req.body.contact_phone);
  //     return res.status(400).send("Please provide a valid phone");
  //   }
  else {
    knex("athletes")
      .insert(req.body)
      .then((result) => {
        res.send(req.body);
        // return knex("athletes").where({ id: result[0] });
      })
      // .then((createdWarehouse) => {
      //   res.status(201).json(createdWarehouse);
      // })
      .catch(() => {
        res.status(500).json({ message: "Unable to create new athlete." });
      });
  }
};

const putAthlete = () => {
  console.log("Someone tried to edit an athlete.");
};

const deleteAthleteByID = (req, res) => {
  knex("athletes")
    .where({ id: req.params.athleteID })
    .then((result) => {
      if (result.length === 0) {
        return res.status(400).json({
          message: `Athlete with ID ${req.params.athleteID} to be deleted not found.`,
        });
      }

      knex("athletes")
        .where({ id: req.params.athleteID })
        .del()
        .then(() => {
          res.status(204).send();
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getAthletesBySchoolID,
  postToAthletes,
  putAthlete,
  deleteAthleteByID,
};
