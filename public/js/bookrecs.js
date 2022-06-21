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
      "X-RapidAPI-Key": "e692b18ceemshac75a665f1c063ap11319ejsnf2e882d220d2",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (data) {
    console.log(data);
  });
}
