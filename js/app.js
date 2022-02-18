// /*-----------Constants----------*/

const audio = new Audio("../assets/images/pop.wav")
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
  },
  {
    question: "Which film series does not have four entries? ",
    choices: ["Twilight",
    "Die Hard",
    "The Hunger Games",
    "The Dirty Dozen",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which movie did Tom Hanks win an Oscar nomination for?",
    choices: ["Saving Private Ryan",
    "Forrest Gump",
    "Cast Away",
    "Big",],
    correctAnswer: "B",
  },
  {
    question: "This movie doesn't contain Nicolas Cage freaking out.",
    choices: 
    ["Honeymoon in Vegas",
  "Willy's Wonderland",
  "National Treasure",
  "The Wicker Man",],
    correctAnswer: "B",
  },
  {
    question: "Which movie doesn't break the fourth wall?",
    choices: ["Annie Hall",
      "Deadpool",
      "The Big Short",
      "Avengers: Endgame",],
    correctAnswer: "D",
  },
  {
    question: "Which continent is the only on earth with no active volcanoes? ",
    choices: ["Australia",
    "North America",
    "Asia",
    "Africa",
    ],
    correctAnswer: "A",
  },
  {
    question: "What country produces the most oxygen on earth?",
    choices: ["Brazil",
    "Peru",
    "Russia",
    "Canada",],
    correctAnswer: "C",
  },
  {
    question: "Which country covers the most time zones?",
    choices: 
    ["China",
  "France",
  "Russia",
  "USA",],
    correctAnswer: "C",
  },
  {
    question: "What is the most visited country?",
    choices: ["France",
      "Japan",
      "USA",
      "U.K.",],
    correctAnswer: "A",
  },
  {
    question: "Which utensil used to be seen as sacrilegous",
    choices: ["Spoon",
    "Fork",
    "Knife",
    "Spork",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which of these was a favorite pet during the Roman Empire?",
    choices: ["Snakes",
    "Ferrets",
    "Mice",
    "Antelope",],
    correctAnswer: "B",
  },
  {
    question: "How tall was Napolean Bonapart?",
    choices: 
    ["5'6",
  "4'9",
  "5'10",
  "5'2",],
    correctAnswer: "A",
  },
  {
    question: "What is the largest empire in human history?",
    choices: ["Roman Empire",
      "British Empire",
      "Mongol Empire",
      "Russian Empire",],
    correctAnswer: "C",
  }
]


let correctAnswers = []
let currentAnswer = []

let currentCategory


const result = scienceQuestions.map(questiony => ({ text: questiony.question, choices: questiony.choices, answers: questiony.correctAnswer}));
// console.log(result)

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

const sciQuestions = result.splice(0, 4)

function getScienceQuestions() {
  return sciQuestions.pop()
}
console.log(result)
const popQuest = result.splice(0, 4)
console.log(popQuest)
function getPopQuestions() {
  return popQuest.pop()
}
const imageQuest = result.splice(0, 4)

function getImageQuestions() {
  return imageQuest.pop()
}

console.log(imageQuest)

const histQuest = result.splice(0, 4)

function getHistQuestions() {
  return histQuest.pop()
}

console.log(histQuest)





/*-------------Variables-----------*/

let userAnswer = []
let rightAnswers = []
let wrongAnswers = []
let pickedCategory = "scienceQuestions"
let winner
let quizArr = []
let timerIntervalId
let hr, min, sec, seconds = 0
let correctAns = []
let incorrectAns = []

/*-------------Cached Element References----------*/

const timerEl = document.getElementById("timerEl")
const playerChoice = document.querySelector(".player-choice")
const aBtn = document.querySelector("#a-button")
const bBtn = document.querySelector("#b-button")
const cBtn = document.querySelector("#c-button")
const dBtn = document.querySelector("#d-button")
const cor = document.querySelector(".correct")
const sumOfCorrect = document.querySelector(".sumAnswers")

const scienceCat = document.getElementById("sci")
const popCultCat = document.getElementById("pop")
const imagesCat = document.getElementById("img")
const histCat = document.getElementById("hist")
const submitBtn = document.getElementById('submit')
const body = document.querySelector("body")
const quizContainer = document.querySelector('#quiz-container')
const quiz = document.querySelectorAll(".quiz")
const qs = document.getElementById('questions')
const gameStatus = document.getElementById("game-status")
const choicesArr = document.getElementById("choices")
const nextQ = document.querySelector(".next")

/*---------------Event Listeners---------*/


scienceCat.addEventListener("click", createQuestion)

popCultCat.addEventListener("click", createPopQuestion)

imagesCat.addEventListener("click", createImageQuestion)
histCat.addEventListener("click", createHistQuestion)



aBtn.addEventListener("click", function (){
  audio.play()
  currentAnswer.pop(0)

  currentAnswer.push("A")
  userAnswer.push("A")
  console.log(userAnswer)

  correctIncorrect(currentAnswer, correctAnswers)
  correctIncorrectPush(currentAnswer, correctAnswers)
  console.log(correctIncorrect(currentAnswer, correctAnswers))
  renderTimer()
})





bBtn.addEventListener("click", function (){
  audio.play()
  currentAnswer.pop(0)
  // correctAnswers.pop(0)
  currentAnswer.push("B")
  userAnswer.push("B")
  // console.log('B')
  correctIncorrect(currentAnswer, correctAnswers)
  correctIncorrectPush(currentAnswer, correctAnswers)


})
 console.log(correctAnswers)


cBtn.addEventListener("click", function (){
  audio.play()
  currentAnswer.pop(0)
  currentAnswer.push("C")

  console.log(currentAnswer)
  console.log(correctAnswers)
  correctIncorrect(currentAnswer, correctAnswers)
  correctIncorrectPush(currentAnswer, correctAnswers)

})



dBtn.addEventListener("click", function (){
  audio.play()
  currentAnswer.pop(0)

  currentAnswer.push("D")
  userAnswer.push("D")


  correctIncorrect(currentAnswer, correctAnswers)
  correctIncorrectPush(currentAnswer, correctAnswers)


})




submitBtn.addEventListener("click", () => {
  console.log(getScienceQuestions())
})

submitBtn.addEventListener("click", createQuestion)



submitBtn.addEventListener("click", () => {
console.log(correctIncorrect(currentAnswer, correctAnswers))
})




/*-----------functions-------------*/

init();
function init(){
  // sumGuessCorrect.textContent = ""
  render()
}

function startTimer() {
  timerIntervalId = setInterval(tick, 10)
}

function tick(){
  seconds++
  // console.log(seconds)
  renderTimer()
}

function renderTimer() {
  min = Math.floor(seconds / 60)
  hr = Math.floor(seconds / 3600)
  sec = min % 60
  hr = hr % 24
  if (sec < 10) {
    timerEl.innerText = `${sec}`
  }else {
    timerEl.innerText = `${sec}`
  }
}

function createQuestion(evt) {
  audio.play()
  currentCategory = 1
  let object = getScienceQuestions()
  console.log(object)
  let newQuestion = {
    text: object.text,
    choices: object.choices,
    answers: object.correctAnswer
  }
  correctAnswers.splice(0, 1, object.answers)
  // console.log(correctAnswers)
  quizArr.push(newQuestion)
  render()
}

function createPopQuestion(evt) {
  audio.play()
  currentCategory = 2
  let object = getPopQuestions()
  console.log(object)
  let newQuestion = {
    text: object.text,
    choices: object.choices,
    answers: object.correctAnswer
  }
  correctAnswers.splice(0, 1, object.answers)
  quizArr.push(newQuestion)
  render()
}

function createImageQuestion(evt) {
  audio.play()
  currentCategory = 3
  let object = getImageQuestions()
  console.log(object)
  let newQuestion = {
    text: object.text,
    choices: object.choices,
    answers: object.correctAnswer
  }
  correctAnswers.splice(0, 1, object.answers)
  quizArr.push(newQuestion)
  render()
}

function createHistQuestion(evt) {
  audio.play()
  currentCategory = 4
  let object = getHistQuestions()
  console.log(object)
  const newQuestion = {
    text: object.text,
    choices: object.choices,
    answers: object.correctAnswer
  }
  correctAnswers.splice(0, 1, object.answers)
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

function correctIncorrectPush (currentAnswer, correctAnswers){{
  for(let i = 0; i<currentAnswer.length; i++)
    if (currentAnswer[i] !== correctAnswers[i]) {
      incorrectAns.push("I")
      console.log(incorrectAns)
    } else {
    correctAns.push("C")
    console.log(correctAns)
    }
    registerWin(correctAns)
}}


function registerWin (correctAns){
  if (correctAns.length >= 10){
    return alert("You won!")
  }
}


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
  <div id="playAns">
  <button class="a-button">A</button>
  <button class="b-button">B</button>
  <button class="c-button">C</button>
  <button class="d-button">D</button>
  </div>
  <button class="next" id="delete-btn-${idx}">Next Question</button>
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
    })
    deleteQuestionBtns.forEach(deleteQuestionBtn => {
      if (currentCategory = 1) {
        deleteQuestionBtn.addEventListener("click", createQuestion)
      }else if (currentCategory = 2) {
        deleteQuestionBtn.addEventListener("click", createPopQuestion)
      }else if (currentCategory = 3) {
        deleteQuestionBtn.addEventListener("click", createImageQuestion)
      }else if (currentCategory = 4) {
        deleteQuestionBtn.addEventListener("click", createHistQuestion)
      }
    })
  }
}






function render(){
  quizContainer.innerHTML = ""
  quizArr.forEach((ques, idx) => {
    appendQuestion(ques, idx) 
  })
  addDeleteBtnListeners()
}

renderTimer()
timerEl.textContent = (timerEl.textContent === "Start") ? "Pause" : "Start"
if (timerIntervalId) {
clearInterval(timerIntervalId)
} else {
startTimer()
}
