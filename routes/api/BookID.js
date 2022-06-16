const router = require('express').Router();
const axios = require('axios');

// Link to the rapidapi documentation.
// https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/


// Sets options variable for the book api url call.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f692aaa3femsh7cccd252b5d2998p118cb8jsn80bf8949d42a",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

router.get('/:bookID', async (req, res) => {
  // Gets details regarding the book with associated id.
  try {
    const response = await axios.get(`https://hapi-books.p.rapidapi.com/book/${req.params.bookID}`, options)
    console.log(response.data)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;