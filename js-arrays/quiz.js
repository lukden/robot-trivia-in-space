var answers, correctAnswer, a, b, c, d

const quizCategories = {
  scienceQuestions: [
    {
    question: "Which planet is the 3rd closest to the sun?"
    },
    answers = [
      a = "Mars",
      b = "Uranus",
      c = "Saturn",
      d = "Earth",
    ],
    correctAnswer = {
      d: "Jupiter"
    },
    {
    question: "Scientists taught rats how to ______. Which option does NOT acurately finsh the sentence?"
    },
    answers = [
      a = "Play Doom II",
      b = "Drive tiny cars",
      c = "Cook food",
      d = "Find landmines"
    ],
    correctAnswer = {
      c: "Cook food"
    },
    {
    question: "What is the country of origin of the first living creature sent into space?"
    },
    answers = [
      a = "China",
      b = "United States of America",
      c = "Soviet Union",
      d = "United Kingdom"
    ],
    correctAnswer = {
      c: "Soviet Union"
    },
    {
    question: "Dark matter matter makes up this percentage of all matter in the universe?"
    },
    answers = [
      a = "15%",
      b = "27%",
      c = "40%",
      d = "53%"
    ],
    correctAnswer = {
      b: "27%"
    } 
  ],

  imageQuestions: [
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      c: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
  ],

  imageQuestions: [
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      c: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
  ],

  imageQuestions: [
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      c: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
    {
    question: ""
    },
    answers = [
      a = "",
      b = "",
      c = "",
      d = ""
    ],
    correctAnswer = {
      b: ""
    },
  ],
}

function getQuiz() {
  return quizCategories[Math.floor(Math.random() * quizCategories.length)]
}

export {
  getQuiz
}


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

// console.log(quizCategories.scienceQuestions)