// Define your questions and answers as an array of objects
const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    correctAnswer: 0
  },
  {
    question: "What does CSS stand for?",
    choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    correctAnswer: 1
  },
  {
    question: "What does JS stand for?",
    choices: ["Just Saying", "Java Symbol", "JavaScript"],
    correctAnswer: 2
  },
  {
    question: "What is the capital of India?",
    choices: ["Mumbai", "Vizag", "New Delhi"],
    correctAnswer: 2
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Neptune"],
    correctAnswer: 0
  },
  {
    question: "Which is the best Intern platform for students?",
    choices: ["Intern Crowd", "Oasis InfoByte", "Bharat Intern"],
    correctAnswer: 0
  },
  {
    question: "What is the abbreviation of OS?",
    choices: ["Ordering system", "Operating system", "Operational system"],
    correctAnswer: 1
  },
  {
    question: "Who is the President of America?",
    choices: ["Ramnath Kovind", "Joe Biden", "Barack Obama"],
    correctAnswer: 1
  },

  {
    question: "Who is the biggest Pan India Star?",
    choices: ["Prabhas", "Salman Khan", "Vijay  Thalapathy"],
    correctAnswer: 0
  },

  {
    question: "Which is the biggest River in the world?",
    choices: ["Nile", "Ganges", "Amazon"],
    correctAnswer: 2
  },
];

// Variables to track the current question and score
let currentQuestion = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  // Display question
  const questionText = document.createElement("p");
  questionText.textContent = questions[currentQuestion].question;
  quizContainer.appendChild(questionText);

  // Display choices
  const choices = questions[currentQuestion].choices;
  for (let i = 0; i < choices.length; i++) {
    const choice = document.createElement("div");
    choice.innerHTML = choices[i];
    choice.classList.add("choice");
    choice.setAttribute("data-index", i); // Store the index of the choice as a data attribute
    quizContainer.appendChild(choice);
  }

  // Attach click event listeners to choices
  const choiceElements = document.getElementsByClassName("choice");
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].addEventListener("click", handleChoiceClick);
  }
}

// Function to handle the choice click event
function handleChoiceClick(event) {
  const selectedChoice = event.target;
  const selectedAnswer = parseInt(selectedChoice.getAttribute("data-index")); // Get the selected choice index as an integer

  // Check if the answer is correct
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  // Move to the next question
  currentQuestion++;

  // Check if the quiz is over
  if (currentQuestion === questions.length) {
    showResults();
  } else {
    displayQuestion();
  }
}

// Function to display the final quiz results
function showResults() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.style.display = "none";

  const submitButton = document.getElementById("submit");
  submitButton.style.display = "none";

  const resultsContainer = document.getElementById("results");
  resultsContainer.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Start the quiz
displayQuestion();
