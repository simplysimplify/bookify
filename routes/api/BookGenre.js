const router = require('express').Router();
const axios = require('axios');

// Link to the rapidapi documentation.
// https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/


// Sets options variable for the book api url call.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0edd9c1b88mshb117d5bb18f030dp1c46bfjsn9ea78bf1adf7",
    "X-RapidAPI-Host": "https://hapi-books.herokuapp.com",
  },
};

router.get('/:bookgenre', async (req, res) => {
    // Clears variable to repopulate.
  const response = []
  // Gets the top books in a genre in the current week.
  try {
    const response = await axios.get(`https://hapi-books.herokuapp.com/week/${req.params.bookgenre}`, options)
    console.log(response.data)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/:bookgenre', async (req, res) => {
  // Clears variable to repopulate.
  const response = []
  // Gets the top books in a genre in the current year.
  try {
    const response = await axios.get(`https://hapi-books.herokuapp.com/nominees/${req.params.bookgenre}/2021`, options)
    console.log(response.data)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;