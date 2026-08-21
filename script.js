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
  document.body.style.backgroundColor = "lightblue";
});

const answer3 = document.getElementById("answer-3");

answer3.addEventListener("click", function () {
  question.textContent = "Nope!";
});

const hintButton = document.getElementById("hint-button");

hintButton.addEventListener("click", function () {
  document.getElementById("answer-message").textContent =
    "Hint: Think about the ocean along the eastern United States.";
});

const greetings = [
  "Good luck!",
  "No pressure.",
  "Nobody has got this one yet."
];

const greeting = document.getElementById("greeting");

const randomGreeting =
  greetings[Math.floor(Math.random() * greetings.length)];

greeting.textContent = randomGreeting;