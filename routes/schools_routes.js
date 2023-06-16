const express = require("express");
const router = express.Router();
const schoolsController = require("../controller/schools_controller");

// "/schools"

router
  .route("/")
  .get(schoolsController.getSchools)
  .post(schoolsController.postToSchools);

router
  .route("/:schoolID")
  .put(schoolsController.putSchool)
  .delete(schoolsController.deleteSchool);

module.exports = router;