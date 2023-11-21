const express = require("express");
const cors = require("cors");
const app = express();
const favoritesRoutes = require("./routes/favorites-routes");
const categoriesRoutes = require("./routes/categories-routes");
const healthUseRoutes = require("./routes/healthUse-routes");
const resultsRoutes = require("./routes/results-routes");
const authRoutes = require("./routes/auth-routes");

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
app.use("/favorites", favoritesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/healthUse", healthUseRoutes);
app.use("/results", resultsRoutes);

app.listen(5050, function () {
  console.log("running on port 5050");
});
