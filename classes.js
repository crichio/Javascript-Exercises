// class hierarchy and structure just like in the real world !

// code creates a new class called dog, defines the objects properties and methods, creates new objects inside the class, and calls their methods

class dog {                                                     // creates a class called dog
    constructor(name, age) {                                    // using the constructor method to initialize future object's properties
        this.name = name;                                       // stores the name properties value when creating a new object inside the class
        this.age = age;                                         // stores the age properties value when creating a new object inside the class
    }
    speak() {                                                   // creates a method called speak
        console.log("Woof! My name is", this.name);             // prints a strings and the name property of selected object
    }
    year() {                                                    // creates a method called year
        console.log("Bark! I am", this.age, "years old");       // prints a string and the age property of selected object
    }
}

let myDog = new dog("Rex", 7);                                  // declares a new variable called myDog which creates a new object in the dog class and passes it's property values
let nicksDog = new dog("Buck", 14);                             // declares a new variable called nicksDog which creates a new object in the dog class and passes it's property values

myDog.speak();                                                  // calls the speak method for myDog object in dog class
myDog.year();                                                   // calls the year method for myDog object in dog class

nicksDog.speak();                                               // calls the speak method for nicksDog object in dog class
nicksDog.year();                                                // calls the year method for nicksDog object in dog class