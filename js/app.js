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

const scienceQuestions = [
  "Which planet is the 3rd closest to the sun?",
  "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?",
  "What is the country of origin of the first living creature sent into space?", "Dark matter matter makes up this percentage of all matter in the universe?"
]

const scienceChoices = [
  ["a = Mars",
  "b = Uranus",
  "c = Saturn",
  "d = Earth"],
  ["a = Play Doom II",
  "b = Drive tiny cars",
  "c = Cook food",
  "d = Find landmines"],
  ["a = China",
  "b = United States of America",
  "c = Soviet Union",
  "d = United Kingdom"],
  ["a = 15%",
  "b = 27%",
  "c = 40%",
  "d = 53%"]
]

const choicesA = ["A = Mars", "A = Play Doom II"

]

const choicesB = ["B = Uranus", "B = Drive tiny cars"]

const choicesC = [
  "C = Saturn", "C = Cook food"
  
]

const choicesD = [
  "D = Earth", "D = Find landmines"
  
]

const answers = ["D = Earth", "C = Cook food"]





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
const quiz = []

/*-------------Cached Element References----------*/

const aBtn = document.querySelector("#a-button")
const bBtn = document.querySelector("#b-button")
const cBtn = document.querySelector("#c-button")
const dBtn = document.querySelector("#d-button")
// const sumOfCorrect = document.querySelector("sumCorrect")
// const sumOfIncorrect = document.querySelector("sumIncorrect")
const submitBtn = document.getElementById('submit')
const body = document.querySelector("body")
const quizContainer = document.querySelector('#quiz-container')
document.getElementById('question').innerHTML = scienceQuestions[0];
document.getElementById('choices').innerHTML = 
`<ul id="choices">
<li id="a-q">${choicesA[0]}</li>
<li id="b-q">${choicesB[0]}</li>
<li id="c-q">${choicesC[0]}</li>
<li id="d-q">${choicesD[0]}</li>
</ul>`

console.log(choicesB[0])
/*---------------Event Listeners---------*/

aBtn.addEventListener("click", function (){
  console.log(choicesA)
})

bBtn.addEventListener("click", function (){
  console.log(choicesB)
})

cBtn.addEventListener("click", function (){
  console.log(choicesC)
})

dBtn.addEventListener("click", function (){
  console.log(choicesD)
})

// bBtn.addEventListener("click", logAnswer)
// cBtn.addEventListener("click", logAnswer)
// dBtn.addEventListener("click", logAnswer)

submitBtn.addEventListener("click", createQuestion)

/*-----------functions-------------*/

// init()

// function createQuestion(evt) {
//   const nextQuestion = evt.target.id === "submit"
//   const newQuestion = {
//     prompt: getQuiz(),
//     choices: getQuiz()
//   }
//   quiz.push(newQuestion)
//   render()
// }

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

// console.log(quizArr)
