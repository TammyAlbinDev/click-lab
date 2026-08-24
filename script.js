let score = 0;

const headline = document.querySelector("#headline-1");
console.log(headline);

const scoreDisplay = document.getElementById("score");

// Result box
const resultBox = document.querySelector(".result-box");

function updateResult() {
  if (score === 3) {
    resultBox.textContent = `Quiz complete! You scored ${score} out of 3.`;

    answer1.disabled = true;
    answer4.disabled = true;
    answer8.disabled = true;
  }
}

// Question 1
const question = document.getElementById("question-1");

const answer1 = document.getElementById("answer-1");

answer1.addEventListener("click", function () {
  if (answer1.disabled) return; 
    
  score = score + 1;
  answer1.disabled=true;  
  question.textContent = "Correct!";
  scoreDisplay.textContent = `Score: ${score}`;
  updateResult();
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

// Question 2
const answer4 = document.getElementById("answer-4");

answer4.addEventListener("click", function () {
    if (answer4.disabled) return;
    
  score = score + 1;
    answer4.disabled = true;
  answer4.parentElement.previousElementSibling.textContent = "Correct!";
  scoreDisplay.textContent = `Score: ${score}`;
  updateResult();
});

const answer5 = document.getElementById("answer-5");

answer5.addEventListener("click", function () {
  answer5.parentElement.previousElementSibling.textContent = "Not quite!";
});

const answer6 = document.getElementById("answer-6");

answer6.addEventListener("click", function () {
  answer6.parentElement.previousElementSibling.textContent = "Nope!";
});

// Question 3
const answer7 = document.getElementById("answer-7");

answer7.addEventListener("click", function () {
  answer7.parentElement.previousElementSibling.textContent = "Not quite!";
});

const answer8 = document.getElementById("answer-8");

answer8.addEventListener("click", function () {
  if (answer8.disabled) return;

  score = score + 1;
  answer8.disabled = true;
  answer8.parentElement.previousElementSibling.textContent = "Correct!";
  scoreDisplay.textContent = `Score: ${score}`;
  updateResult();
});

const answer9 = document.getElementById("answer-9");

answer9.addEventListener("click", function () {
  answer9.parentElement.previousElementSibling.textContent = "Nope!";
});

// Hint
const hintButton = document.getElementById("hint-button");

hintButton.addEventListener("click", function () {
  document.getElementById("answer-message").textContent =
    "Hint: Think about the ocean along the eastern United States.";

  hintButton.disabled = true;
});

// Greeting
const greetings = [
  "Good luck!",
  "No pressure.",
  "Nobody has got this one yet."
];

const greeting = document.getElementById("greeting");

const randomGreeting =
  greetings[Math.floor(Math.random() * greetings.length)];

greeting.textContent = randomGreeting;