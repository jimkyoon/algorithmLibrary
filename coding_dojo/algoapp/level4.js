// Level 4 of Coding Dojo AlgoApp

// Challenge 1
var counter = 1;
if (counter === 1) {
  console.log('hello');
}
// Result: 'hello'

// Challenge 2
var counter = 1;
if (counter === 1) {
  console.log('hello');
}
else if (counter === 2) {
  console.log('world');
}
// Result: 'hello'

// Challenge 3
var counter = 2;
if (counter < 10) {
  console.log('less than 10');
}
else {
  console.log('greater than or equal to 10');
}
// Result: 'less than 10'

// Challenge 4
var counter = 1;
if (counter === 5) {
  console.log('coding');
}
else {
  console.log('dojo');
}
// Result: 'dojo'

// Challenge 5
var x = [2, 4, 5];
if (x[counter] < 5) {
  console.log('coding');
}
else {
  console.log('dojo');
}
// Result: 'coding'

// Challenge 6
var x = [2, 4, 5];
var counter = 2;
if (x[counter] > 19) {
  console.log('coding');
}
else {
  console.log('dojo');
}
// Result: 'dojo'

// Challenge 7
var x = [2, 4, 5];
var counter = 0;
if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}
console.log(x[counter]);
// Result: 'coding', 4

// Challenge 8
var x = [2, 4, 5];
var counter = 0;
if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}
if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}
if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}
console.log(x);
console.log(counter);
// Result; 'coding', 'coding', 'coding', [2, 4, 5], 3