// class hierarchy and structure just like in the real world !

class dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("Woof! My name is", this.name);
    }
    year() {
        console.log("Bark! I am", this.age, "years old");
    }
}

let myDog = new dog("Rex", 7);
let nicksDog = new dog("Buck", 14);

myDog.speak();
myDog.year();

nicksDog.speak();
nicksDog.year();