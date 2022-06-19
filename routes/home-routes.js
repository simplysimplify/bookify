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

router.get("/book-recs", withAuth, async (req, res) => {
  res.render("bookrecs", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signUp", async (req, res) => {
  res.render("signUp", { loggedIn: req.session.loggedIn });
});

router.get("/booklog", async (req, res) => {
  res.render("booklog-main", { loggedIn: req.session.loggedIn });
});
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
            "9cb82c8a29mshe86394bfe0926b3p177498jsn75cf10ba9874",
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


// router.get("/booklog/:book_name", async (req, res) => {
//   try {
//     const options = await axios.get(
//       `https://hapi-books.p.rapidapi.com/search/${req.params.book_name}`,
//       {
//         headers: {
//           "X-RapidAPI-Key":
//             "9cb82c8a29mshe86394bfe0926b3p177498jsn75cf10ba9874",
//           "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
//         },
//       }
//     );
//     const { name, cover } = options.data[0];
//     res.render("bookLog", { book: { name, cover } });
//     // console.log(options);
//     // res.status(200).json(options.data[0]);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
