// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Get elements from the DOM
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guessInput');

// Track the number of attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    setMessage('Please enter a valid number between 1 and 10');
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    setMessage(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
  } else {
    setMessage(`Wrong guess. Try again!`);
  }
}

// Function to set the message
function setMessage(msg) {
  messageElement.textContent = msg;
}
