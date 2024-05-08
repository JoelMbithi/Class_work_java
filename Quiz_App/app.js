const questions = [
    {
        question: "Which is the fastest car in the world?",
        answers: [
            { text: "Subaru", correct: false },
            { text: "Nissan", correct: false },
            { text: "Ferrari", correct: false },
            { text: "Lamborghini", correct: true },
        ]
    },

    {
        question: "Which is the animal which can stay alive without a head?",
        answers: [
            { text: "chameleon", correct: false },
            { text: "fish", correct: false },
            { text: "cockroach", correct: true },
            { text: "Snail", correct: false },
        ]
    },

    {
        question: "Which is the best platform for making researches?",
        answers: [
            { text: "Google", correct: false },
            { text: "ChatGPT", correct: false },
            { text: "Google Scholar", correct: true },
            { text: "YouTube", correct: false },
        ]
    },
    {
        question: "The best Game to play?",
        answers: [
            { text: "FIFA", correct: true },
            { text: "Quiz", correct: false },
            { text: "Racing", correct: false },
            { text: "Euro Truck", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//variable to store index scores

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });


}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored  ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();