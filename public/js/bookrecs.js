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
      "X-RapidAPI-Key": "d5b7852d0amshae97f9f551ea2a3p1e6b2djsn39ffa901b56b",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (data) {
    console.log(data);
  });
}
