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
var answersArray;
var wrongAnswer = timeLeft - 10;
var highScores = [];
var finalScore;

// Defining questions & answers array
var questions = [
  {
    question: "Commonly used data types do NOT include:",
    possibleAnswers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    rightAnswer: "3. Alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed within:",
    possibleAnswers: [
      "1. Quotes",
      "2. Curly braces",
      "3. Parentheses",
      "4. Square brackets",
    ],
    rightAnswer: "3. Parentheses",
  },

  {
    question: "In JavaScript, arrays can be used to store:",
    possibleAnswers: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    rightAnswer: "4. All of the above",
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables:",
    possibleAnswers: [
      "1. Commas",
      "2. Curly braces",
      "3. Quotes",
      "4. Parentheses",
    ],
    rightAnswer: "3. Quotes",
  },

  {
    question:
      "A very helpful tool, used during development and debugging, for printing content to the debugger is:",
    possibleAnswers: [
      "1. JavaScript",
      "2. Terminal/bash",
      "3. For loop",
      "4. Console.log",
    ],
    answer: "4. Console.log",
  },
];

// Starting the application
startApp();

function startApp() {
  timer.textContent = "Timer: ";
  var homepageHeader = document.createElement("h1");
  homepageHeader.textContent = "Coding Quiz Challenge";
  startpageEl.appendChild(homepageHeader);
  var instructions = document.createElement("p");
  instructions.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  startpageEl.appendChild(instructions);
  var startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  startpageEl.appendChild(startButton);

  // Starting the game when user clicks the start button
  startButton.addEventListener("click", function () {
    startTimer();
    showQuestions();
  });

  highScores.addEventListener("click", function () {
    showHighscores();
  });
}

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

  var questionEl = document.createElement("h2");
  questionEl.textContent = questions[currentQuestion].question;
  quizContainerEl.appendChild(questionEl);
  var choices = document.createElement("ul");
  choices.setAttribute("class", "col-lg-12");

  // For loop to loop through possible answers
  for (
    var answersArray = 0;
    answersArray < questions[currentQuestion].possibleAnswers.length;
    answersArray++
  ) {
    answersEl = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "btn");
    answerBtn.textContent =
      questions[currentQuestion].possibleAnswers[answersArray];
    answersEl.appendChild(answerBtn);
    choices.appendChild(answersEl);
  }
  quizContainerEl.appendChild(choices);
  quizContainerEl.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    if (event.target.matches("button")) {
      // If statement for right answer
      if (event.target.textContent == questions[currentQuestion].rightAnswer) {
        quizContainerEl.innerHTML = "";
        var rightAnswerEl = document.createElement("dialog");
        rightAnswerEl.textContent = "Correct!";
        resultsContainerEl.appendChild(rightAnswerEl);
        currentQuestion++;
      }
      // Else statement for wrong answer
      else {
        timeLeft = timeLeft - 10;
        quizContainerEl.innerHTML = "";
        var wrongAnswerEl = document.createElement("dialog");
        wrongAnswerEl.textContent = "Wrong!";
        resultsContainerEl.appendChild(wrongAnswerEl);
        currentQuestion++;
      }
    }
  });
}

// Ending the quiz
function quizEnd() {
  quizContainerEl.innerHTML = "";
  resultsContainerEl.innerHTML = "";
  var endpageHeader = document.createElement("h2");
  endpageHeader.textContent = "All done!";
  endpageContainerEl.appendChild(endpageHeader);

  var finalScore = timeLeft + 1;
  var finalScoreEl = document.createElement("p");
  finalScoreEl.setAttribute("class", "col-lg-12");
  finalScoreEl.textContent = "Your final score is " + finalScore;
  endpageContainerEl.appendChild(finalScoreEl);
  // Form to enter info for highscores
  var highscoresEl = document.createElement("form");
  var label = document.createElement("label");
  label.setAttribute("class", "form-group mb-2");
  label.textContent = "Enter initials: ";
  highscoresEl.appendChild(label);
}
