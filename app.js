const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1Score")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2Score")
};

const resetButton = document.querySelector("#reset");
let winningScore = document.querySelector("#limit");
let winner = document.querySelector("#winner");
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
    }
    let winScore = parseInt(winningScore.value);
    if (winScore == player.score) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
        if (player == p1) {
            winner.innerText = "Player 1 Won! 🎉"
        }
        else {
            winner.innerText = "Player 2 Won! 🎉"
        }
        winner.classList.add('has-text-success');
    }
    player.display.textContent = player.score;
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

winningScore.addEventListener('change', reset);
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
    winner.innerText = "Let's Play 🎉";
    winner.classList.remove('has-text-success');
}
