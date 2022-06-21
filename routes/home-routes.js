const router = require("express").Router();
const { Review, User } = require("../models");
const withAuth = require("../utils/auth");
const axios = require("axios");
function get() {
  var recs_name = sessionStorage.getItem("userGenre");
  var recs_year = sessionStorage.getItem("searchYear");
  console.log(userGenre);
}

router.get("/", async (req, res) => {
  res.render("homepg", { loggedIn: req.session.loggedIn });
});

router.get("/discover", withAuth, async (req, res) => {
  res.render("discoverpg", { loggedIn: req.session.loggedIn });
});

router.get("/quiz", withAuth, async (req, res) => {
  res.render("quiz", { loggedIn: req.session.loggedIn });
});

router.get("/bookrecs", withAuth, async (req, res) => {
  res.render("bookrecs", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signUp", async (req, res) => {
  res.render("signUp", { loggedIn: req.session.loggedIn });
});



router.get("/booklog", async (req, res) => {
  // router.get("/", withAuth, async (req, res) => {
    try {
      const reviewData = await Review.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });

      const reviews = reviewData.map((review) => review.get({ plain: true }));

      res.render("all-booklogs", {
        loggedIn: req.session.loggedIn,
        // layout: "booklog-main",
        reviews,
      });
    } catch (err) {
      res.redirect("login");
    }
  });
  // res.render("all-booklogs", { loggedIn: req.session.loggedIn });
// );
router.get("/booklog/new-review", async (req, res) => {
  res.render("new-booklog", { loggedIn: req.session.loggedIn });
});

router.get("/booklog/all-booklogs", async (req, res) => {
  res.render("all-booklogs", { loggedIn: req.session.loggedIn });
});


router.get("/discover/genre/:genre_name", async (req, res) => {
  try {
    const response = await axios.get(
      `https://hapi-books.p.rapidapi.com/week/${req.params.genre_name}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "e692b18ceemshac75a665f1c063ap11319ejsnf2e882d220d2",
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
        },
      }
    );
    //spread op- for all bookObj, recreating and applying summary
    response.data = response.data.map((bookObj) => {
      return { ...bookObj, summary: bookObj.name.slice(0, 25) + "..." };
    });
    console.log(response.data);
    res.render("genres", {
      loggedIn: req.session.loggedIn,
      genre_name: req.params.genre_name,
      genreData: response.data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/bookrecs/:recs_name/:recs_year", async (req, res) => {
  try {
    const response = await axios.get(
      `https://hapi-books.p.rapidapi.com/nominees/${req.params.recs_name}/${req.params.recs_year}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "e692b18ceemshac75a665f1c063ap11319ejsnf2e882d220d2",
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
        },
      }
    );
    //spread op- for all bookObj, recreating and applying summary
    response.data = response.data.map((bookObj) => {
      return { ...bookObj, summary: bookObj.name.slice(0, 20) + "..." };
    });
    console.log(response.data);
    res.render("bookrecs", {
      loggedIn: req.session.loggedIn,
      recs_name: req.params.recs_name,
      recsData: response.data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
