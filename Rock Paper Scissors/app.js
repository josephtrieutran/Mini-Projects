let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('Rock');
const paperDiv = document.getElementById('Paper');
const scissorsDiv = document.getElementById('Scissors');

function getCompChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function win(userChoice, compChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = `${userChoice} beats ${compChoice} You win!`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 500);
}


function lose(userChoice, compChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = `${userChoice} loses ${compChoice}. You lose!`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 500);
}

function draw(userChoice, compChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    resultP.innerHTML = `${userChoice} draws ${compChoice}. It's a draw!`;
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsSaper':
            win(userChoice, compChoice);
            break;
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            lose(userChoice, compChoice);
            break;
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => game('Rock'));
    paperDiv.addEventListener('click', () => game('Paper'));
    scissorsDiv.addEventListener('click', () => game('Scissors'));
}


main();