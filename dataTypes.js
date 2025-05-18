// exercise in creating variables of different primitive types and printing their data types and values to the screen using string literals  


let userName = "C-rich";    // variable holding a string data type
let userNumber = 42;        // variable holding a number data type
let onTime = true;          // variable holding a boolean (true or false) data type
let correctMatch;           // variable holding an undefined data type
let myLoveLife = null;      // variable holding a null data type

console.log(typeof userName, typeof userNumber, typeof onTime, typeof correctMatch, typeof myLoveLife); // prints data type of each variable above to the screen
console.log(userName,userNumber,onTime,correctMatch);                                // prints the variables to the screen


console.log(`Hello ${userName}.
    You are user number ${userNumber}. 
    Were you on time for this assessment? ${onTime}. 
    Are you the correct match for this assessment? ${correctMatch}.`);           // prints variables onto screen in a sentence using template literals and variable interpolation