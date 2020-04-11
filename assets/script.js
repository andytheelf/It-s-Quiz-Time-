// Quiz question variablesvar quizContainer = document.getElementById("quiz-id");
const startQuiz = document.getElementById("start-quiz");
const quizContain = document.getElementById("quiz");
const question = document.getElementById("questions");
const gImg = document.getElementById("images");
const answerA = document.getElementById("a");
const AnswerB = document.getElementById("b");
const AnswerC = document.getElementById("c");
const AnswerD = document.getElementById("d");
const counter = document.getElementById("countdown");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreSave = document.getElementById("score");
//start quiz functionquiz 



//quiz clickthrough functions

var myQuestions = [
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

