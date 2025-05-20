// exercise in do while loops !

/* 
asks the user to enter a number between 1 and 5 
until the correct number is guessed which is 3
then is prints "Correct! You guessed the number!"
*/

let correctNumber = 3;                                          // declares variable and assigns the number 3 to it
let guess;                                                      // declares variable and leaves it undefined

do {
    guess = prompt("guess a number between 1 and 5:");          // assigns guess variable to user input to prompt question
} while (Number(guess) !== correctNumber);                      // converts user prompt to a number and states to keep prompting user while the user input does not equal the correctNumber variable or 3

alert("Correct! You guessed the number!");                      // alerts the user with a string if user guesses the number correctly



