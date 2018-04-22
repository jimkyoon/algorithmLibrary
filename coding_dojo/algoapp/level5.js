// Level 4 of Coding Dojo AlgoApp

// Challenge 1
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// Result: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// Challenge 2
var x = 1;
for (var i = 0; i < 3; i++) {
  x = x + 1;
}
console.log(x);
// Result: 4

// Challenge 3
var x = 1;
for (var i = 0; i < 3; i = i + 2) {
  x = x + 1;
}
console.log(x);
console.log(i);
// Result: 3, 2

// Challenge 4
var x = 1;
for (var i = 0; i < -1; i = i + 2) {
  x = x + 1;
}
console.log(x);
// Result: 1

// Challenge 5
var x = [];
for (var i = 0; i < 10; i++) {
  x.push(i * 2);
}
console.log(x);
// Result: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// Challenge 6
var x = [1, 3, 5, 8];
for (var i = 0; i < x.length; i++) {
  if (x[i] > 4) {
    x[i] = 0;
  }
}
console.log(x);
// Result: [0, 0, 5, 8]

// Challenge 7
var x = [-1, 3, 2, 7];
for (var i = 0; i < x.length; i++) {
  if (x[i] < i) {
    x[i] = -10;
  }
}
console.log(x);
// Result: [-10, 3, 2, 7]

// Challenge 8
for (var i = 20; i != 10; i--) {
  console.log(i);
}
// Result: 20, 19, 18, 17, 16, 15, 14, 13, 12, 11

// Challenge 9
var x = 0;
for (var i = 1; i < 4; i++) {
  x = x + 1;
  console.log(x);
  console.log(i);
}
// Result: 1, 0; 2, 1; 3, 3

// Challenge 10
var x = 0;
for (var i = 1; i < 4; i = i + 2) {
  x = x + 1;
  console.log(x);
  console.log(i);
}
// Result: 1, 3; 2, 5
