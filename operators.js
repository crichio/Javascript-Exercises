// exercise in using operators to manipulate variable

let x = 10;
let y = 3;

// arithmetic operators

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);

// assignment operators 

console.log("Assign:", x = y);
console.log("Assign & Add:", x += y);
console.log("Assign & Subtract:", x -= y);
console.log("Assign & Multiply:", x *= y);
console.log("Assign & Divide:", x /= y);
console.log("Assign & Remainder", x %= y);
console.log("Assign & Exponentiate", x **= y);

// comparison operators

console.log("Equal to (loose):", x == y);
console.log("Equal to (strict):", x === y);
console.log("Not equal to (loose):", x != y);
console.log("Not equal to (strict):", x !== y);
console.log("Greater than:", x > y);
console.log("Less than:", x < y);
console.log("Greater than or equal to:", x >= y);
console.log("Less than or equal to:", x <= y);

// logical operators

console.log("AND:", x > y && y > 1);
console.log("OR:", x > y || y > 1);
console.log("NOT:", ! x > y);
