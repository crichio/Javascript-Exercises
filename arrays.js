// exercise in arrays

let foods = ["Pizza", "Sushi", "Tacos"];  // creates an array called foods and list 3 strings of foods in it

foods.push("Cheeseburger");               // adds another string for food to the array because arrays in Javascript are mutable !

for (let i = 0; i < foods.length; i++){   // a for loop that declares variable i and sets it equal to 0, perform for loop when i is less the length of the array foods, print , add 1 to i
    console.log(foods[i]);                // body of the for loop prints the data in array at index of variable i 
}



