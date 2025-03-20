//create a countdown sequence using a for loop
console.log("Countdown using FOR loop:");
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Liftoff!");

//create a countdown sequence using a while loop
console.log("Countdown using WHILE loop:")
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}   
console.log("Liftoff!");

//create a countdown sequence using a do...while loop
console.log("Countdown using DO...WHILE loop:");
let num = 10;
do {
    console.log(num);
    num--;
} while (num > 0);
console.log("Liftoff!");

// factors between 1 and 100
// take a numerical input from the user
const number = parseInt(prompt("Enter a number:"));

// find all factors greater than 1
for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

//higher or lower guessing game
// generate a random number between 1 and 13
const secretNumber = Math.floor(Math.random() * 13) + 1;
let attempts = 3; // User gets 3 attempts

console.log("Welcome to the Higher-or-Lower game!");
console.log("Guess a number between 1 and 13. You have 3 attempts.");

// loop for three attempts
while (attempts > 0) {
    let userGuess = parseInt(prompt(`You have ${attempts} attempts left. Enter your guess:`));

    // Check if the guess is correct, too high, or too low
    if (userGuess === secretNumber) {
        console.log("🎉 Congratulations! You guessed the correct number!");
        alert("🎉 Congratulations! You guessed the correct number!");
        break; // Exit the loop
    } else if (userGuess > secretNumber) {
        console.log("❌ Too high! Try again.");
        alert("❌ Too high! Try again.");
    } else {
        console.log("❌ Too low! Try again.");
        alert("❌ Too low! Try again.");
    }

    attempts--; // Reduce attempts

    // If out of attempts, reveal the correct answer
    if (attempts === 0) {
        console.log(`💥 Out of attempts! The correct number was ${secretNumber}.`);
        alert(`💥 Out of attempts! The correct number was ${secretNumber}.`);
    }
}
