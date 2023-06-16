const express = require("express");
const router = express.Router();
const adminsController = require("../controller/admins_controller");

// "/admin"

router
  .route("/")
  .get(adminsController.getAdmins)
  .post(adminsController.postToAdmins);

router
  .route("/:adminID")
  .put(adminsController.putAdmin)
  .delete(adminsController.deleteAdmin);

module.exports = router;