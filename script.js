function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}    var myQuestions = [
        {
            question: "What is a block of code used to perform ask",
            answers: {
                a: 'String',
                b: 'Function',
                c: 'Array'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is used to store multiple values in a single variable?",
            answers: {
                a: 'Variables',
                b: 'Events',
                c: 'Array'
            },
            correctAnswer: 'c'
        }
    ];

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	startButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}