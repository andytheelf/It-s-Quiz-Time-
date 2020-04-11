// Quiz question variables
var quizContainer = document.getElementById("quiz-id");
var quizResults = document.getElementById("results");
//start quiz functionquiz 
function startQuiz() {

}
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

//Quiz results
function collectResults() {

}

startQuiz();
//event listener buttons
getResultsButton.addEventListener("click", collectResults);