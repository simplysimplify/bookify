const genres = [""];
function getBookData(genre) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://hapi-books.p.rapidapi.com/week/${genre}`,
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
