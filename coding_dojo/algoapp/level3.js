// Level 3 of Coding Dojo AlgoApp

// Challenge 1
var x = [1, 3, 5];
x[0] = x[2];
x[1] = x[0];
console.log(x); // Result: [5, 5, 5]

// Challenge 2
var x = [1, 3, 5];
var y = [0, 5, 7];
x[0] = x[1] + y[2];
y[1] = y[2] - x[0];
console.log(x); // Result: [10, 3, 5]

// Challenge 3
var x = [1, 3, 5, 8];
x[0] = x[x.length - 1];
console.log(x); // Result: [8, 3, 5, 8]

// Challenge 4
var x = [1, 3, 5, 8];
var temp = x[x.length - 1];
x[x.length - 1] = x[0];
console.log(x); // Result: [1, 3, 5, 1]

// Challenge 5
var x = [1, 3, 5, 8];
var temp = x[x.length - 1];
x[x.length - 1] = x[0];
x[0] = temp;
console.log(x); // Result: [8, 3, 5, 1]

// Challenge 6
var x = [1, 3, 5, 8];
x.pop();
x.push(7);
console.log(x); // Result: [1, 3, 5, 7]

// Challenge 7
var x = [1, 3, 5];
x[0] = 15;
x[3] = 77;
console.log(x); // Result: [15, 3, 5, 77];

// Challenge 8
var x = [1, 3, 5, 8, 2, -5, -8];
x[0] = x[x.length - 1];
x[x.length - 1] = x[0];
console.log(x); // Result: [1, 3, 5, 8, 2, -5, 1]

// Challenge 9


// Challenge 10

// Challenge 11

// Challenge 12

// Challenge 13

// Challenge 14

// Challenge 15