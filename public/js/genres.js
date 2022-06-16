const genres = [""];
function getBookData(genre) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://hapi-books.p.rapidapi.com/week/${genre}`,
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
