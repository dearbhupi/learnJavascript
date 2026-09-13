// console.log(Math.random()); // output is a random number between 0 and 1 including 0.0n
// console.log(Math.random() * 100); // output is a random number between 0 and 100 including 0.0n
// console.log(Math.floor(Math.random() * 100) + 1); // output is a random integer between 1 and 100 including 1 and 100   
// console.log(parseInt(Math.random() * 100) + 1); // output is a random integer between 1 and 100 including 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField'); // for the id value we use hash(#) before the id name
const remaning = document.querySelector('.lastResult'); // for the class value we use dot(.) before the class name
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // to keep track of the previous guesses
let numGuesses = 1; // to keep track of the number of guesses
let playGame = true; // to check if the game is still going on or not

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // to prevent the default behaviour of the form submission
        const guess = parseInt(userInput.value); // to get the value of the input field and convert it to an integer
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        prevGuess.push(guess); // add the guess to the array of previous guesses
        if (numGuesses === 11) { // if the number of guesses is 11, then the game is over
            displayResult(guess);
            displayMessge(`!!!GAME OVER!!! The number was ${randomNumber}`);
            endGame();
        }
        else{
            displayResult(guess);
            checkGuess(guess);
        }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessge(`Congratulations! You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessge(`Last guess was too low!`);
    } else if (guess > randomNumber) {
        displayMessge(`Last guess was too high!`);
    }
}

function displayResult(guess) {
    userInput.value = ''; // clear the input field
    guessSlot.innerHTML += `${guess} `; // display the previous guesses
    numGuesses++; // increment the number of guesses
    remaning.innerHTML = `Remaining Guesses: ${11 - numGuesses}`; // display the remaining guesses
}

function displayMessge(message) {
    lowOrHi.innerHTML = `${message}`; // display the message
}


function endGame() {
    userInput.value = ''; // clear the input field
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaning.innerHTML = '';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}   

}




// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert('Please enter a valid number');
//     } else if (guess < 1) {
//         alert('Please enter a number greater than 0');
//     } else if (guess > 100) {
//         alert('Please enter a number less than or equal to 100');
//     } else {
//         prevGuess.push(guess); // add the guess to the array of previous guesses
//         if (numGuesses === 1) {
//             guessSlot.innerHTML = 'Previous Guesses: ';
//         }
//         guessSlot.innerHTML += guess + ' '; // display the previous guesses
//         if (guess === randomNumber) {
//             remaning.innerHTML = 'Congratulations! You guessed it right!';
//             remaning.style.backgroundColor = 'green';
//             lowOrHi.innerHTML = '';
//             startOverGame();
//         }   else if (numGuesses === 10) {
//             remaning.innerHTML = '!!!GAME OVER!!!';
//             lowOrHi.innerHTML = '';
//             startOverGame();
//         } else {
//             remaning.innerHTML = 'Wrong!';
//             remaning.style.backgroundColor = 'red';
//             if (guess < randomNumber) {
//                 lowOrHi.innerHTML = 'Last guess was too low!';
//             } else if (guess > randomNumber) {
//                 lowOrHi.innerHTML = 'Last guess was too high!';
//             }
//         }
//         numGuesses++;
//         userInput.value = '';
//         userInput.focus();
//     }
// }

// function startOverGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     submit.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = '<h1 id="newGame">Start New Game</h1>';
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame() {
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function () {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuesses = 1;
//         guessSlot.innerHTML = '';
//         remaning.innerHTML = '';
//         lowOrHi.innerHTML = '';
//         userInput.removeAttribute('disabled');
//         submit.removeAttribute('disabled');
//         startOver.removeChild(p);
//         playGame = true;
//     });
// }
