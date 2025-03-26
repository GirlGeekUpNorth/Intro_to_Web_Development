//for loop
console.log("Countdown using FOR loop:");
for(let i = 10; i > 0; i--)  {
    console.log(i);
}

//while loop
console.log("Countdown using WHILE loop:");
let count = 0;
while(count > 0) {
    console.log(count);
    count--;
}
console.log("Liftoff!");

//do...while loop
console.log("Countdown using DO WHILE loop:");
let num = -10;
do {
    console.log(num);
    num--;
}
while (num > 0);
console.log("Liftoff!");

//factors greater than 1 for a given number
const number = prompt("Enter a number:");
for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}   

//higher or lower guessing game

//generate a random number between 1 and 13
const secretNumber = Math.floor(Math.random() * 13) +1;
let attempts = 3;

console.log("Welcome to the Higher-or-Lower game!");
console.log("Guess a number between 1 and 13, you have 3 attempts to get it right.");

//allow for 3 attempts for the user to input a guess
while (attempts > 0) {
    let userGuess = parseInt(prompt(`You have ${attempts} attempts left. Enter your guess:`));
    //check if guess is correct or not and provide feedback (e.g. too high/too low)
    if (userGuess === secretNumber) {
        console.log("Congratulations! You have guessed the correct number!");
        break;
    }
    else if (userGuess > secretNumber) {
        console.log("Too high! Try again.");
    }
    else {
        console.log("Too low! Try again.");
    }
    attempts--;
}
// after 3 attempts, reveal the answer if not guressed correctly
if (attempts === 0 ) {
    console.log(`Out of attempts! The corrects number was ${secretNumber}.`);
}