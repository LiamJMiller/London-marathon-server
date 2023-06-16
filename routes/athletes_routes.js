const express = require("express");
const router = express.Router();
const athletesController = require("../controller/athletes_controller");

// "/athletes"

router
  .route("/")
  .get(athletesController.getAthletes)
  .post(athletesController.postToAthletes);

router
  .route("/:athleteID")
  .put(athletesController.putAthlete)
  .delete(athletesController.deleteAthlete);

module.exports = router;