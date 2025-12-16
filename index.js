let questionnum = 0;

let container = document.getElementById('flashcard-container'); 
let qgrouplist = [];
let agrouplist = [];
let qgroup = [];
let agroup = [];
let pastY;

function update() {
    localStorage.clear();
}

window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 150);
    });
});

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
}

const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="./"]');
homeLinks.forEach(link => {
    link.addEventListener('click', e => {
    });
});
