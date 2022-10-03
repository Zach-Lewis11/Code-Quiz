
// timer related variables 
const timeEl = document.querySelector("#time");
var secondsLeft = 76;
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);
// const viewHS = document.querySelector("highScores");
// viewHS.addEventListener("click", openHighScores)
// const leaderBoard = document.getElementById("leaderBoard")

const choiceContainerEl = document.getElementById("optionsBtns");

// variables for answer options, using const because we don't want the values to change

const correct1 = ["Alerts", true];
const correct2 = ["Parentheses", true];
const correct3 = ["All of the Above", true];
const correct4 = ["Quotes", true];
const correct5 = ["Console Log", true];
const correct6 = ["Or", true];
const false1 = ["Booleans", false];
const false2 = ["Strings", false];
const false3 = ["Numbers", false];
const false4 = ["Curly Brackets", false];
const false5 = ["Quotes", false];
const false6 = ["Commas", false];
const false7 = ["Booleans", false];
const false8 = ["Numbers & Strings", false];
const false9 = ["Other Arrays & Objects", false];
const false10 = ["Parentheses", false];
const false11 = ["Curly Brackets", false];
const false12 = ["Commas", false];
const false13 = ["terminal/ Git Bash", false];
const false14 = ["JavaScript", false];
const false15 = ["For Loops", false];
const false16 = ["And", false];
const false17 = ["Equal to", false];
const false18 = ["Less than", false];

//objects to store the questions and options for choices 

let questionObj1 = {
  question: "Commonly used  data types DO NOT include:",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: correct1,
  ans2: false1,
  ans3: false2,
  ans4: false3,
};

let questionObj2 = {
  question: "The condition in an if / else statement is enclosed within what?",
  ans1: false4,
  ans2: false5,
  ans3: correct2,
  ans4: false6,
};

let questionObj3 = {
  question: "Arrays in JavaScript can be used to store what?",
  ans1: false7,
  ans2: false8,
  ans3: false9,
  ans4: correct3,
};

let questionObj4 = {
  question: "String values must be enclosed within what when being assigned to variables?",
  ans1: correct4,
  ans2: false10,
  ans3: false11,
  ans4: false12,
};

let questionObj5 = {
  question: "A useful tool used durning development and debugging for printing content to the debugger is:",
  ans1: false13,
  ans2: correct5,
  ans3: false14,
  ans4: false15,
};

let questionObj6 = {
  question: "What does the symbol '||' mean",
  ans1: false16,
  ans2: false17,
  ans3: correct6,
  ans4: false18,
};

//make main array to hold all the objects so the game function and logically work through them

const mainArr = [questionObj1, questionObj2, questionObj3, questionObj4, questionObj5, questionObj6]

console.log(mainArr);
console.log(mainArr[0].question);
console.log(mainArr[0].ans1);
console.log(mainArr[0].ans1.includes(true));
console.log(mainArr[0].ans2.includes(true));
console.log(mainArr[0].ans2[0]);


//function needs to start when 'start' button is clicked

function startGame() {
    setTime();
    // gamePlay()
    startBtn.classList.add("hidden");
    choiceContainerEl.classList.remove("hide")
    loadNextCard();
};

//make a function for gameplay loop

function gamePlay() {
  var question =document.querySelector("#titleQuestions");
  var op1 =document.querySelector("#option1");
  var op2 =document.querySelector("#option2");
  var op3 =document.querySelector("#option3");
  var op4 =document.querySelector("#option4");
  //make a function to go through each questionObj in order and populate the correct fields in the html with the corresponding values from the object
  //do {} while (secondsLeft > 0 || i < mainArr.length);

};

function loadNextCard(){

    var question =document.querySelector("#titleQuestions");
    var op1 =document.querySelector("#option1");
    var op2 =document.querySelector("#option2");
    var op3 =document.querySelector("#option3");
    var op4 =document.querySelector("#option4");
    question.innerHTML = mainArr[0].question
    op1.innerHTML = mainArr[0].ans1
    op2.innerHTML = mainArr[0].ans2
    op3.innerHTML = mainArr[0].ans3
    op4.innerHTML = mainArr[0].ans4

};
//timer function to count down from 75, stops at zero
//stopping at zero will end game
// time left will equal the score to be submitted to leader boards 
//timer should start when game starts not when page is loaded 

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
     clearInterval(timerInterval)
    }

  }, 1000);
}


// a function for viewing the high scores

// function openHighScores(){
//     document.querySelector("#titleQuestions").innerText= "Previous Scores";
//     leaderBoard.classList.remove("hide");
   
// };