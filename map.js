// I'm the map, I'm the map, I'm the map, I'm the map, I'm the map!

/* code creates a new map object, adds names as keys and their phone numbers as values,
prints sarah's number to the screen, asks if the name Alice is in the map,
then prints all the key-value pairs in the map to the screen using a for loop 
*/

const contacts = new Map();                                         // creates a new map called contacts

contacts.set("John", "789-1234");                                   // adds new names as keys and phone numbers as values to the map
contacts.set("Sarah", "456-5678");
contacts.set("Mike", "123-9101")


console.log("Sarah's phone number is: ", contacts.get("Sarah"));    // prints Sarah's phone number in a string to the screen
console.log("Does Alice exist?", contacts.has("Alice"));            // prints boolean value depending on if the name Alice is in the map

for (const [name, number] of contacts.entries()) {                  // for loop that loops through the map and prints all the key-value pairs to the screen
console.log(`${name}: ${number}`);
}