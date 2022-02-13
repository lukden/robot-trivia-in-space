/*-----------Constants----------*/

import { getQuiz } from "../js-arrays/quiz.js"

console.log(getQuiz)

/*-------------Variables-----------*/

let win, lose, playerName, timer

/*-------------Cached Element References----------*/

const aBtn = document.querySelector("#a-button")
const bBtn = document.querySelector("#b-button")
const cBtn = document.querySelector("#c-button")
const dBtn = document.querySelector("#d-button")
const sumOfCorrect = document.querySelector("#sumCorrect")
const sumOfIncorrect = document.querySelector("#sumIncorrect")
const submitBtn = document.querySelector("#submit")


/*---------------Event Listeners---------*/

aBtn.addEventListener("click", logAnswer)
bBtn.addEventListener("click", logAnswer)
cBtn.addEventListener("click", logAnswer)
dBtn.addEventListener("click", logAnswer)

submitBtn.addEventListener("click", checkAnswer)

/*-----------functions-------------*/



