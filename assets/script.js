// Quiz question variablesvar quizContainer = document.getElementById("quiz-id");
var quizStart = document.getElementById("start-quiz");
var quizContain = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("images");
var AnswerA = document.getElementById("a");
var AnswerB = document.getElementById("b");
var AnswerC = document.getElementById("c");
var AnswerD = document.getElementById("d");
var counter = document.getElementById("countdown");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreSave = document.getElementById("score");

//start quiz functionquiz 
function startQuiz() {
    //quizStart.style.display = "none";
    // renderQuestion();
    // quizContain.style.display = "block";
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000);
 console.log("hello")
}

console.log("hey there")
//quiz clickthrough functions

let questions = [
	{
		question: "Commonly used data types do not include",
		answers: {
			a: 'strings',
			b: 'booleans',
            c: 'alerts',
            d: 'numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: "The condition of an if/else statement is enclosed in..?",
		answers: {
			a: 'quotes',
			b: 'curly braces',
            c: 'parantheses',
            d: 'square brackets',
        },
		correctAnswer: 'c'
    },
        { question: "Arrays in Javascript can be used to store?",
          answers: {
              a: 'numbers & strings',
              b:'other arrays',
              c:'booleans',
              d:'All of the Above',
          },
          correctAnswer:'d'
        },
    
       { question: "String Values must be enclosed within __ when being assigned to variables?",
         answers: {
           a:'parentheses',
           b:'curly braces',
           c:'commas',
           d: 'quotes',
         },
          correctAnswer:'d'
       },
       
       { question: "A very useful tool during development and debugging for printing content in the debugger is?",
         answers: {
           a:'Javascript',
           b:'terminal bash',
           c:'for loops',
           d:'console.log',
         },
         correctAnswer:'d'
       },
];

const lastQuestion = questions.length - 1
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

   // question.innerHTML = "<p>" + q.questions + "</p>";
   // answerA.innerHTML = q.answerA;
    //answerB.innerHTML = q.answerB;
   // answerC.innerHTML = q.answerC;
    //answerD.innerHTML = q.answerD;
    console.log("HELLO");
}


//counter

let quizCounter
const quizTime = 75; 

function renderCounter() {
  if(counter <= quizTime) {
      counter.innerHTML = count;
  }
  else{
      count = 0;
  }
}


quizStart.addEventListener("click", startQuiz);
