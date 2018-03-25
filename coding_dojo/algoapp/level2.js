// Level 2 of Coding Dojo AlgoApp

// Challenge 1
var x = [1, 2, 4];
console.log(x); // Result: [1, 2, 4]

// Challenge 2
var x = [1, 3, 5];
console.log(x[0]); // Result: 1

// Challenge 3
var x = [2, 4, 6];
console.log(x[1]); // Result: 4

// Challenge 4
var x = [1, 3, 5];
console.log(x[2]); // Result: 5

// Challenge 5
var x = [1.3];
console.log(x[0]); // Result: 1.3

// Challenge 6
var x = [1, 2, 4];
x[0] = x[1];
console.log(x); // Result: [2, 2, 4]

// Challenge 7
var x = [1, 3, 5];
var y = x.length;
console.log(y); // Result: 3

// Challenge 8
var x = [2, 4, 6, 3, 7];
var y = x.length - 2;
console.log(x[y]); // Result: 3

// Challenge 9
var x = [2, 4, 6, 3, 7];
var y = x.length;
console.log(x[y - 1]); // Result: 7

// Challenge 10
var x = [1, 3, 5, 7];
x[0] = x[x.length - 2];
console.log(x); // Result: [5, 3, 5, 7]

// Challenge 11
var x = [1, 3, 5, 7];
x[x.length - 3] = x[x.length / 2 + x.length / 4];
console.log(x); // Result: [1, 7, 5 ,7];

// Challenge 12
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3];
console.log(x); // Result: [1, 3, 4, 7]

// Challenge 13
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3] + x[x[0] + y[0]];
console.log(x); // Result: [1, 3, 9, 7]