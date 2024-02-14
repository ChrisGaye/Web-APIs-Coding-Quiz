//Questions with answer choices
const Questions = [
    {
        question: "How do you include a .js file in html?",

        answerChoices: [
            {choice: "<file src='filename.js'></file>", isCorrect: false},
            {choice: "<link href='filename.js'>", isCorrect: false},
            {choice: "<script src= 'filename.js></script>", isCorrect: true},
            {choice: "<include 'filename.js'>", isCorrect: false}
        ],
    },

    {
        question: "What does javascript contribute to an application?",

        answerChoices: [
            {choice: "Styling and looks", isCorrect: false},
            {choice: "Interactivity and functionality", isCorrect: true},
            {choice: "It is the structure", isCorrect: false},
            {choice: "It is used as a terminal", isCorrect: false}
        ],
    },

    {
        question: "What is an array?",

        answerChoices: [
            {choice: "A function", isCorrect: false},
            {choice: "A type of database", isCorrect: false},
            {choice: "A type of variable", isCorrect: false},
            {choice: "An object for storing values", isCorrect: true}
        ],
    },
];

var score = 0;
var question = 0;
var timeLeft = 15;
var timerInterval;

//Variables for all the buttons
const startButton = document.querySelector("#start");
const nextButton = document.querySelector("#next");
const retryButton = document.querySelector("#retry");

// Event listener for the start quiz button
startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // Reset the score, question index, and timer
    score = 0;
    question = 0;
    timeLeft = 15;

    // Display the first question
    displayQuestion();

    // Start the timer
    timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        // Update the timer display
        document.getElementById('time-left').textContent = timeLeft;
        
        // Decrement the time left
        timeLeft--;
        
        // If time runs out, end the quiz
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }
}

function displayQuestion() {
        const currentQuestion = Questions[question];
    
        // Display the question text
        const questionElement = document.querySelector("#question");
        questionElement.textContent = currentQuestion.question;
    
        // Display the answer choices
        const choicesContainer = document.querySelector("#choices");
        choicesContainer.innerHTML = '';
    
        currentQuestion.answerChoices.forEach((choice, index) => {
            const choiceElement = document.createElement("button");
            choiceElement.textContent = choice.choice;
            choiceElement.classList.add("choice");
            choiceElement.dataset.index = index;
    
            choiceElement.addEventListener('click', function() {
                // Checks to see if the selected answer is correct
                if (choice.isCorrect) {
                    // If it is correct, you get one point
                    score++;
                }
    
                nextQuestion();
            });
    
            choicesContainer.appendChild(choiceElement);
        });
}

function nextQuestion() {
    // Increment the question index
    question++;

    // Checks if there are more questions
    if (question < Questions.length) {
        // Displays the next question
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);

    // Displays the user's score
    const scoreElement = document.querySelector("#score");
    scoreElement.textContent = `Your score: ${score}/${Questions.length}`;

    // Hide the question and choices, and display the retry button
    document.querySelector("#question-container").style.display = "none";
    document.querySelector("#choices-container").style.display = "none";
    retryButton.style.display = "block";
}

// Event listener for the retry button
retryButton.addEventListener('click', startQuiz);