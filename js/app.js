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

let scienceQuestions = [
  {
    question: "Which planet is the 3rd closest to the sun?",
    choices: ["Mars", "Saturn", "Pluto", "Earth"],
    correctAnswer: "Earth"
  },
  {
    question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?",
    choices: ["Play Doom II",
    "Drive tiny cars",
    "Cook food",
    "Find landmines"],
    correctAnswer: "Cook food"
  },
  {
    question: "What is the country of origin of the first living creature sent into space?",
    choices: ["China",
    "United States of America",
    "Soviet Union",
    "United Kingdom"],
    correctAnswer: "Soviet Union"
  },
  {
    question: "Dark matter matter makes up this percentage of all matter in the universe?",
    choices: ["15%",
    "27%",
    "40%",
    "53%"],
    answer: "27%"
  }
]

for (let i = 0; i < scienceQuestions.length; i++){
  if (scienceQuestions[i] === null) {
    console.log(scienceQuestions.question) 
  }
  console.log(scienceQuestions.question)
}

function getScienceQuestions() {
  return scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
}

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
let currentAnswer
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
// const quizContainer = document.querySelector('#quiz-container')
const quiz = document.querySelectorAll(".quiz")
const qs = document.getElementById('questions')
const gameStatus = document.getElementById("game-status")
const choicesArr = document.getElementById("choices").textContent 
// console.log(quiz)
// document.getElementById('choices').innerHTML = 
// `<ul id="choices">
// <li id="a-q">${scienceQuestions.choices.index}</li>
// <li id="b-q">${scienceQuestions.choices}</li>
// <li id="c-q">${scienceQuestions.choices}</li>
// <li id="d-q">${scienceQuestions.choices}</li>
// </ul>`

// console.log(scienceQuestions.choices)
// console.log(choicesB[0])
/*---------------Event Listeners---------*/

aBtn.addEventListener("click", function (){
  console.log("A")
})

bBtn.addEventListener("click", function (){
  console.log("B")
})

cBtn.addEventListener("click", function (){
  console.log("C")
})

dBtn.addEventListener("click", function (){
  console.log("D")
})

// bBtn.addEventListener("click", logAnswer)
// cBtn.addEventListener("click", logAnswer)
// dBtn.addEventListener("click", logAnswer)

submitBtn.addEventListener("click", () => {
  console.log(getScienceQuestions())
})

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

function init() {
  quizArr = [null, null, null]
  winner = null
  currentQuestion = null
  gameStatus.textContent = "Choose a category to start!"
  render()
}

function render(){
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
  // render()
// }
//   createQuestion()
// )

function createQuestion(evt) {
  const newSQuestion = evt.target.id === "submit"
  const newQuestion = 
    getScienceQuestions()
  quizArr.push(newQuestion)
}

// render (

// )

// function init(){
// appendQuestion();
// render();
// win = null;
// }

// function render() {

//   quizContainer.innerHTML = ""
// quiz.forEach((question, idx) =>{
//   appendQuestion(question, idx)
// })
// }



// console.log(appendQuestion)



// function createQuestion(evt) {
//   const newQuestion = evt.target.id ===
//   "submit"
//   const newQuestion = {
//     getQuiz();
//   }
//   quizArr.push(nextQuestion)
//   render()
// }
}