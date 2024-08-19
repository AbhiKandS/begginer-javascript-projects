const winningModel = {
    'rock' : 'scissor',
    'paper' : 'rock',
    'scissor' : 'paper',
}

const RPS = ['rock', 'paper', 'scissor']

let draw = parseInt(localStorage.getItem('draw')) || 0;
let win = parseInt(localStorage.getItem('win')) || 0;
let lose = parseInt(localStorage.getItem('lose')) || 0;
let playerChoice, computerChoice;

document.querySelector('#score').innerHTML = `
    <td>${win}</td>
    <td>${lose}</td>
    <td>${draw}</td>
    `;

document.querySelector('#restart').addEventListener('click', () => { restartGame() });

for (const choice of RPS) {
    document.querySelector(`#${choice}`).addEventListener('click',
        () => {
            playerChoice = choice;
            let random = Math.floor(3 * Math.random());
            computerChoice = RPS[random];
            displayChanges();
        }
    )
}


function matchResult(playerChoice, computerChoice) {

    const DRAW = playerChoice === computerChoice;
    const WIN = winningModel[playerChoice] === computerChoice;

    if (DRAW) {
        ++draw;
        localStorage.setItem('draw', draw);
        return "Draw"
    }
    else if (WIN) {
        ++win;
        localStorage.setItem('win', win);
        return "You Win";
    }
    else {
        ++lose;
        localStorage.setItem('lose', lose);
        return "You Lose";
    }
}

function displayChanges() {
    document.querySelector('#result').innerHTML = matchResult(playerChoice, computerChoice);

    document.querySelector('#choice').innerHTML = `
    <td>${playerChoice}</td>
    <td>${computerChoice}</td>
    `;
    document.querySelector('#score').innerHTML = `
    <td>${win}</td>
    <td>${lose}</td>
    <td>${draw}</td>
    `;
}

function restartGame() {
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#choice').innerHTML = '';
    document.querySelector('#score').innerHTML = '';

    win = 0;
    lose = 0;
    draw = 0;

    localStorage.setItem('win', win);
    localStorage.setItem('lose', lose);
    localStorage.setItem('draw', draw);
}