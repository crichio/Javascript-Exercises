// $et$

/* this code creates a new set named fruits and adds a list 
of fruits to the set. Then it prints the number of fruits in the set,
asks if there is a banana in the set and returns a boolean value back,
then it deletes orange from the set and adds a coconut. Lastly, it lists
all the fruits in the set using the built in forEach loop.
*/

const fruits = new Set();                                   // creates a new variable named fruits and assigns it to a new set

fruits.add("apple");                                        // adds an apple to the fruits set
fruits.add("banana");                                       // adds a banana to the fruits set
fruits.add("orange");                                       // adds a orange to the fruits set
fruits.add("apple");                                        // adds another apple to the fruits set

console.log("Number of fruits:", fruits.size);              // prints a string and the size of the fruits set

console.log("Is there a banana?", fruits.has("banana"));    // prints a string asking if there is a banana in the fruits set and the used the .has method to search for a banana

fruits.delete("orange");                                    // deletes orange from the fruits set

fruits.add("coconut");                                      // adds a coconut to the fruits set

console.log("Here are all the fruits:");                    // prints a string
fruits.forEach(fruit => console.log(fruit));                // uses the built in forEach loop to loop over the fruits set and print each fruit

