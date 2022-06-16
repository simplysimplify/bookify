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

router.get('/:bookgenre', async (req, res) => {
  // Gets the top books in a genre in the current week.
  try {
    const response = await axios.get(`https://hapi-books.p.rapidapi.com/week/${req.params.bookgenre}`, options)
    console.log(response)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/:bookgenre', async (req, res) => {
  // Gets the top books in a genre in the current year.
  try {
    const response = await axios.get(`'https://hapi-books.p.rapidapi.com/nominees/${req.params.bookgenre}/2022'`, options)
    console.log(response)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router; 