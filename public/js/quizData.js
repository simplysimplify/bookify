const startButton = document.getElementById("#start-button");
var currentQ = 0;
const userAnswers = [];

let genres = [
  "Sci-Fi",
  "Finance",
  "Romance",
  "Autobiography",
  "Horror",
  "Mystery",
  "History",
  "Thriller",
  "Fantasy",
  "Adventure",
  "Detective",
  "True-Crime",
  "Literary-Fiction",
  "Poetry",
];

for (let i = genres.length - 1; i >= 1; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
  let temp = genres[j];
  genres[j] = genres[i];
  genres[i] = temp;
}
console.log(genres);

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
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs");
  }
  store();
  changeQandA();
});

btn2.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs");
  }
  store();
  changeQandA();
});

btn3.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs");
  }
  store();
  changeQandA();
});

btn4.addEventListener("click", function () {
  userAnswers[currentQ] = this.textContent;
  console.log(userAnswers);
  currentQ++;
  if (currentQ === questions.length) {
    document.location.replace("/bookrecs");
  }
  store();
  changeQandA();
});

function store() {
  var userGenre = userAnswers[0];
  // var userLength = userAnswers[1];
  // var userFic = userAnswers[2];
  sessionStorage.setItem("userGenre", userGenre);
  // sessionStorage.setItem("userLength", userLength);
  // sessionStorage.setItem("userFic", userFic);
  console.log(userGenre);
}
