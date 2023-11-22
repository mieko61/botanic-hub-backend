const express = require("express");
const cors = require("cors");
const app = express();
const favoritesRoutes = require("./routes/favorites-routes");
const categoriesRoutes = require("./routes/categories-routes");
const healthUseRoutes = require("./routes/healthUse-routes");
const resultsRoutes = require("./routes/results-routes");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const jwt = require("jsonwebtoken");

const origin = process.env.CORS_ORIGIN;

app.use(
  cors({
    options: origin,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/login") {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);
    if (token) {
      //console.log('Auth Token:', token);
      if (jwt.verify(token, process.env.JWT_KEY)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

function getToken(req) {
  if (!req.headers.authorization) {
    return;
  } else {
    return req.headers.authorization.split(" ")[1];
  }
}

const users = {
  "alice.jones@gmail.com": {
    id: 1,
    email: "alice.jones@gmail.com",
    password: "safeandsecure789",
    phone_number: 6739858762,
    name: "Alice Jones Corporation",
    info: 'Alice Jones Corporation is a forward-thinking business dedicated to making a positive impact on the world. With a passion for sustainability and community engagement, we are excited about the "Climate Awareness Page". This landing page will serve as a hub for promoting environmental awareness and encouraging collective action. Join us on this journey towards a greener future',
    role: "business",
    profile_pic:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projetcs: [22, 28],
  },
  "bob.smith@gmail.com": {
    id: 2,
    email: "bob.smith@gmail.com",
    password: "password1234",
    phone_number: 6739823779,
    name: "Bob Smith",
    info: "Results-driven and highly motivated Developer with a comprehensive background in coding and a commitment to continuous learning. Possessing a strong foundation in web development, I am dedicated to contributing valuable skills to the tech industry. Known for a creative mindset and a meticulous approach to problem-solving. Eager to leverage expertise in collaborative environments to drive innovation and achieve project success.",
    role: "developer",
    profile_pic:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projetcs: [28],
  },
};
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = users[username];
  if (user && user.password === password) {
    res.json({ token: jwt.sign({ name: user.email }, process.env.JWT_KEY) });
  } else {
    res.status(403).json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  }
});

app.get("/dashboard", async (req, res) => {
  // const profile = await knex("user").where({ id: req.user_id }).first();
  console.log("logged in");
  // delete profile.password;
  res.send("logged in");
});

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

app.listen(5050, function () {
  console.log("running on port 5050");
});
