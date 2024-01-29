"use strict";

const myName = "Jason Cluley";
const answerText3 = document.querySelector(".a-3").textContent;
const answerText5 = document.querySelector(".a-5").textContent;

//Function for handling wrong answer buttons
const handleAnswerWrong = function () {
  if (answerText3 === myName) {
    document.querySelector(".a-3").style.backgroundColor = "limegreen";
    document.querySelector(".a-3").style.color = "blue";
    document.querySelector(".a-3").style.boxShadow = "none";
  } else {
    document.querySelector(".a-3").style.backgroundColor = "red";
    document.querySelector(".a-3").style.color = "lightcyan";
    document.querySelector(".a-3").style.boxShadow = "none";
  }
};

document.querySelector(".a-3").addEventListener("click", handleAnswerWrong);

//Function for handling correct answer buttons
const handleAnswerRight = function () {
  if (answerText5 === myName) {
    document.querySelector(".a-5").style.backgroundColor = "limegreen";
    document.querySelector(".a-5").style.color = "blue";
    document.querySelector(".a-5").style.boxShadow = "none";
  } else {
    document.querySelector(".a-5").style.backgroundColor = "red";
    document.querySelector(".a-5").style.color = "lightcyan";
    document.querySelector(".a-5").style.boxShadow = "none";
  }

  document.querySelector(".question-block h3").style.color = "purple";
  document.querySelector(".question-block h3").style.fontSize = "20px";
  document.querySelector(".question-block").style.backgroundColor = "orange";
  document.querySelector(".question-block h3").textContent =
    "My name is... JASON CLULEY!";
};

document.querySelector(".a-5").addEventListener("click", handleAnswerRight);
