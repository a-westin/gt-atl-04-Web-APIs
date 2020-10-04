// Accessing HTML elements in the DOM
var startpageEl = document.getElementById("startpage");
var quizContainerEl = document.getElementById("quiz-container");
var resultsContainerEl = document.getElementById("results-container");
var endpageContainerEl = document.getElementById("endpage");
var highscoresEl = document.getElementById("highscores");
var highScoresBtn = document.getElementById("view-scores");
var timer = document.getElementById("timer");

// Defining other variables
var currentQuestion = 0;
var timerInterval;
var timeLeft = 60;
var answersArray;
var wrongAnswer = timeLeft - 10;
var highScores = [];
var finalScore;
var initials;

// Defining questions & answers array
var questionsArray = [
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
  var homepageHeader = document.createElement("h1");
  homepageHeader.textContent = "Coding Quiz Challenge";
  startpageEl.appendChild(homepageHeader);
  var instructions = document.createElement("p");
  instructions.textContent =
    "Try to answer the following code-related questions within the time limit. \n Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  startpageEl.appendChild(instructions);
  var startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  startpageEl.appendChild(startButton);
  timer.textContent = "Time: ";

  // Starting the game when user clicks the start button
  startButton.addEventListener("click", function () {
    startTimer();
    showQuestions();
  });

  highScoresBtn.addEventListener("click", function () {
    viewScores();
  });
}

// Starting the timer once the quiz begins
function startTimer() {
  var timerInterval = setInterval(function () {
    timer.textContent = "Time: " + timeLeft;
    timeLeft--;
    // If time runs out or the last question is answered, stop the timer
    if (timeLeft < 0 || currentQuestion === questionsArray.length) {
      clearInterval(timerInterval);
      setTimeout(quizEnd, 1000);
    }
  }, 1000);
}

// Displaying questions once quiz begins
function showQuestions() {
  startpageEl.innerHTML = "";
  endpageContainerEl.innerHTML = "";

  if (currentQuestion === questionsArray.length) {
    return;
  }

  var questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[currentQuestion].question;
  quizContainerEl.appendChild(questionEl);
  var choices = document.createElement("ul");
  choices.setAttribute("class", "col-lg-12");

  // For loop to loop through possible answers
  for (
    var answersArray = 0;
    answersArray < questionsArray[currentQuestion].possibleAnswers.length;
    answersArray++
  ) {
    var answersEl = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "btn");
    answerBtn.textContent =
      questionsArray[currentQuestion].possibleAnswers[answersArray];
    answersEl.appendChild(answerBtn);
    choices.appendChild(answersEl);
  }
  quizContainerEl.appendChild(choices);
  quizContainerEl.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    if (event.target.matches("button")) {
      // If statement for right answer
      if (
        event.target.textContent == questionsArray[currentQuestion].rightAnswer
      ) {
        quizContainerEl.innerHTML = "";
        var rightAnswerEl = document.createElement("caption");
        rightAnswerEl.textContent = "Correct!";
        resultsContainerEl.appendChild(rightAnswerEl);
        currentQuestion++;
        setTimeout(showQuestions, 1000);
      }
      // Else statement for wrong answer
      else {
        timeLeft = timeLeft - 10;
        quizContainerEl.innerHTML = "";
        var wrongAnswerEl = document.createElement("caption");
        wrongAnswerEl.textContent = "Wrong!";
        resultsContainerEl.appendChild(wrongAnswerEl);
        currentQuestion++;
        setTimeout(showQuestions, 1000);
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

  var userInput = document.createElement("input");
  userInput.setAttribute("type", "text");
  userInput.setAttribute("class", "form-control mr-2 ml-2 mb-2");
  highscoresEl.appendChild(userInput);

  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "btn");
  submitBtn.textContent = "Submit";
  highscoresEl.appendChild(submitBtn);
  endpageContainerEl.appendChild(highscoresEl);
  // Event listener for submit btn
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    var initials = userInput.value;
    // Storing highscores info
    if (JSON.parse(localStorage.getItem("highscores")) == null) {
      highScores.push({ initials: initials, score: finalScore });
      localStorage.setItem("highscores", JSON.stringify(highScores));
    } else if (highScores.length > 0) {
      highScores.push({ initials: initials, score: finalScore });
      localStorage.setItem("highscores", JSON.stringify(highScores));
    } else {
      var scoreStorage = JSON.parse(localStorage.getItem("highscores"));
      for (var i = 0; i < scoreStorage.length; i++) {
        highScores.push(scoreStorage[i]);
      }
      highScores.push({ initials: initials, score: finalScore });
      localStorage.setItem("highscores", JSON.stringify(highScores));
    }
    viewScores();
  });
}

// Viewing highscores page
function viewScores() {
  startpageEl.innerHTML = "";
  endpageContainerEl.innerHTML = "";
  highscoresEl.innerHTML = "";

  var scoresHeader = document.createElement("h2");
  scoresHeader.setAttribute("class", "col-lg-12");
  scoresHeader.textContent = "Highscores";
  highscoresEl.appendChild(scoresHeader);

  var scoresTable = document.createElement("table");
  scoresTable.setAttribute("class", "table col-lg-12");
  var tableRow = document.createElement("tr");
  var initialsHeader = document.createElement("th");
  var scoreHeader = document.createElement("th");
  initialsHeader.textContent = "Initials";
  scoreHeader.textContent = "Score";
  tableRow.appendChild(initialsHeader);
  tableRow.appendChild(scoreHeader);
  scoresTable.appendChild(tableRow);

  // Looping through local storage to display highscores array
  for (
    var highscoresArray = 0;
    highscoresArray < highScores.length;
    highscoresArray++
  ) {
    var rowEl = document.createElement("tr");
    var initialsEl = document.createElement("td");
    var scoresEl = document.createElement("td");
    var savedScores = JSON.parse(localStorage.getItem("highscores"));
    initialsEl.textContent = savedScores[highscoresArray].initials;
    scoresEl.textContent = savedScores[highscoresArray].score;
    rowEl.appendChild(initialsEl);
    rowEl.appendChild(scoresEl);
  }
  highscoresEl.appendChild(scoresTable);

  // Button to go back
  var backBtn = document.createElement("button");
  backBtn.setAttribute("class", "btn");
  backBtn.textContent = "Go back";
  highscoresEl.appendChild(backBtn);
  //Button to clear scores
  var clearScoresBtn = document.createElement("button");
  clearScoresBtn.setAttribute("class", "btn");
  clearScoresBtn.textContent = "Clear highscores";
  highscoresEl.appendChild(clearScoresBtn);

  backBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    highscoresEl.innerHTML = "";
    currentQuestion = 0;
    timeLeft = 60;
    startApp();
  });

  clearScoresBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    highScores = [];
    localStorage.clear();
    highscoresEl.innerHTML = "";
    return viewScores();
  });
}
