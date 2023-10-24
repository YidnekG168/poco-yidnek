const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper text mark up language", "Hypertext only for styling", "Hyper text mar", "Hypertext markup Laune"],
      correctAnswer: 0,
    },
    {
      question: "How do you create a hyperlink in HTML?",
      options: ["Java", "<a>", "<link>", "<href>"],
      correctAnswer: 1,
    },
    {
      question: "How do you add comments in HTML code?",
      options: ["<!-- ... -->", "//", "</..\>", "<!.. "],
      correctAnswer: 0,
    },
    {
      question: "What is the HTML element used for creating an ordered (numbered) list?",
      options: ["<ol>", "<ul>", "<li>", "<lo>"],
      correctAnswer: 0,
    },
   
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const feedbackContainer = document.getElementById("feedback-container");
  const nextButton = document.getElementById("next-btn");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.textContent = currentQuestion.options[i];
      optionButton.addEventListener("click", () => checkAnswer(i));
      optionsContainer.appendChild(optionButton);
    }
  }
  
  function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      score++;
      showFeedback("Correct!", "green");
    } else {
      showFeedback("Incorrect. The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer], "red");
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showFeedback(message, color) {
    feedbackContainer.style.color = color;
    feedbackContainer.textContent = message;
  }
  
  function showScore() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "block";
  
    feedbackContainer.textContent = `You scored ${score} out of ${questions.length}!`;
  
    if (score === questions.length) {
      showFeedback("You are a genius!", "green");
    } else {
      showFeedback("You did your best! Your score: " + score, "blue");
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      optionsContainer.style.display = "block";
      feedbackContainer.textContent = "";
    } else {
      currentQuestionIndex = 0;
      score = 0;
      questionElement.style.display = "block";
      showQuestion();
    }
  });
  
  showQuestion();