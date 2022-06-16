const router = require("express").Router();
const withAuth = require("../utils/auth");
const axios = require("axios");

router.get("/", async (req, res) => {
  res.render("homepg", { loggedIn: req.session.loggedIn });
});

router.get("/discover", withAuth, async (req, res) => {
  res.render("discoverpg", { loggedIn: req.session.loggedIn });
});

router.get("/quiz", withAuth, async (req, res) => {
  res.render("quiz", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signUp", async (req, res) => {
  res.render("signUp", { loggedIn: req.session.loggedIn });
});

router.get("/discover/genre/:genre_name", async (req, res) => {
  try {
    const response = await axios.get(
      `https://hapi-books.p.rapidapi.com/week/${req.params.genre_name}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "62fd737dc8mshdc4b2103750a6cap1678d6jsn9a8771e39bcf",
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
        },
      }
    );
    console.log(response.data);
    res.render("genres", {
      genre_name: req.params.genre_name,
      genreData: response.data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
