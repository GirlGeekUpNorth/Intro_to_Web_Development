//generate a random number between 0 and 1 with Math.random()
let randomnumber = Math.random();

//scale the range to between 0 and 9.99999
randomnumber = randomnumber * 10;

//round the number down to the nearest whole number
randomnumber = Math.floor(randomnumber);

//add 1 to the number to get a random number between 1 and 10
randomnumber = randomnumber + 1;

//create a random number between 1 and 10
randomnumber = Math.floor(Math.random() * 10) + 1;
console.log(randomnumber);

//create a variable to store the current date
let d = new Date();
console.log(d);

//create variables to store the day month and year from d
let day = d.getDate();
let month = d.getMonth() + 1 ;
let year = d.getFullYear();

//create a formatted message
console.log(`Today, is ${day}/${month}/${year}, and today I have learnt about JavaScript objects`);

//ask the user to enter their date of birth
let dobYear = prompt("What year were you born? Please enter in the format YYYY");
let dobMonth = prompt("What month were you born? Please enter in the format MM");
let dobDate = prompt("What date were you born? Please enter in the format DD");

//convert the input into a date object
let dob = new Date(dobYear, dobMonth - 1, dobDate);
console.log(dob);

//calculate the difference between the current date and the date of birth
let ageYears = d.getFullYear() - dob.getFullYear();

//adjust if the current date has not yet reached the birthday
if (d.getMonth() < dob.getMonth() || (d.getMonth() == dob.getMonth() && d.getDate() < dob.getDate())) { 
    ageYears--;
}

console.log(ageYears);

// declare a variable called text and store your full name as a string
let text = "Claire Wicher"; // Replace with your actual full name

// find the length of your name using the appropriate string method
let nameLength = text.length;
console.log(`Your name has ${nameLength} characters.`);

// change your first name to Joe/Jo/Jane and your second name to Bloggs
let newName = text.replace("Claire", "Jane").replace("Wicher", "Bloggs"); // Changes first and last name
console.log(`New name: ${newName}`);

// convert your name to uppercase
let upperName = text.toUpperCase();
console.log(`Uppercase: ${upperName}`);
