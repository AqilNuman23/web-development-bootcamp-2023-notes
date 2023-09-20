// Discover new function which is includes()

const prompt = require("prompt-sync")();

var guestList = ["Angela","Yaya","Zara","Zarith","Yasmin"];
var guestName = prompt("Guest Name: ");

if (guestList.includes(guestName)) {
    console.log("Welcome");
} else {
    console.log("Sorry");
}


// how to add more using push in array
// how to add fizz and buzz when in number 3 and 5 (divisible)
var output = [];
var count = 1;

const fizzbuzz = () => {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
    count++;

    console.log(output);
};

fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();