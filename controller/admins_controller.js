const knex = require("knex")(require("../knexfile"));

const getAdminByEmail = (req, res) => {
  knex("admins")
    .where({ contact: req.body.contact })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send(`No Admin with this Email ${req.body.contact}.`);
      } else {
        res.status(200).json(result[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving Admin: ${err}`);
    });
};

const postToAdmins = () => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.password ||
    !req.body.contact ||
    !req.body.school_id
  ) {
    return res
      .status(400)
      .send("Please provide required information in the request");
  }
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!req.body.contact.match(mailformat)) {
    return res.status(400).send("Please provide a valid email");
  }

  knex("admins")
    .insert(req.body)
    .then((result) => {
      return knex("admins").where({ id: result[0] });
    })
    .then((addNewAdmin) => {
      res.status(201).json(addNewAdmin);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new Admin" });
    });
};

    const deleteAdmin = (req, res) => {
        knex("admins")
          .where({ id: req.params.id })
          .del()
          .then((result) => {
            if (result === 0) {
              return res.status(400).json({
                message: `admin with Id: ${req.params.id} to be deleted not found`,
              });
            }
            res.status(204).send();
          })
          .catch(() => {
            res.status(500).json({ message: "Unable to delete admin" });
          });
      };

module.exports = {
  getAdminByEmail,
  postToAdmins,
  deleteAdmin,
};
