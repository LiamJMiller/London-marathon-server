const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin_controller");

// "/admin"

router
  .route("/")
  .get(adminController.getadmin)
  .post(adminController.postToadmin);

router
  .route()
  .put()
  .delete();

module.exports = router;