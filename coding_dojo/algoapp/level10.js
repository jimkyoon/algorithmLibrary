// Level 10 of Coding Dojo AlgoApp

// Challenge 1
var x = [['coding', 'boom'], ['dojo', 'yeah']];
console.log(x[0][0] + '-' + x[1][0]);
// Result: 'coding-dojo'

// Challenge 2
var x = [[5, 10], [15, 20 , 25, 30], [45, 50]];
console.log(x[1][3] + x[2][1] + x[0][0]);
// Result: 85

// Challenge 3
var x = 2;
var y = [[2, 4, 6, 8], [10], [12, 32, 50]];
if (y[0][0] == x) {
  console.log('Hello World');
}
else {
  console.log('Codingdojo');
}
// Result: 'Hello World'

// Challenge 4
var numbers = [[1, 4, 5, 7], [2, 6, 8, 9]];
if (numbers[0][3] == 7) {
  numbers[0].push(10);
  console.log(numbers[0]);
}
// Result: [[1, 4, 5, 7, 10], [2, 6, 8, 9]]

// Challenge 5
var x = [[2, 4, 6, 8], [12], [10, 32, 50]];
if (x[1][0] - x[2][0] == x[0][0]) {
  console.log(x[1][0] + x[2][1] + x[0][2]);
}
else {
  console.log(x[0][0] + x[1][0] + x[0][3]);
}
// Result: 50