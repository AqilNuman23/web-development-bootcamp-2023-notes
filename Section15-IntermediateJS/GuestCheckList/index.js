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


// write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

const whosPaying = () => {
    let randomIndex = Math.floor(Math.random() * names.length);
    let randomNames = names[randomIndex];
    
    return randomNames + " is going to buy lunch today!";
};

const result = whosPaying();
console.log(result);