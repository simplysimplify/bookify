function get() {
  var userGenre = sessionStorage.getItem("userGenre");
  var recs_year = sessionStorage.getItem("searchYear");
  console.log(userGenre);
}

const year = recs_year;
const genre = userGenre;
function getRecs(genre, year) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://hapi-books.p.rapidapi.com/nominees/${genre}/${year}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62fd737dc8mshdc4b2103750a6cap1678d6jsn9a8771e39bcf",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (data) {
    console.log(data);
  });
}
