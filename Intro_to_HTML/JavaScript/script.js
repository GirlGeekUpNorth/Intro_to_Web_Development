//generate a random number between 0 and 1
let randomnumber = Math.random();
console.log(randomnumber);

//scale scale the range to between 0 and 9.99999
randomnumber = randomnumber * 10;
console.log(randomnumber);

//round the number down to the nearest whole number
randomnumber = Math.floor(randomnumber);
console.log(randomnumber);

//add 1 to the number to get a random number between 1 and 10
randomnumber = randomnumber + 1;
console.log(randomnumber);

let randomnumber2 = Math.floor(Math.random() * 10) + 1;
console.log(randomnumber2);

//create a variable to store the current date
let d = new Date();
console.log(d);  

//create variables to store the day month and year from d
let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

//create a formatted message
console.log(`Today is ${date}/${month}/${year}, and today I have learnt about JavaScript objects`);

//ask the user to enter their date of birth
let dobFull = prompt("What is your date of birth? Please enter in the format DD/MM/YYYY");
let dobYear = dobFull.slice(6,10);
let dobMonth = dobFull.slice(3,5);
let dobDate = dobFull.slice(0,2);

//convert the input into a date object
let dob = new Date(dobYear, dobMonth - 1, dobDate);
console.log(dob);

//calculate the difference between the current date and date of birth
let ageYears = d.getFullYear() - dob.getFullYear();
console.log(ageYears);

//get current date & month, get dob date and month, compare them, to see if the birthdate has passed yet, if the date hasn't passed, -1 from the result
if (d.getMonth() < dob.getMonth() || (d.getMonth == dob.getMonth && d.getDate() < dob.getDate())) {
    ageYears--;
}
console.log(ageYears);

//declare a variable called text and store your full name as a string
let text = "Claire Wicher";

//find the length of your name using the appropriate string method
let nameLength = text.length;
console.log(`Your name has ${nameLength} characters.`);

//change your first name to Joe/Jo/Jane and your second name to Bloggs
let newName = text.replace("Claire", "Jane").replace("Wicher", "Bloggs");
console.log(`New name: ${newName}`);

// convert your name to uppercase
let upperCaseName = text.toUpperCase();
console.log(upperCaseName);
