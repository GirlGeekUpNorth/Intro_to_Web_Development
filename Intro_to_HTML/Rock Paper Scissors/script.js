//ask the player to choose rock, paper or scissors
let player = prompt("Enter rock (r), paper (p) or scissors (s)?");
alert(`You have chosen ${player}`);

//get the computer to choose rock, paper or scissors
let computer = 0;
let random = Math.floor(Math.floor() * 3) + 1;

if (random === 1) {
    computer = "r";
}
else if (random === 2) {
    computer = "p";
}
else {
    computer = "s";
}
alert(`The computer has chosen ${computer}`)

//compare the two choices
if (player === computer) {
    alert("It's a DRAW");
}
else if (player == "r") {
    if (computer === "s") {
        alert("You WIN!");
    }
    else {
        alert("You LOSE!");
    }
}
else if (player == "p") {
    if (computer === "r") {
        alert("You WIN!");
    }
    else {
        alert("You LOSE!");
    }
}
else if (player == "s") {
    if (computer === "p") {
        alert("You WIN!");
    }
    else {
        alert("You LOSE!");
    }
}



//tell the player who won