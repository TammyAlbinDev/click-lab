const headline = document.querySelector("#headline-1");
console.log(headline);

const question = document.getElementById("question-1");
const answer1 = document.getElementById("answer-1");

answer1.addEventListener("click", function () {
  question.textContent = "Correct!";
});

const answer2 = document.getElementById("answer-2");

answer2.addEventListener("click", function () {
  question.textContent = "Not quite!";
});

const answer3 = document.getElementById("answer-3");

answer3.addEventListener("click", function () {
  question.textContent = "Nope!";
});