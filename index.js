const express = require("express");
const cors = require("cors");
const app = express();
const favoritesRoute = require("./routes/favorites-routes");
const categoriesRoute = require("./routes/categories-route");
const resultsRoute = require("./routes/results-routes");
const loginRoute = require("./routes/login-routes");

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

// app.use("/login", loginRoute);
app.use("/favorites", favoritesRoute);
app.use("/categories", categoriesRoute);
app.use("/results", resultsRoute);

app.listen(5050, function () {
  console.log("running on port 5050");
});
