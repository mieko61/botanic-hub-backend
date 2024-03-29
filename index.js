const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const favoritesRoutes = require("./routes/favorites-routes");
const categoriesRoutes = require("./routes/categories-routes");
const healthUseRoutes = require("./routes/healthUse-routes");
const resultsRoutes = require("./routes/results-routes");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const plantDetailsRoutes = require("./routes/plant-details-routes");
const jwt = require("jsonwebtoken");

const origin = process.env.CORS_ORIGIN;

app.use(
  cors({
    options: origin,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Route endpoint");
  res.send("Welcome to Plants");
});

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/favorites", favoritesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/healthUse", healthUseRoutes);
app.use("/results", resultsRoutes);
app.use("/plantdetails", plantDetailsRoutes);

app.listen(process.env.PORT || 5050, function () {
  console.log("running on port 5050");
});
