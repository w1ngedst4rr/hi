window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 150);
    });
});

let container = document.getElementById('flashcard-container');
if (container) {

    const totalQuestions = localStorage.length / 2;
    for (let i = 1; i <= totalQuestions; i++) {
        const q = localStorage.getItem('question' + i);
        const a = localStorage.getItem('answer' + i);

        const card = document.createElement('div');
        card.classList.add('flashcard', 'fade-up');

        const p = document.createElement('p');
        p.textContent = q + " → " + a;

        card.appendChild(p);
        container.appendChild(card);

        setTimeout(() => {
            card.classList.add('show');
        }, i * 150);
    }

    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", () => {
        const questionInput = document.getElementById("question-input");
        const answerInput = document.getElementById("answer-input");

        if (questionInput.value && answerInput.value) {
            let questionnum = localStorage.length / 2 + 1;

            localStorage.setItem('question' + questionnum, questionInput.value);
            localStorage.setItem('answer' + questionnum, answerInput.value);

            const card = document.createElement('div');
            card.classList.add('flashcard', 'fade-up');

            const p = document.createElement('p');
            p.textContent = questionInput.value + " → " + answerInput.value;

            card.appendChild(p);
            container.appendChild(card);

            setTimeout(() => {
                card.classList.add('show');
            }, 50);

            questionInput.value = "";
            answerInput.value = "";
        }
    });
}

function update() {
    localStorage.clear();
}
