const quiz = [
    {
        question: "Was versteht man unter Gesellschaft?",
        answers: [
            "Eine Maschine",
            "Eine Gemeinschaft von Menschen",
            "Ein Unternehmen",
            "Eine Stadt"
        ],
        correct: 1
    },
    {
        question: "Wie lebten die meisten Menschen vor der Industriellen Revolution?",
        answers: [
            "In Großstädten",
            "Als Fabrikarbeiter",
            "Auf dem Land als Bauern",
            "In Büros"
        ],
        correct: 2
    },
    {
        question: "Welche neue soziale Gruppe entstand während der Industrialisierung?",
        answers: [
            "Ritter",
            "Arbeiterklasse",
            "Pharaonen",
            "Gladiatoren"
        ],
        correct: 1
    },
    {
        question: "Warum zogen viele Menschen in die Städte?",
        answers: [
            "Wegen neuer Fabrikarbeit",
            "Wegen Urlaub",
            "Wegen Schlössern",
            "Wegen Pferderennen"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.innerText = quiz[currentQuestion].question;
    answersElement.innerHTML = "";

    quiz[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(index) {
    if (index === quiz[currentQuestion].correct) {
        score++;
        alert("Richtig!");
    } else {
        alert("Falsch!");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML =
            `<h2>Quiz beendet!</h2>
             <p>Deine Punktzahl: ${score} von ${quiz.length}</p>`;
        document.getElementById("next-btn").style.display = "none";
    }
}

loadQuestion();
