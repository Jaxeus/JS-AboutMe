"use strict";

let correctAnswers = ["Jason Cluley", "Soccer"];
let answeredQuestions = [
  "My name is JASON CLULEY!",
  `My favourite sport is SOCCER! ${"<br />"} ${"<h6>(But I like most sports - especially soccer, tennis and pickleball.)</h6>"}`,
];
// Looping through the six buttons
for (let j = 1; j < 3; j++) {
  for (let i = 1; i < 7; i++) {
    const answerBtn = document.querySelector(`.a-${j}-${i}`);
    const questionText = document.querySelector(`.question-block-${j} h3`);
    const background = document.querySelector(`.question-block-${j}`);

    const handleAnswerBtns = function () {
      // If the correct answer is clicked, change everything
      // for loop - 'j - 1' because correctAnswers array starts at 0
      if (answerBtn.textContent === correctAnswers[j - 1]) {
        // Changing the button to "correct" styles
        answerBtn.style.backgroundColor = "lime";
        answerBtn.style.color = "black";
        answerBtn.style.boxShadow = "none";
        answerBtn.style.border = "4px solid yellow";

        // Changing the text to show that my name has been revealed
        // InnerHTML because I'm changing some styling in this array
        questionText.innerHTML = answeredQuestions[j - 1];
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
