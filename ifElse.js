// exercise in conditionals! are you old enough to vote?

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question("Enter your age: ", function(age) {
    age = Number(age);

    if (age >= 18) {
    console.log("You can vote!");
    } else {
        console.log("You are too young to vote.");
    }

    readline.close();
});