// exercise in objects

// this code creates an object with properties and methods and prints them to the screen

let person = {                                                              // creates an object called person
    name: "Christian",                                                      // creates a property named 'name' and stores the string "Christian"
    age: 26,                                                                // creates a property named 'age' and stores the number 26
    statement() {                                                           // declares a method called 'statement'
        console.log(this.name + " is " + this.age + " years old.");         // the method 'statement' prints a the name property and age property in a sentence
    }
};

console.log(person.name);                                                   // prints the name property to the screen
console.log(person.age);                                                    // prints the age property to the screen
person.statement();                                                         // calls the 'statement' method