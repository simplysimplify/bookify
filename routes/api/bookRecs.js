const router = require("express").Router();
const axios = require("axios");
function get() {
  var userGenre = sessionStorage.getItem("userGenre");
  var recs_year = sessionStorage.getItem("searchYear");
  console.log(userGenre);
}
// hapi-books.p.rapidapi.com
router.get("/bookrecs/:recs_name/:recs_year", async (req, res) => {
  try {
    const response = await axios.get(
      `https://hapi-books.herokuapp.com/nominees/${req.params.recs_name}/${req.params.recs_year}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "0edd9c1b88mshb117d5bb18f030dp1c46bfjsn9ea78bf1adf7",
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
