// Accessing HTML elements in the DOM
var startpageEl = document.getElementById("startpage");
var quizContainerEl = document.getElementById("quiz-container");
var resultsContainerEl = document.getElementById("results-container");
var endpageContainerEl = document.getElementById("endpage");
var highScores = document.getElementById("highscores");
var timer = document.getElementById("timer");

// Defining other variables 
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var timerInterval;
var timeLeft = 60;
var wrongAnswer = timeLeft - 10;
var highScores = [];
var finalScore;

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

// Starting the game when user clicks the start button
startButtonEl.addEventListener("click", function () {
  startTimer();
  showQuestions();
});

highScores.addEventListener("click", function () {
  showHighscores();
});

// Starting the timer once the quiz begins
function startTimer() {
  var timerInterval = setInterval(function () {
    timer.textContent = "Time: " + timeLeft;
    timeLeft--;
    // If time runs out or the last question is answered, stop the timer
    if (timeLeft < 0 || currentQuestion === questions.length) {
      clearInterval(timerInterval);
      setTimeout(gameOver, 1000);
    }
  }, 1000);
}

// Displaying questions once quiz begins
function showQuestions() {
  startpageEl.innerHTML = "";
  endpageContainerEl.innerHTML = "";

  if (currentQuestion === questions.length) {
    return;
  }

var 
}
