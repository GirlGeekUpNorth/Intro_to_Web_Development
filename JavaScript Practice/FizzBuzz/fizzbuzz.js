//create a function that counts from 1 to 100 and prints each number to the console, EXCEPT, if the number is divisible by 3, return "Fizz", if the number is divisible by 5, return "Buzz" and if the nuber if divisible by both 3 and 5, return "FizzBuzz"

//create a function
function fizzbuzz(num) {
//count to 100
    for (let i = 1; i <= num; i++) {
//check if number is divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
//check if number is divisible 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
//check if number is divisble 5
        else if (i % 5 === 0 ) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz(100);
