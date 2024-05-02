class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizContainer = document.getElementById("quiz");
    this.resultsContainer = document.getElementById("results");
    this.submitButton = document.getElementById("submit");
    this.submitButton.addEventListener("click", () => this.showResults());
    this.displayQuestion();
  }

  displayQuestion() {
    this.quizContainer.innerHTML = "";
    const question = this.questions[this.currentQuestionIndex];
    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    this.quizContainer.appendChild(questionText);
    question.choices.forEach((choice, index) => {
      const choiceElement = document.createElement("div");
      choiceElement.innerHTML = choice;
      choiceElement.classList.add("choice");
      choiceElement.setAttribute("data-index", index);
      choiceElement.addEventListener("click", (event) => this.handleChoiceClick(event));
      this.quizContainer.appendChild(choiceElement);
    });
  }

  handleChoiceClick(event) {
    const selectedChoice = event.target;
    const selectedAnswer = parseInt(selectedChoice.getAttribute("data-index"));
    if (selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      this.showResults();
    } else {
      this.displayQuestion();
    }
  }

  showResults() {
    this.quizContainer.style.display = "none";
    this.submitButton.style.display = "none";
    this.resultsContainer.textContent = `You scored ${this.score} out of ${this.questions.length}!`;
  }
}

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
  // Add more questions as needed
];

new Quiz(questions);
