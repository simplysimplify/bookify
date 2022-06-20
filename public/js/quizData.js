const startButton = document.getElementById("#start-button");
var currentQ = 0;
const userAnswers = [];

let genres = [
  "Science-Fiction", //
  "Finance", //no
  "Romance", //
  "Memoir-Autobiography", //
  "Horror", //
  "Mystery", //
  "History", //
  "Mystery-Thriller", //
  "Fantasy", //
  "Poetry", //
];

for (let i = genres.length - 1; i >= 1; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = genres[j];
  genres[j] = genres[i];
  genres[i] = temp;
}

//Declaration of elements
const question = document.getElementById("question");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

const questions = [
  "What genre do you prefer?",
  "What length of book do you prefer?",
  "Do you prefer fiction or non-fiction?",
];

const answers = [
  [genres[1], genres[2], genres[3], genres[4]],
  ["Long", "Medium", "Short", "Magazine"],
  ["Fiction", "Non-Fiction", "No Preference", "What is fiction?"],
];

changeQandA();

var answer = "";
function changeQandA() {
  (question.innerHTML = questions[currentQ]),
    (btn1.innerHTML = answers[currentQ][0]);
  btn2.innerHTML = answers[currentQ][1];
  btn3.innerHTML = answers[currentQ][2];
  btn4.innerHTML = answers[currentQ][3];
}

btn1.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  answer = userAnswers[0].toLocaleLowerCase();
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs/" + answer + "/" + years[0]);
  }
  store();
  changeQandA();
});

btn2.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  answer = userAnswers[0].toLocaleLowerCase();
  currentQ++;
  if (currentQ === questions.length) {
    //document.location.replace("/bookrecs");
    document.location.replace("/bookrecs/" + answer + "/" + years[0]);
  }
  store();
  changeQandA();
});

btn3.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  answer = userAnswers[0].toLocaleLowerCase();
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs/" + answer + "/" + years[0]);
  }
  store();
  changeQandA();
});

btn4.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  answer = userAnswers[0].toLocaleLowerCase();
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs/" + answer + "/" + years[0]);
  }
  store();
  changeQandA();
});

let years = [
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
];

for (let i = years.length - 1; i >= 1; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = years[j];
  years[j] = years[i];
  years[i] = temp;
}

function store() {
  var userGenre = userAnswers[0],
    searchYear = years[0];
  sessionStorage.setItem("userGenre", userGenre);
  sessionStorage.setItem("searchYear", searchYear);
}
