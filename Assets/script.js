

// List of questions variables

var questions = [
  {
    Question 1: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    Question 2: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    Question 3: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    Question 4:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    Question 5:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

var i=0

document.getElementById('start').onclick= showQuestions


function showQuestions(){
    if (i< questions.length){
        document.getElementById("questions").innerHTML=
        `
        <h3>${questions[i].title}</h3>
        <button>${questions[i].choices[0]}</button>
        <button>${questions[i].choices[1]}</button>
        <button>${questions[i].choices[2]}</button>
        <button>${questions[i].choices[3]}</button>
        
        `
    }
}

document.getElementById('questions').onclick= function(e){
    console.log(e.target.innerText)
    if(questions[i].answer === e.target.innerText ){
        document.getElementById("check") = "Correct"
    }else { document.getElementById("check") = "Wrong"}

    i++;
    showQuestions()
}*/