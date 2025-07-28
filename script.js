let secretNumber = generateNumber();
let attempts = 0;

function generateNumber() {
    let digits = [];
    while (digits.length < 4) {
        let rand = Math.floor(Math.random() * 10);
        if (!digits.includes(rand)) {
            digits.push(rand);
        }
    }
    return digits.join('');
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value;
    const result = document.getElementById("result");
    const history = document.getElementById("history");

    if (guess.length !== 4 || new Set(guess).size !== 4 || isNaN(guess)) {
        result.textContent = "Please enter 4 unique digits!";
        result.style.color = "red";
        return;
    }

    attempts++;
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }

    if (bulls === 4) {
        result.textContent = `🎉 Correct! The number was ${secretNumber}. You won in ${attempts} attempts!`;
        result.style.color = "green";
        document.getElementById("guessInput").disabled = true;
    } else {
        result.textContent = `${bulls} Bulls 🐂, ${cows} Cows 🐮`;
        result.style.color = "#333";
        const li = document.createElement("li");
        li.textContent = `Guess ${attempts}: ${guess} → ${bulls}B, ${cows}C`;
        history.appendChild(li);
    }

    document.getElementById("guessInput").value = "";
}
