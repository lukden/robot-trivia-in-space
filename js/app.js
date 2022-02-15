// /*-----------Constants----------*/

import { getQuiz } from "../js-arrays/quiz.js"


// var answers, correctAnswer, a, b, c, d

// const quizCategories = {
//   scienceQuestions: [
//     {
//     question: "Which planet is the 3rd closest to the sun?"
//     },
//     answers = [
//       a = "Mars",
//       b = "Uranus",
//       c = "Saturn",
//       d = "Earth",
//     ],
//     correctAnswer = {
//       d: "Jupiter"
//     },
//     {
//     question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?"
//     },
//     answers = [
//       a = "Play Doom II",
//       b = "Drive tiny cars",
//       c = "Cook food",
//       d = "Find landmines"
//     ],
//     correctAnswer = {
//       c: "Cook food"
//     },
//     {
//     question: "What is the country of origin of the first living creature sent into space?"
//     },
//     answers = [
//       a = "China",
//       b = "United States of America",
//       c = "Soviet Union",
//       d = "United Kingdom"
//     ],
//     correctAnswer = {
//       c: "Soviet Union"
//     },
//     {
//     question: "Dark matter matter makes up this percentage of all matter in the universe?"
//     },
//     answers = [
//       a = "15%",
//       b = "27%",
//       c = "40%",
//       d = "53%"
//     ],
//     correctAnswer = {
//       b: "27%"
//     } 
//   ],

  // imageQuestions: [
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
    // correctAnswer = {
    //   c: ""
    // },
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
    // correctAnswer = {
    //   b: ""
    // },
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
    // correctAnswer = {
    //   b: ""
    // },
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     b: ""
  //   },
  // ],

  // imageQuestions: [
  //   {
  //   question: ""
  //   },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
    // correctAnswer = {
    //   c: ""
    // },
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
    // correctAnswer = {
    //   b: ""
    // },
    // {
    // question: ""
    // },
    // answers = [
    //   a = "",
    //   b = "",
    //   c = "",
    //   d = ""
    // ],
  //   correctAnswer = {
  //     b: ""
  //   },
  //   {
  //   question: ""
  //   },
  //   answers = [
  //     a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     b: ""
  //   },
  // ],

  // imageQuestions: [
  //   {
  //   question: ""
  //   },
  //   answers = [
  //     a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     c: ""
  //   },
  //   {
  //   question: ""
  //   },
  //   answers = [
  //     a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     b: ""
  //   },
  //   {
  //   question: ""
  //   },
  //   answers = [
  //     a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     b: ""
  //   },
  //   {
  //   question: ""
  //   },
  //   answers = [
  //     a = "",
  //     b = "",
  //     c = "",
  //     d = ""
  //   ],
  //   correctAnswer = {
  //     b: ""
  //   },
  // ],

//

const quizCategories = ["scienceQuestions", "popCulture", "images", "misc"]

// let scienceQuestions = [
//   "Which planet is the 3rd closest to the sun?",
//   {
    
//     choices: ["Mars", "Saturn", "Pluto", "Earth"],
//     correctAnswer: "Earth"
//   },
//   {
//     question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?",
//     choices: ["Play Doom II",
//     "Drive tiny cars",
//     "Cook food",
//     "Find landmines"],
//     correctAnswer: "Cook food"
//   },
//   {
//     question: "What is the country of origin of the first living creature sent into space?",
//     choices: ["China",
//     "United States of America",
//     "Soviet Union",
//     "United Kingdom"],
//     correctAnswer: "Soviet Union"
//   },
//   {
//     question: "Dark matter matter makes up this percentage of all matter in the universe?",
//     choices: ["15%",
//     "27%",
//     "40%",
//     "53%"],
//     answer: "27%"
//   }
// ]

let scienceQuestions = [
  {
    question: "Which planet is the 3rd closest to the sun?",
    choiceA: "Mars",
    choiceB: "Saturn",
    choiceC: "Pluto",
    choiceD: "Earth",
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


// console.log(scienceQuestions)
var result = scienceQuestions.map(questiony => ({ text: questiony.question, value: questiony.choiceA }));
console.log(result)

Array.prototype.values
const iterator = result.values();
for(const value of iterator){
  console.log(value)
}

for (let i = 0; i < scienceQuestions.length; i++){
  if (scienceQuestions[i] === null) {
    console.log(scienceQuestions.question) 
  }
  console.log(scienceQuestions.question)
}

function getScienceQuestions() {
  return result[Math.floor(Math.random() * result.length)]
}
console.log(getScienceQuestions())

// for (let i = 0; i < scienceQuestions.length; i++)
// {
//   if (scienceQuestions[i] === 0) {
//     console.log(scienceQuestions.choices)
//   }
  // console.log(scienceQuestions)
// }

// console.log(scienceChoices[1])
// const scienceChoices = {
//  ["Mars",
//    "Uranus",
//   "Saturn",
//   "Earth"]

//   [
//       "Play Doom II",
//       "Drive tiny cars",
//       "Cook food",
//       "Find landmines"
//     ]
//   }

  // console.log(scienceChoices)



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

// bBtn.addEventListener("click", logAnswer)
// cBtn.addEventListener("click", logAnswer)
// dBtn.addEventListener("click", logAnswer)

submitBtn.addEventListener("click", () => {
  console.log(getScienceQuestions())
})

submitBtn.addEventListener("click", createQuestion)

// function finalizeAnswer() {
//   if {
//     aBtn = true;
//     console.log(choicesA)
//   }
//   else if {
//     bBtn = true;
//     console.log(choicesB)
//   }
//   else if  {
//     cBtn = true
//     console.log(choicesC)
//     else {
//       console.log(choicesD)
//     }
//   }
// }

/*-----------functions-------------*/

function createQuestion(evt) {
  // const newSQuestion = evt.target.id === "submit"
  const newQuestion = {
    text: getScienceQuestions(),
    value: getScienceQuestions()
  }
  quizArr.push(newQuestion)
  render()
  // render()
}

function appendQuestion(ques, idx) {
  let questionCard = document.createElement("div")
  questionCard.classList.add("card", `${ques.value.toLowerCase}`)
  questionCard.innerHTML =
  `<div>
  <section class ="quiz">
    <p>Questions</p>
    <p id ="questions">${ques.text}</p>
    <div id="choice">
      <ul id="choices"> 
      <li id="a-q">${ques.value}</li>
      <li id="b-q">${ques.value}</li>
      <li id="c-q">${ques.value}</li>
      <li id="d-q">${ques.value}</li>
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



// function appendQuestion(ques) {
//   let questionCard = document.createElement("div")
//   questionCard.classList.add("card", `${ques.toLowerCase()}`)
//   questionCard.innerHTML =
//   `<div>
//   <section class ="quiz">
//     <p>Questions</p>
//     <p id ="questions">${ques.text}</p>
//     <div id="choice">
//       <ul id="choices"> 
//       <li id="a-q"></li>
//       <li id="b-q"></li>
//       <li id="c-q"></li>
//       <li id="d-q"></li>
//     </ul>
//   </div>`
//   quizContainer.appendChild(quoteCard)
// }

})
}