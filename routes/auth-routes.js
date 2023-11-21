const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Please enter the required fields");
  }

  const hashedEmail = bcrypt.hashSync(email);

  const newUser = {
    name,
    email: hashedEmail,
  };

  try {
    await knex("user").insert(newUser);
    res.status(201).send("Registered successfully");
  } catch (error) {
    res.status(400).send("Failed registration");
  }
});

router.post("/login", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(404).send("Please enter the required fields");
  }

  const user = await knex("user").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  const isEmailCorrect = bcrypt.compareSync(email, user.email);

  if (!isEmailCorrect) {
    return res.status(400).send("Invalid email");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { exoiresIn: "24hr" }
  );

  res.send({ token });
});

module.exports = router;
