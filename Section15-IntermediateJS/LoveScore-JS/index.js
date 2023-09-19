const prompt = require("prompt-sync")();

const perInfo = () => {
    const yourName = prompt("what is your name? ");
    const theirName = prompt("what is their name? ");

    return {yourName, theirName};
};

const loveGame = () => {
    var loveScore = Math.floor(Math.random() * 100) + 1;
    let indicaterMessage = "";
    // love score indicater
    if (loveScore === 100) {
        indicaterMessage = "Your love is perfect, congratulation";
    } else if (loveScore > 70) {
        indicaterMessage = "Your love is gonna be cool, congratulation";
    } else if (loveScore > 50) {
        indicaterMessage = "Your love is just fine";
    } else if (loveScore <= 50) {
        indicaterMessage = "You may need some luck and faith in it";
    } else {
        indicaterMessage = "You might consider to chase another person :|";
    }
    return {indicaterMessage, loveScore};
};

const startGame = () => {
    while (true) {
        const perInfoResult = perInfo();
        const loveGameResult = loveGame();

        console.log("Your love score is " + loveGameResult.loveScore + "% \n" + perInfoResult.yourName + " and " + perInfoResult.theirName + ", " + loveGameResult.indicaterMessage);

        const playAgain = prompt("Wanna play again? (y/n): ");
        if (playAgain != "y") break;
    }
};

startGame();
