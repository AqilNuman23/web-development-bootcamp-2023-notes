const prompt = require("prompt-sync")();

const perInfo = () => {
    prompt("what is your name? ");
    prompt("what is their name? ");
};

const loveGame = () => {
    var loveScore = Math.floor(Math.random() * 100) + 1;
    console.log("Your love score is " + loveScore + "%");
};

const startGame = () => {
    while (true) {
        perInfo();
        loveGame();

        const playAgain = prompt("Wanna play again? (y/n)");
        if (playAgain != "y") break;
    }
};

startGame();
