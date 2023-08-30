const options = document.getElementById('options');
const playAgainButton = document.getElementById('playAgainButton');
const rangeInput = document.getElementById('rangeInput');
const rangeButton = document.getElementById('rangeButton');

let maxNumber = parseInt(rangeInput.value);
let randomNumber = generateRandomNumber(maxNumber);
let attempts = 0;

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function showMessage(text, color) {
    message.innerHTML = text;
    message.style.color = color;
}

function resetGame() {
    randomNumber = generateRandomNumber(maxNumber);
    attempts = 0;
    guessInput.disabled = false;
    guessButton.disabled = false;
    playAgainButton.classList.add('hidden');
    showMessage(`Can you guess the secret number between 1 and ${maxNumber}?`, '#333');
    guessInput.value = '';
    rangeInput.disabled = false;
    rangeButton.disabled = false;
}

guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        showMessage(`🎉 Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts! 🎉`, 'green');
        guessInput.disabled = true;
        guessButton.disabled = true;
        playAgainButton.classList.remove('hidden');
    } else if (guess < randomNumber) {
        showMessage('⬆️ Try a higher number.', 'red');
    } else {
        showMessage('⬇️ Try a lower number.', 'red');
    }
});

playAgainButton.addEventListener('click', resetGame);

rangeButton.addEventListener('click', () => {
    maxNumber = parseInt(rangeInput.value);
    resetGame();
});

resetGame();
