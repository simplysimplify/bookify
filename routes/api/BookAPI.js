require 

// Link to the rapidapi documentation.
// https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f692aaa3femsh7cccd252b5d2998p118cb8jsn80bf8949d42a',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

// Use these variables to insert data into the api strings.
const bookID = ""
const bookName = ""
const bookGenre = ""
const bookTopMonth = ""

// Gets a given book based on its ID. Can be used to get a random book using a random string of numbers.
fetch(`https://hapi-books.p.rapidapi.com/book/${bookID}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// Gets info on a given book using the books name.
fetch(`https://hapi-books.p.rapidapi.com/search/${bookName}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// Gets the top 3 books of a given genre in the current year.
fetch(`https://hapi-books.p.rapidapi.com/week/${bookYear}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// Gets the top 3 books in a genre in the current week.
fetch(`https://hapi-books.p.rapidapi.com/week/${bookWeek}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));