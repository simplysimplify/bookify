const router = require("express").Router();
const axios = require("axios");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f692aaa3femsh7cccd252b5d2998p118cb8jsn80bf8949d42a",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

router.get("/:bookgenre", async (req, res) => {
  // Clears variable to repopulate.
  const response = [];
  // Gets the top books in a genre in the current year.
  try {
    const response = await axios.get(
      `https://hapi-books.p.rapidapi.com/nominees/${req.params.bookgenre}/2021`,
      options
    );
    console.log(response.data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
