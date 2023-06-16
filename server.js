require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const athletesRoutes = require("./routes/athletes_routes");
app.use("/athletes", athletesRoutes);

const adminsRoutes = require("./routes/admins_routes");
app.use("/admins", adminsRoutes);

const schoolsRoutes = require("./routes/schools_routes");
app.use("/schools", schoolsRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});