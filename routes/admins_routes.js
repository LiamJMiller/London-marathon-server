const express = require("express");
const router = express.Router();
const adminsController = require("../controller/admins_controller");

// "/admins"

router
  .route("/")
  .get(adminsController.getAdminByEmail)
  .post(adminsController.postToAdmins);

router
  .route("/:adminID")
  .delete(adminsController.deleteAdmin);

module.exports = router;