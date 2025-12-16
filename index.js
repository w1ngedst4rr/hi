let questionnum = 0

function CreateFlashcard() {

    questionnum += 1;

    const question = document.getElementById("Question");
    const answer = document.getElementById("Answer");

    e.preventDefault();

    const Qv = question.value;
    const Av = answer.value;

    localStorage.setItem('question' + questionnum, Qv)
    localStorage.setItem('answer' + questionnum, Av)
    
    // put question and answer in localstorage

    // put the q&a from localstorage -> display
    //change id of the flashcard
    // create id of flashcard

}
