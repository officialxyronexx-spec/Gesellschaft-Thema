const quiz = [
    {
        question: "Was ist eine Gesellschaft?",
        answers: [
            "Eine Gemeinschaft von Menschen",
            "Eine Maschine",
            "Ein Königreich",
            "Ein Unternehmen"
        ],
        correct: 0
    },
    {
        question: "Wie arbeiteten Menschen vor der Industrialisierung?",
        answers: [
            "In Büros",
            "In großen Fabriken",
            "In der Landwirtschaft",
            "Mit Robotern"
        ],
        correct: 2
    },
    {
        question: "Warum zogen viele Menschen in Städte?",
        answers: [
            "Urlaub",
            "Fabrikarbeit",
            "Kriege",
            "Sport"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

function loadQuestion() {
    timeLeft = 10;
    document.getElementById("timer").innerText = timeLeft;

    const q = quiz[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersDiv.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectAnswer(index) {
    clearInterval(timer);

    if (index === quiz[currentQuestion].correct) {
        score += timeLeft * 10; // schneller = mehr Punkte
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML =
            `<h1>Quiz beendet!</h1>
             <h2>Dein Score: ${score}</h2>`;
    }
}

loadQuestion();
