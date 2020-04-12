// Quiz question variablesvar quizContainer = document.getElementById("quiz-id");
var buttonOne = document.getElementById("btn0");
var buttonTwo = document.getElementById("btn1");
var buttonThree = document.getElementById("btn2");
var buttonFour = document.getElementById("btn3");
var startQuiz = document.getElementById("start-quiz");
var seconds = document.getElementById("countdown");
var quizProgress = document.getElementById("progress");
var gridElement = document.getElementById("gridStyle");


var questions = [
   {
		question: "Commonly used data types do not include",
			choiceA: 'strings',
			choiceB: 'booleans',
      choiceC: 'alerts',
      choiceD: 'numbers',
		correctAnswer: 'c'
	},
	{
		question: "The condition of an if/else statement is enclosed in..?",
      choiceA: 'quotes',
			choiceB: 'curly braces',
      choiceC: 'parantheses',
      choiceD: 'square brackets',
		correctAnswer: 'c'
    },
        { question: "Arrays in Javascript can be used to store?",
              choiceA: 'numbers & strings',
            choice:'other arrays',
              choiceC:'booleans',
              choiceD:'All of the Above',
          correctAnswer:'d'
        },
    
       { question: "String Values must be enclosed within __ when being assigned to variables?",
           choiceA:'parentheses',
           choiceB:'curly braces',
           choiceC:'commas',
           choiceD: 'quotes',
          correctAnswer:'d'
       },
       
       { question: "A very useful tool during development and debugging for printing content in the debugger is?",
           choiceA:'Javascript',
           choiceB:'terminal bash',
           choiceC:'for loops',
           choiceD:'console.log',
         correctAnswer:'d'
       },
];

questions[0].question
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].choiceD
questions[0].correctAnswerw

var lastQuestion = questions.length -1;
var runningQuestion = 0;
var timer = 0;
var counterTime = 75;
var TIMER;




  function startTimer() {
    
    if (counterTime > 0) {
      counterTime--;
      TIMER = counterTime;
      countdown.innerHTML = "TIMER: " + TIMER;
    } else {
      timer = 0;
    }
    
  }



function presentQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question+ "</p>";
  btn0.innerHTML = q.choiceA;
  btn1.innerHTML = q.choiceB;
  btn2.innerHTML = q.choiceC;
  btn3.innerHTML = q.choiceD;
}

function quizBegin() {
startQuiz.style.display = "none";
presentQuestion();
gridElement.style.display = "grid";
progressProvide();
TIMER = setInterval(startTimer,1000);
}

function progressProvide() {
  for(let qIndex= 0; qIndex <= lastQuestion; qIndex++) {
   progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
  }
}



var score = 0;

      // Loop over every question object
      for (var i = 0; i < questions.length; i++) {}

      startQuiz.addEventListener("click", quizBegin);