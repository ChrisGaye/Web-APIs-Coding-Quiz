// var timer;
// var ele = document.getElementById('timer');

// (function (){
//     var sec = 0;
//     timer = setInterval(()=>{
//         ele.innerHTML = '00:'+sec;
//         sec ++;
//     }, 1000) //each 1 second
// })()

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