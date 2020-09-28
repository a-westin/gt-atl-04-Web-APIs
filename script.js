// Accessing HTML elements in the DOM
var startButtonEl = document.getElementById("start-button");
// console.log(startButtonEl);
var startpageEl = document.getElementById("startpage");
// console.log("This is the start page");
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var quizContainerEl = document.getElementById("quiz-container");
var quizQuestionsEl = document.getElementById("questions");
var endpageContainerEl = document.getElementById("endpage-container");
var endpageButtonsEl = document.getElementById("endpage-btns");

var questionBtnOne = document.getElementById("one");
var questionBtnTwo = document.getElementById("two");
var questionBtnThree = document.getElementById("three");
var questionBtnFour = document.getElementById("four");

// Showing/hiding the start button
// function myFunction() {
//   if (startButtonEl.style.display === "none") {
//     startButtonEl.style.display = "block";
//   } else {
//     startButtonEl.style.display = "none";
//   }
// }

// startButtonEl.addEventListener("click", myFunction);

// Assigning the questions array
var questions = [
  {
    question: "Commonly used data types do NOT include:",
    questionBtnOne: "strings",
    questionBtnTwo: "booleans",
    questionBtnThree: "alerts",
    questionBtnFour: "numbers",
    answer: "three",
  },

  {
    question: "The condition in an if/else statement is enclosed within:",
    questionBtnOne: "quotes",
    questionBtnTwo: "curly braces",
    questionBtnThree: "parentheses",
    questionBtnFour: "square brackets",
    answer: "two",
  },

  {
    question: "In JavaScript, arrays can be used to store:",
    questionBtnOne: "numbers and strings",
    questionBtnTwo: "other arrays",
    questionBtnThree: "booleans",
    questionBtnFour: "all of the above",
    answer: "four",
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables:",
    questionBtnOne: "commas",
    questionBtnTwo: "curly braces",
    questionBtnThree: "quotes",
    questionBtnFour: "parentheses",
    answer: "three",
  },

  {
    question:
      "A very helpful tool, used during development and debugging, for printing content to the debugger is:",
    questionBtnOne: "JavaScript",
    questionBtnTwo: "terminal/bash",
    questionBtnThree: "for loop",
    questionBtnFour: "console.log",
    answer: "four",
  },
];


// // Starting the game
// function startGame (questionIndex) {
//   var q = questions[questionIndex];
//   quizQuestionsEl.textContent = (questionIndex + 1) + '.' + q.question;
//   one.textContent = q.questionOne;
//   two.textContent = q.questionTwo;
//   three.textContent = q.questionThree;
// };
