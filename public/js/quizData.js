const startButton = document.getElementById("#start-button");
var currentQ = 0
const userAnswers = []

//Declaration of elements
const question = document.getElementById("question")
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")

const questions = [
    "What genre do you prefer?",
    "What length of book do you prefer?",
    "Do you prefer fiction or non-fiction?",
]

const answers = [
    ["Fantasy", "Futuristic", "Midevil", "Romance"],
    ["Long", "Medium", "Short", "Magazine"],
    ["Fiction", "Non-Fiction", "No Preference", "What is fiction?"],
]

changeQandA()

function changeQandA() {
    question.innerHTML = questions[currentQ],
    btn1.innerHTML = answers[currentQ][0]
    btn2.innerHTML = answers[currentQ][1]
    btn3.innerHTML = answers[currentQ][2]
    btn4.innerHTML = answers[currentQ][3]
}

btn1.addEventListener("click", function () {
    userAnswers[currentQ] = this.textContent
    console.log(userAnswers)
    currentQ++
    if (currentQ === questions.length) {
        document.location.replace("/results")
    }
    changeQandA()
})

btn2.addEventListener("click", function () {
    userAnswers[currentQ] = this.textContent
    console.log(userAnswers)
    currentQ++
    if (currentQ === questions.length) {
        document.location.replace("/results")
    }
    changeQandA()
})

btn3.addEventListener("click", function () {
    userAnswers[currentQ] = this.textContent
    console.log(userAnswers)
    currentQ++
    if (currentQ === questions.length) {
        document.location.replace("/results")
    }
    changeQandA()
})

btn4.addEventListener("click", function () {
    userAnswers[currentQ] = this.textContent
    console.log(userAnswers)
    currentQ++
    if (currentQ === questions.length) {
        document.location.replace("/results")
    }
    changeQandA()
})