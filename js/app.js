// /*-----------Constants----------*/

// import { getQuiz } from "../js-arrays/quiz.js"


// var answers, correctAnswer, a, b, c, d

const scienceQuestions = [
  {
    question: "Which planet is the 3rd closest to the sun?",
    choices: ["Mars",
    "Saturn",
    "Pluto",
    "Earth",
    ],
    correctAnswer: "D",
  },
  {
    question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?",
    choices: ["Play Doom II",
    "Drive tiny cars",
    "Cook food",
    "Find landmines",],
    correctAnswer: "C",
  },
  {
    question: "What is the country of origin of the first living creature sent into space?",
    choices: 
    ["China",
  "United States of America",
  "Soviet Union",
  "United Kingdom",],
    correctAnswer: "C",
  },
  {
    question: "Dark matter matter makes up this percentage of all matter in the universe?",
    choices: ["15%",
      "27%",
      "40%",
      "53%",],
    correctAnswer: "B",
  }
]

let correctAnswers = []
let currentAnswer = []
// console.log(correctAnswers)
// console.log(currentAnswer)
// console.log(scienceQuestions)
const result = scienceQuestions.map(questiony => ({ text: questiony.question, choices: questiony.choices, answers: questiony.correctAnswer}));
console.log(result)

Array.prototype.values
const iterator = result.values();
for(const choices of iterator){
  console.log(choices)
}

for (let i = 0; i < scienceQuestions.length; i++){
  if (scienceQuestions[i] === null) {
    console.log(scienceQuestions.question) 
  }
  console.log(scienceQuestions)
}

function getScienceQuestions() {
  return result[Math.floor(Math.random() * result.length)]
}
console.log(getScienceQuestions())






/*-------------Variables-----------*/

// let win, lose, playerName, timer
let userAnswer = []
let rightAnswers = []
let wrongAnswers = []
let pickedCategory = "scienceQuestions"
let winner
let quizArr = []
let timerIntervalId
let hr, min, sec, seconds = 0


/*-------------Cached Element References----------*/

const playerChoice = document.querySelector(".player-choice")
const aBtn = document.querySelector("#a-button")
const bBtn = document.querySelector("#b-button")
const cBtn = document.querySelector("#c-button")
const dBtn = document.querySelector("#d-button")
const sumOfCorrect = document.querySelector("sumCorrect")
// const sumOfIncorrect = document.querySelector("sumIncorrect")
const scienceCat = document.getElementById("sci")
const submitBtn = document.getElementById('submit')
const body = document.querySelector("body")
const quizContainer = document.querySelector('#quiz-container')
const quiz = document.querySelectorAll(".quiz")
const qs = document.getElementById('questions')
const gameStatus = document.getElementById("game-status")
const choicesArr = document.getElementById("choices")
const nextQ = document.querySelector(".next")

/*---------------Event Listeners---------*/

scienceCat.addEventListener("click", createQuestion,
{
  once: true
})

aBtn.addEventListener("click", function (){
  currentAnswer.pop(0)
  // correctAnswers.pop(0)
  currentAnswer.push("A")
  userAnswer.push("A")
  console.log(userAnswer)
  // console.log("A")
  console.log(currentAnswer)
  console.log(correctAnswers)
  console.log(correctIncorrect(currentAnswer, correctAnswers)
  )
  // console.log(sumOfCorrectIncorrect(currentAnswer, correctAnswers))
})

// aBtn.addEventListener("click", function(){
//   scoreDisplay = sumOfCorrect.textContent;
//   console.log(parseInt(scoreDisplay) + parseInt(userInp))
//   sumOfCorrect.textContent = `${parseInt(scoreDisplay) + parseInt(userInp)}`
// })

// console.log(sumOfCorrectIncorrect(currentAnswer, correctAnswers))

console.log(wrongAnswers)

bBtn.addEventListener("click", function (){
  currentAnswer.pop(0)
  // correctAnswers.pop(0)
  currentAnswer.push("B")
  userAnswer.push("B")
  // console.log('B')
  console.log(currentAnswer)
  console.log(correctAnswers)
  console.log(correctIncorrect(currentAnswer, correctAnswers))
  // console.log(sumCorrectAnswers(currentAnswer, correctAnswers))
})

cBtn.addEventListener("click", function (){
  currentAnswer.pop(0)
  currentAnswer.push("C")
  userAnswer.push("C")
  
  // console.log('C')
  console.log(currentAnswer)
  console.log(correctAnswers)
  console.log(correctIncorrect(currentAnswer, correctAnswers))
})

dBtn.addEventListener("click", function (){
  currentAnswer.pop(0)
  // correctAnswers.pop(0)
  currentAnswer.push("D")
  userAnswer.push("D")

  // console.log('D')
  console.log(correctIncorrect(currentAnswer, correctAnswers))
  console.log(currentAnswer)
  console.log(correctAnswers)
  // console.log(correctIncorrect(currentAnswer, correctAnswers))
})

// console.log(correctAnswers)

submitBtn.addEventListener("click", () => {
  console.log(getScienceQuestions())
})

submitBtn.addEventListener("click", createQuestion)

// submitBtn.addEventListener("click", function(){
  // currentAnswer.push()
// })

submitBtn.addEventListener("click", () => {
console.log(correctIncorrect(currentAnswer, correctAnswers))
})

// nextQ.addEventListener("click", createQuestion)



/*-----------functions-------------*/

init();
function init(){
  // sumGuessCorrect.textContent = ""
  render()
}

function startTimer() {
  timerIntervalId = setInterval(tick, 750)
}

function renderTimer()
function createQuestion(evt) {
  let object = getScienceQuestions()
  console.log(object)
  const newQuestion = {
    text: object.text,
    choices: object.choices,
    answers: object.correctAnswer
  }
  correctAnswers.splice(0, 1, object.answers)
  // console.log(correctAnswers)
  quizArr.push(newQuestion)
  render()
}



function correctIncorrect(currentAnswer, correctAnswers){
  for(let i=0; i<currentAnswer.length; i++)
  if (currentAnswer[i] !== correctAnswers[i]) {
    return false; 
  }
    return true;
}



// function sumOfCorrectIncorrect(currentAnswer, correctAnswers){
//   for(let i=0; i<currentAnswer.length; i++)
//   if (currentAnswer[i] !== correctAnswers[i]) {
//     return wrongAnswers.concat("1")
//   }
//     return rightAnswers.contact("1")
// }
// const overlap = [...currentAnswer, ...correctAnswers];
// return overlap.filter(el => {
//   return currentAnswer.includes(el) && correctAnswers.includes(el)
// })
// console.log(correctIncorrect(currentAnswer, correctAnswers))



// const sumCorrectAnswers = (currentAnswer, correctAnswers) => {
//   const overlap = [...currentAnswer, ...correctAnswers];
//   return overlap.filter(el => {
//     return currentAnswer.includes(el) && correctAnswers.includes(el)
//   })
// }
// console.log(sumCorrectAnswers(currentAnswer, correctAnswers))



function appendQuestion(ques, idx) {
  let questionCard = document.createElement("div")
  questionCard.className = `card ${ques.text}`
  questionCard.innerHTML =
  `<div>
  <section class ="quiz">
    <p>Questions</p>
    <p id ="questions">${ques.text}</p>
    <div id="choice">
      <ul id="choices"> 
      <li id="a-q">${ques.choices[0]}</li>
      <li id="b-q">${ques.choices[1]}</li>
      <li id="c-q">${ques.choices[2]}</li>
      <li id="d-q">${ques.choices[3]}</li>
    </ul>
  </div>
  <div class="player-choice">
</div>
  <footer class="card-footer">
  <button id="a-button">A</button>
  <button id="b-button">B</button>
  <button id="c-button">C</button>
  <button id="d-button">D</button>
  <button class="next" type="button" id="delete-btn-${idx}">Next Question</button>
</footer>`
  quizContainer.appendChild(questionCard)
}

function deleteQuestion(evt) {
  const idx = evt.target.id.replace("delete-btn-", "")
  quizArr.splice(idx, 1)
  render()
}

function addDeleteBtnListeners() {
  const deleteQuestionBtns = document.querySelectorAll(".next")
  if(deleteQuestionBtns.length){
    deleteQuestionBtns.forEach(deleteQuestionBtn => {
      deleteQuestionBtn.addEventListener("click", deleteQuestion)
      // deleteQuestionBtns.forEach(deleteQuestionBtn => {
      //   deleteQuestionBtn.addEventListener("click", createQuestion)
    })
    deleteQuestionBtns.forEach(deleteQuestionBtn => {
      deleteQuestionBtn.addEventListener("click", createQuestion)
  })
}

}

// function init() {
//   quizArr = [null, null, null]
//   winner = null
//   currentQuestion = null
//   gameStatus.textContent = "Choose a category to start!"
//   render()
// }

// function winConditions(){
//   if {
//     checkAnswer(currentAnswer, correctAnswers)
//   }
// }
function render(){

  quizContainer.innerHTML = ""
  // quotes is an array of quote objects
  quizArr.forEach((ques, idx) => {
    // quote is an object with the shape of:
    // { artist: "artist name", text: "quote" }
    appendQuestion(ques, idx) 
  })
  addDeleteBtnListeners()
}
  // let q = scienceQuestions.question
  


// quizArr.forEach(function (row){
// submitBtn.addEventListener('click', handleClick)})

// function handleClick(evt){
//     const nextQuestion = evt.target.id === "submit"
//   const newQuestion = {
//     prompt: getQuiz(),
//     choices: getQuiz()
//   }
//   quiz.push(newQuestion)
//   render()
  // if(quiz[+(evt.target.id.replace("question",''))] !== null){
  //   return
  // } else if(winner !== null){
  //   return
  // } else {
  //   quiz[+(evt.target.id.replace("question",''))] ;
  // }

