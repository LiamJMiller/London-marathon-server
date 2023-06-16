const express = require("express");
const router = express.Router();
const athletesController = require("../controller/athletes_controller");

// "/athletes"

router
  .route("/")
  .post(athletesController.postToAthletes);

router
  .route("/:schoolID")
  .get(athletesController.getAthletesBySchoolID)

router
  .route("/:athleteID")
  .put(athletesController.putAthlete)
  .delete(athletesController.deleteAthleteByID);

module.exports = router;