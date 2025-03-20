// 1. Declare a variable to store your full name
const fullName = prompt("What is your first and last name?")

// 2. Declare a variable to store your date of birth as a Date object
let birthDate = prompt("What is your date of birth? (MM/DD/YYYY)")
birthDate = new Date(birthDate);

// 3. Extract the month, first letter of first name, and first letter of last name
const birthMonth = birthDate.getMonth() + 1; // Months are 0-indexed, so we add 1
const firstLetterFirstName = fullName.charAt(0).toUpperCase();
const firstLetterLastName = fullName.split(" ")[1].charAt(0).toUpperCase(); // Gets last name's first letter

// 4. Determine the drag queen title based on birth month
let title = "";
if (birthMonth === 1 || birthMonth === 7) title = "Miss";
else if (birthMonth === 2 || birthMonth === 8) title = "Mrs";
else if (birthMonth === 3 || birthMonth === 9) title = "Lady";
else if (birthMonth === 4 || birthMonth === 10) title = "Dame";
else if (birthMonth === 5 || birthMonth === 11) title = "Madame";
else title = ""; // No title for June & December

// 5. Determine the first part of the drag name
let dragFirstName = "";
if (firstLetterFirstName === "A") dragFirstName = "Peaches";
else if (firstLetterFirstName === "B") dragFirstName = "Backroll";
else if (firstLetterFirstName === "C") dragFirstName = "Orgazma";
else if (firstLetterFirstName === "D") dragFirstName = "Sequence";
else if (firstLetterFirstName === "E") dragFirstName = "Felicia";
else if (firstLetterFirstName === "F") dragFirstName = "Kiki";
else if (firstLetterFirstName === "G") dragFirstName = "*No Name*";
else if (firstLetterFirstName === "H") dragFirstName = "Summer";
else if (firstLetterFirstName === "I") dragFirstName = "Iona";
else if (firstLetterFirstName === "J") dragFirstName = "Ornacia";
else if (firstLetterFirstName === "K") dragFirstName = "Ivana";
else if (firstLetterFirstName === "L") dragFirstName = "Charity";
else if (firstLetterFirstName === "M") dragFirstName = "Ophelia";
else if (firstLetterFirstName === "N") dragFirstName = "Toxic";
else if (firstLetterFirstName === "O") dragFirstName = "";
else if (firstLetterFirstName === "P") dragFirstName = "Ida";
else if (firstLetterFirstName === "Q") dragFirstName = "Regina";
else if (firstLetterFirstName === "R") dragFirstName = "Alotta";
else if (firstLetterFirstName === "S") dragFirstName = "Mimi";
else if (firstLetterFirstName === "T") dragFirstName = "Frieda";
else if (firstLetterFirstName === "U") dragFirstName = "*No Name*";
else if (firstLetterFirstName === "V") dragFirstName = "Tyra";
else if (firstLetterFirstName === "W") dragFirstName = "Bon Qui Qui";
else if (firstLetterFirstName === "X") dragFirstName = "Coco";
else if (firstLetterFirstName === "Y") dragFirstName = "Amanda";
else if (firstLetterFirstName === "Z") dragFirstName = "Zizi";

// 6. Determine the last part of the drag name
let dragLastName = "";
if (firstLetterLastName === "A") dragLastName = "Rivers";
else if (firstLetterLastName === "B") dragLastName = "Lake";
else if (firstLetterLastName === "C") dragLastName = "Surprise";
else if (firstLetterLastName === "D") dragLastName = "Eleganza";
else if (firstLetterLastName === "E") dragLastName = "Goodnight";
else if (firstLetterLastName === "F") dragLastName = "Kayne";
else if (firstLetterLastName === "G") dragLastName = "Beaverhousen";
else if (firstLetterLastName === "H") dragLastName = "Balls";
else if (firstLetterLastName === "I") dragLastName = "Summers";
else if (firstLetterLastName === "J") dragLastName = "Vision";
else if (firstLetterLastName === "K") dragLastName = "Heaux";
else if (firstLetterLastName === "L") dragLastName = "Cutab*tch";
else if (firstLetterLastName === "M") dragLastName = "Filth";
else if (firstLetterLastName === "N") dragLastName = "Tucker";
else if (firstLetterLastName === "O") dragLastName = "K-Mart";
else if (firstLetterLastName === "P") dragLastName = "Wylde";
else if (firstLetterLastName === "Q") dragLastName = "Latifah";
else if (firstLetterLastName === "R") dragLastName = "Plenty";
else if (firstLetterLastName === "S") dragLastName = "Bang Bang";
else if (firstLetterLastName === "T") dragLastName = "Foxxx";
else if (firstLetterLastName === "U") dragLastName = "Caliente";
else if (firstLetterLastName === "V") dragLastName = "Alert";
else if (firstLetterLastName === "W") dragLastName = "D-Lite";
else if (firstLetterLastName === "X") dragLastName = "Bush";
else if (firstLetterLastName === "Y") dragLastName = "Anaconda";
else if (firstLetterLastName === "Z") dragLastName = "Diamond";

// 7. Combine to get full drag name
const dragName = `${title} ${dragFirstName} ${dragLastName}`.trim();

// 8. Display the drag name
console.log(`Your drag name is: ${dragName}`);