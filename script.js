const dices = [`./images/dice-six-faces-one.svg`, `./images/dice-six-faces-two.svg`, `./images/dice-six-faces-three.svg`, `./images/dice-six-faces-four.svg`, `./images/dice-six-faces-five.svg`, `./images/dice-six-faces-six.svg`];
let diceImage = document.querySelector(".dice-dashboard img");
let msgContainer = document.querySelector(".msg-container");
let diceChoosers = document.querySelectorAll(".dice-chooser");
let selectedVariable = document.querySelector(".selected-dice");
let cScore = document.querySelector(".current-score");

let guessedNum;
let score = 0;
let timer;

function rollDice() {
    let random = Math.floor(Math.random() * 100) % 6;
    diceImage.src = dices[random];
    if (guessedNum == undefined) {
        clearInterval(timer);
        msgContainer.innerText = "Game Over! You have not guessed any Number";
    } else if (guessedNum == random + 1) {
        msgContainer.innerText = "Your Guess is Correct!";
        score = score + 1;
        cScore.innerText = score;
    } else {
        msgContainer.innerText = "Your Guess in incorrect!";
    }
    releaseAllDice();
}

document.addEventListener("DOMContentLoaded", () => {
    msgContainer.innerText = "Loading! Game will start in a few seconds!";
    timer = setInterval(() => {
        setTimeout(() => {
            msgContainer.innerText = "The Dice will change in 3 seconds!";
            setTimeout(() => {
                msgContainer.innerText = "The Dice will change in 2 seconds!";
                setTimeout(() => {
                    msgContainer.innerText = "The Dice will change in 1 second!";
                    setTimeout(() => {
                        msgContainer.innerText = "The Dice will change in 0 second!"
                        rollDice();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 5000);
})


for (let i = 0; i < diceChoosers.length; i++) {
    diceChoosers[i].addEventListener("click", () => {
        numClicked(diceChoosers[i]);
        blockAllDice(diceChoosers);
    })
}

function numClicked(dice) {
    if (dice.style.cursor != "not-allowed") {
        guessedNum = dice.innerText;
        dice.style.backgroundColor = "gray";
        selectedVariable.innerText = guessedNum;
    }
}

function releaseAllDice() {
    guessedNum = undefined;
    selectedVariable.innerText = "0";
    for (let i = 0; i < diceChoosers.length; i++) {
        let dice = diceChoosers[i];
        dice.style.backgroundColor = "";
        dice.style.cursor = "pointer";
    }
}

function blockAllDice() {
    for (let i = 0; i < diceChoosers.length; i++) {
        diceChoosers[i].style.cursor = "not-allowed";
    }
}