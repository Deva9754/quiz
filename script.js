const questions = [
    {
        question: "what's ur name ? ",
        answers: [
            { text: "shark", correct: false },
            { text: "sharkk", correct: true },
            { text: "sharkk", correct: false },
            { text: "sharkk", correct: false },

        ]
    }
]

const questionelement = document.getElementById("");
const answerButton = document.getElementById("");
const Next = document.getElementById("");

let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    Showquestions();
}

function showquestion() {
    resetState();
    let currentquestion = question[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + "." + currentquestion.question;

    currentquestion.answers.foreach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);


    });

}

function resetState() {
    nextbutton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectanswer(ans) {

    const selectbtn = ans.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    } else {
        selectbtn.classList.add("incorrect");
    }

}

Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
    nextbutton.style.display = "block";
});

function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    }
    else {
        showscore();
    }
}

nextbutton.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    }
    else {
        startquiz();
    }

})

function showscore() {
    resetState();
    questionelement.innerHTML = ` your score is ${score} out of ${question.length}`;
    nextbutton, innerHTML = "playagain";
    nextbutton.style.disabled = "block";
}



startquiz();