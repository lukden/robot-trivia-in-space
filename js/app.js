// /*-----------Constants----------*/

import { getQuiz } from "../js-arrays/quiz.js"


// var answers, correctAnswer, a, b, c, d

const scienceQuestions = [
  {
    question: "Which planet is the 3rd closest to the sun?",
    choices: ["Mars",
     "Saturn",
     "Pluto",
     "Earth",
    ],
    correctAnswer: "Earth",
  },
  {
    question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?",
    choiceA: "Play Doom II",
    choiceB: "Drive tiny cars",
    choiceC: "Cook food",
    choiceD: "Find landmines",
    correctAnswer: "Cook food",
  },
  {
    question: "What is the country of origin of the first living creature sent into space?",
    choiceA: "China",
    choiceB: "United States of America",
    choiceC: "Soviet Union",
    choiceD: "United Kingdom",
    correctAnswer: "Soviet Union",
  },
  {
    question: "Dark matter matter makes up this percentage of all matter in the universe?",
    choiceA: "15%",
    choiceB: "27%",
    choiceC: "40%",
    choiceD: "53%",
    answer: "27%",
  }
]

const correctAnswer = ["D", "C", "C", "D"]
// console.log(scienceQuestions)
const result = scienceQuestions.map(questiony => ({ text: questiony.question, choices: questiony.choices }));
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

let rightAnswers = []
let wrongAnswers = []
let pickedCategory = "scienceQuestions"
let winner
let currentAnswer = []
let currentCorrect
let quizArr = []

/*-------------Cached Element References----------*/

const playerChoice = document.querySelector("player-choice")
const aBtn = document.querySelector("#a-button")
const bBtn = document.querySelector("#b-button")
const cBtn = document.querySelector("#c-button")
const dBtn = document.querySelector("#d-button")
// const sumOfCorrect = document.querySelector("sumCorrect")
// const sumOfIncorrect = document.querySelector("sumIncorrect")
const submitBtn = document.getElementById('submit')
const body = document.querySelector("body")
const quizContainer = document.querySelector('#quiz-container')
const quiz = document.querySelectorAll(".quiz")
const qs = document.getElementById('questions')
const gameStatus = document.getElementById("game-status")
const choicesArr = document.getElementById("choices")

/*---------------Event Listeners---------*/

aBtn.addEventListener("click", function (){
  console.log(currentAnswer)
  currentAnswer.push("A")
})

bBtn.addEventListener("click", function (){
  console.log(currentAnswer)
  currentAnswer.push("B")
})

cBtn.addEventListener("click", function (){
  console.log(currentAnswer)
  currentAnswer.push("C")
})

dBtn.addEventListener("click", function (){
  console.log(currentAnswer)
  currentAnswer.push("D")
})

console.log(currentAnswer)


submitBtn.addEventListener("click", () => {
  console.log(getScienceQuestions())
})

submitBtn.addEventListener("click", createQuestion)


/*-----------functions-------------*/

function createQuestion(evt) {
  let object = getScienceQuestions()
  console.log(object)
  const newQuestion = {
    text: object.text,
    choices: object.choices
  }
  quizArr.push(newQuestion)
  render()
}



function appendQuestion(ques, idx) {
  console.log(ques)
  let questionCard = document.createElement("div")
  questionCard.className = `card ${ques.text.toLowerCase}`
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
  </div>`
  quizContainer.appendChild(questionCard)
}
// function init() {
//   quizArr = [null, null, null]
//   winner = null
//   currentQuestion = null
//   gameStatus.textContent = "Choose a category to start!"
//   render()
// }

function render(){

  quizContainer.innerHTML = ""
  // quotes is an array of quote objects
  quizArr.forEach((ques, idx) => {
    // quote is an object with the shape of:
    // { artist: "artist name", text: "quote" }
    appendQuestion(ques, idx)
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

})
}