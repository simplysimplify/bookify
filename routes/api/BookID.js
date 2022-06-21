const router = require('express').Router();
const axios = require('axios');

// Link to the rapidapi documentation.
// https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/


// Sets options variable for the book api url call.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0edd9c1b88mshb117d5bb18f030dp1c46bfjsn9ea78bf1adf7",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

router.get('/:bookID', async (req, res) => {
  // Gets details regarding the book with associated id.
  try {
    const response = await axios.get(`https://hapi-books.herokuapp.com/book/${req.params.bookID}`, options)
    console.log(response.data)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;