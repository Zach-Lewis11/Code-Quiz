
const timeEl = document.querySelector("#time");
var secondsLeft = 76;
var score = 0;
var scores= document.getElementById("scores")
if (!localStorage.players) {
    localStorage.setItem("players", 0)
}
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);
// const viewHS = document.querySelector("highScores");
// viewHS.addEventListener("click", openHighScores)
 const leaderBoard = document.getElementById("leaderBoard")

var questionNum = 0;
var quest =document.querySelector("#titleQuestions");
const choiceContainerEl = document.getElementById("optionsBtns");
const choice1 = document.querySelector('#option1');
const choice2 = document.querySelector('#option2');
const choice3 = document.querySelector('#option3');
const choice4 = document.querySelector('#option4');
choice1.addEventListener('click', checkAnswer)
choice2.addEventListener('click', checkAnswer)
choice3.addEventListener('click', checkAnswer)
choice4.addEventListener('click', checkAnswer)

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

var mainArr = [questionObj1, questionObj2, questionObj3, questionObj4, questionObj5, questionObj6]

//function needs to start when 'start' button is clicked

function startGame() {
    setTime();
    startBtn.classList.add("hidden");
    choiceContainerEl.classList.remove("hide");
    loadNextCard(questionNum);
    leaderBoard.classList.add("hide")
    //gitscores.innerHTML= ''
    
};

//make a function for gameplay loop
//make a function to go through each questionObj in order and populate the correct fields in the html with the corresponding values from the object

function checkAnswer(event) {
    // need to compare two things, one is the index of the button picked, 2 is if the equals the true/false of main array
    console.log(event.target.getAttribute("id"));
    var myString = event.target.getAttribute("id");
    var myIndex = parseInt(myString.slice(-1))-1 ;
    //myobj[Object.keys(myobj)[0]];
    var answerKeys = Object.keys(mainArr[questionNum]);
    answerKeys =answerKeys.slice(1)
    var myNewKey = answerKeys[myIndex]
    console.log(myNewKey)
    console.log(mainArr[questionNum][myNewKey])
    console.log(mainArr[questionNum][myNewKey].includes(true))
    if (mainArr[questionNum][myNewKey].includes(false)) {
        secondsLeft -= 15;
    }
    if (questionNum < mainArr.length-1){
    questionNum++;
    console.log("if", questionNum)
    loadNextCard(questionNum);
    } else {
        gameOver();
    };
    if (secondsLeft <= 0 ){
        gameOver();
    }

};

function gameOver(event){
    // clear contents on page
    startBtn.classList.remove("hidden");
    choiceContainerEl.classList.add("hide");
    leaderBoard.classList.remove("hide");
    // ask if player wants to play again
    // establish score
    // show rest of scores
    quest.innerHTML = "Score Board";
    startBtn.innerHTML = "Would you like to play again?"
    var formEl=document.getElementById("submit");
    // formEl.classList.remove("hide")
    var initials = prompt("PLease Enter Name or Initials")
    score = secondsLeft
    localStorage.setItem(initials, score)
    localStorage.players++;
    var scoreTable = []
    for (var i = 0; i < localStorage.players; i++) {
        // need to pull player initials and their score
        if(!(localStorage.key(i)=== "players")){
            //if the current local storage key is players, do nothing, else add local storage data to score table 
            scoreTable.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
        }
    }
    console.log(scoreTable)
    for (var i = 0; i < localStorage.players; i++) {
        var newListel= document.createElement('li');
        newListel.innerHTML= scoreTable[i]

        scores.appendChild(newListel);

    }
    questionNum=0
    clearInterval(setTime)
    secondsLeft=76
}

function loadNextCard(x){

    var op1 =document.querySelector("#option1");
    var op2 =document.querySelector("#option2");
    var op3 =document.querySelector("#option3");
    var op4 =document.querySelector("#option4");
    quest.innerHTML = mainArr[x].question;
    op1.innerHTML = mainArr[x].ans1[0];
    op2.innerHTML = mainArr[x].ans2[0];
    op3.innerHTML = mainArr[x].ans3[0];
    op4.innerHTML = mainArr[x].ans4[0];
    
};

//timer function to count down from 75, stops at zero
//seconds left zero should end game
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

