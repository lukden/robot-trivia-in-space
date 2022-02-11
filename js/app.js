/*-----------Constants----------*/

import { quizCategories } from "../js-arrays/app.js"

/*-------------Variables-----------*/



/*-------------Cached Element References----------*/

const aBtn = document.querySelector(#a-button)
const bBtn = document.querySelector(#b-button)
const cBtn = document.querySelector(#c-button)
const dBtn = document.querySelector(#d-button)

const submitBtn = document.querySelector(#submit)

/*---------------Event Listeners---------*/

aBtn.addEventListener("click", logAnswer)
bBtn.addEventListener("click", logAnswer)
cBtn.addEventListener("click", logAnswer)
dBtn.addEventListener("click", logAnswer)

submitBtn.addEventListener("click", checkAnswer)

/*-----------functions-------------*/



