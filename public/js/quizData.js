//selecting elements from the html/handlebars
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let quizElement = document.querySelector(".quiz");
let questionElement = document.getElementById("question");
let answerButton = document.querySelectorAll(".answer-button");
let quizOverElement = document.querySelector(".quiz-over");
let quizStarted = false
let body = document.body
let restartBtn = document.createElement("a")

//setting the start page
quizElement.style.display = "none";
// gameOverElement.style.display = "none";

//question bank
let question1 = {
    title: "What are you in the mood for?",
    choices: ["Something motivational", "Something adventurous", "Something suspenseful", "Something calming"],
    answer: ""
}
let question2 = {
    title: "Which do you prefer?",
    choices: ["Series", "Standalone"],
}
let question3 = {
    title: "Which genre would you like to read?",
    choices: ["Mystery","Fantasy","Thriller","History","Inspirational"],
}
let question4 = {
    title: "Which do you prefer?",
    choices: ["Fiction","Non-fiction"],
}
let questions = [question1, question2, question3, question4];


// let currentQuestion;

function startQuiz() {
    startScreen.style.display = "none";
    quizElement.style.display = "flex";
    writeQuestion();
    createRestart();
    const quizStarted = true 
}

function createRestart() {
    // <a href="/quiz" class="btn btn-lg col-md-3 mx-auto my-auto d-block">Restart?</a>
    restartBtn.classList.add("btn", "btn-lg", "col-md-3", "mx-auto", "my-auto", "d-block")
    restartBtn.setAttribute("href", "/quiz")
    restartBtn.textContent = "Restart?"
    body.appendChild(restartBtn)
}

// handles displaying a question
function writeQuestion() {
    // displays question
    questionElement.textContent = questions[0].title;

    // quiz buttons
    for (let i = 0; i < questions[0].choices.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questions[0].choices[i];
        answerButton.setAttribute("class", "answer-button btn btn-light m-2 text-left");
        questionElement.appendChild(answerButton);
        answerButton.addEventListener("click", newQuestion);
    }
}


function newQuestion() {
  questionElement.textContent = questions[1].title;

      for (let i = 0; i < questions[1].choices.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questions[1].choices[i];
        answerButton.setAttribute("class", "answer-button btn btn-light m-2 text-left");
        questionElement.appendChild(answerButton);
        answerButton.addEventListener("click", newQuestion1);
    }
}

function newQuestion1() {
    questionElement.textContent = questions[2].title;

    for (let i = 0; i < questions[2].choices.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questions[2].choices[i];
        answerButton.setAttribute("class", "answer-button btn btn-light m-2 text-left");
        questionElement.appendChild(answerButton);
        answerButton.addEventListener("click", newQuestion2);
    }
}

function newQuestion2() {
    questionElement.textContent = questions[2].title;

    for (let i = 0; i < questions[3].choices.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questions[3].choices[i];
        answerButton.setAttribute("class", "answer-button btn btn-light m-2 text-left");
        questionElement.appendChild(answerButton);
        answerButton.addEventListener("click", quizOver);
    }
}

// ends quiz
function quizOver() {
    quizElement.style.display = "none"
    questions = [question1, question2, question3, question4];

    body.removeChild(restartBtn)
    quizElement.style.display = "flex";
    const userData =  [
        userMood = question1.answer,
        userSeries = question2.answer,
        userGenre = question3.answer,
        userFiction = question4.answer,
    ]
    console.log(userData)
    document.location.replace("/discover");
}



startButton.addEventListener("click", startQuiz)






// module.exports = userData;