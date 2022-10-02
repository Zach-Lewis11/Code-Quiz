
// timer related variables 
var timeEl = document.querySelector("#time");
var secondsLeft = 75;

// variables for answer options, using const because we don't want the values to change

const correct1 = ["answer", true]
const correct2 = ["answer", true]
const correct3 = ["answer", true]
const correct4 = ["answer", true]
const correct5 = ["answer", true]
const correct6 = ["answer", true]
const false1 = ["option", false]
const false2 = ["option", false]
const false3 = ["option", false]
const false4 = ["option", false]
const false5 = ["option", false]
const false6 = ["option", false]
const false7 = ["option", false]
const false8 = ["option", false]
const false9 = ["option", false]
const false10 = ["option", false]
const false11 = ["option", false]
const false12 = ["option", false]
const false13 = ["option", false]
const false14 = ["option", false]
const false15 = ["option", false]
const false16 = ["option", false]
const false17 = ["option", false]
const false18 = ["option", false]

//objects to store the questions and options for choices 

let questionObj1 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: correct1,
  ans2: false1,
  ans3: false2,
  ans4: false3,
};

let questionObj2 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: false4,
  ans2: false5,
  ans3: correct2,
  ans4: false6,
};

let questionObj3 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: false7,
  ans2: false8,
  ans3: false9,
  ans4: correct3,
};

let questionObj4 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: correct4,
  ans2: false10,
  ans3: false11,
  ans4: false12,
};

let questionObj5 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: false13,
  ans2: correct5,
  ans3: false14,
  ans4: false15,
};

let questionObj6 = {
  question: "question goes here",
  // use the correct and false arrays made above as the values in ans1 - ans4 of the keys of the object
  ans1: false16,
  ans2: false17,
  ans3: correct6,
  ans4: false18,
};

//make main array to hold all the objects so the game function and logically work through them

const mainArr = [questionObj1, questionObj2, questionObj3, questionObj4, questionObj5, questionObj6]

console.log(mainArr)
console.log(mainArr[0].question)
console.log(mainArr[0].ans1)
console.log(mainArr[0].ans1.includes(true))
console.log(mainArr[0].ans2.includes(true))

//make a function for gameplay loop
//function needs to start when 'start' button is clicked

function gamePlay() {
  
}

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

//setTime();