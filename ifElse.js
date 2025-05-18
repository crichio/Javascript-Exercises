// exercise in conditionals! are you old enough to vote?

// imports node.js's readline module that creates an interface allowing me to read and write to the console.

const readline = require('readline').createInterface({        
    input: process.stdin,
    output: process.stdout
  });
  
readline.question("Enter your age: ", function(age) {        // prompts the user with the statement: "Enter your age"
    age = Number(age);                                       // converts string input from user into a number type

    if (age >= 18) {                                         // checks if user input number is equal to or greater than 18
    console.log("You can vote!");                            // if user number is equal to or greater than 18 it prints: "You can vote!"
    } else {    
        console.log("You are too young to vote.");          // if user number is less than 18 it prints: "You are too young to vote."
    }

    readline.close();                                       // ends the readline interface module allowing the program to exit
});