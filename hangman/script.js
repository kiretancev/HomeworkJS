    let word;             
    let maxLives = 10;       
    let livesLeft;         
    let guessedLetters;     

    function initializeGame() {
        let words = ["hangman", "computer", "surfing", "walking", "swimming"];
        word = words[Math.floor(Math.random() * words.length)];
        livesLeft = maxLives;

        guessedLetters = Array(word.length).fill('_');

        updateDisplay(`Lives left: ${livesLeft}`);
    }

    function updateDisplay(message) {
        document.getElementById('word-display').innerText = guessedLetters.join(' ');
        document.getElementById('message').innerText = message;
    }

    function makeGuess() {
        const guessInput = document.getElementById('guess-input');
        const guess = guessInput.value.toLowerCase();

        let message = '';

        if (!guess.match(/[a-z]/)) {
            message = 'Please enter a valid letter.';
            updateDisplay(message);
            return;
        }

        if (guessedLetters.includes(guess)) {
            message = 'You already guessed that letter.';
            updateDisplay(message);
            return;
        }

        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guessedLetters[i] = guess;
                }
            }

            let _pos = guessedLetters.indexOf('_');
            
            if (_pos < 0) {
                message = 'Congratulations! You guessed the word!';
                disableInput();
                finish = true;
            }
        } else {
            livesLeft--;

            if (livesLeft === 0) {
                message = `Sorry, you lost. The correct word was: ${word}`;
                disableInput();
                finish = true;
            }
            else{
                message = `Lives left: ${livesLeft}`
            }
        }
        
        updateDisplay(message);

        guessInput.value = '';
        guessInput.focus();
    }

    function disableInput() {
        document.getElementById('guess-input').disabled = true;
        document.querySelector('button').disabled = true;
    }

    window.onload = initializeGame;