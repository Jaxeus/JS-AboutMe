"use strict";

const myName = "Jason Cluley";

// Looping through the six buttons
for (let i = 1; i < 7; i++) {
  const answerBtn = document.querySelector(`.a-${i}`);
  const questionText = document.querySelector(".question-block h3");
  const background = document.querySelector(".question-block");

  const handleAnswerBtns = function () {
    // If the correct answer is clicked, change everything
    if (answerBtn.textContent === myName) {
      // Changing the button to "correct" styles
      answerBtn.style.backgroundColor = "lime";
      answerBtn.style.color = "black";
      answerBtn.style.boxShadow = "none";
      answerBtn.style.border = "4px solid yellow";

      // Changing the text to show that my name has been revealed
      questionText.textContent = "My name is JASON CLULEY!";
      questionText.style.color = "lime";
      questionText.style.fontSize = "26px";
      // Changing the background from yellowish to blackish
      background.style.backgroundColor = "#222";
      // If the wrong answer is picked, change the answer button
    } else {
      // Changing the buttons to "incorrect" styles
      answerBtn.style.backgroundColor = "red";
      answerBtn.style.color = "lightcyan";
      answerBtn.style.boxShadow = "none";
    }
  };

  answerBtn.addEventListener("click", handleAnswerBtns);
}

// const answerText3 = document.querySelector(".a-3").textContent;
// const answerText5 = document.querySelector(".a-5").textContent;

// //Function for handling wrong answer buttons
// const handleAnswerWrong = function () {
//   if (answerText3 === myName) {
//     document.querySelector(".a-3").style.backgroundColor = "limegreen";
//     document.querySelector(".a-3").style.color = "blue";
//     document.querySelector(".a-3").style.boxShadow = "none";
//   } else {
//     document.querySelector(".a-3").style.backgroundColor = "red";
//     document.querySelector(".a-3").style.color = "lightcyan";
//     document.querySelector(".a-3").style.boxShadow = "none";
//   }
// };

// document.querySelector(".a-3").addEventListener("click", handleAnswerWrong);

// //Function for handling correct answer buttons
// const handleAnswerRight = function () {
//   if (answerText5 === myName) {
//     document.querySelector(".a-5").style.backgroundColor = "limegreen";
//     document.querySelector(".a-5").style.color = "blue";
//     document.querySelector(".a-5").style.boxShadow = "none";
//   } else {
//     document.querySelector(".a-5").style.backgroundColor = "red";
//     document.querySelector(".a-5").style.color = "lightcyan";
//     document.querySelector(".a-5").style.boxShadow = "none";
//   }

//   document.querySelector(".question-block h3").style.color = "purple";
//   document.querySelector(".question-block h3").style.fontSize = "20px";
//   document.querySelector(".question-block").style.backgroundColor = "orange";
//   document.querySelector(".question-block h3").textContent =
//     "My name is... JASON CLULEY!";
// };

// document.querySelector(".a-5").addEventListener("click", handleAnswerRight);
