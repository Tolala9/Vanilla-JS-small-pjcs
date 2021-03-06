let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 4;

const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! YOU WIN!`);

  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

    } else {
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
      guessInput.style.borderColor = 'red';
      guessInput.value = '';

    }

  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color
}

function gameOver(won, msg) {
  let color;
  won === true ? color = "green" : "red";

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);
  guessBtn.value = "Play again";
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
