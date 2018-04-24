// Level 6 of Coding Dojo AlgoApp

// Challenge 1
function a() {
  console.log(5);
}
a();
// Result: 5

// Challenge 2
function a() {
  console.log(55);
}
// Result: nothing, function wasn't called

// Challenge 3
a();
function a() {
  console.log(25);
}
// Result: 25

// Challenge 4
function a() {
  var b = 25;
  b = b + 10;
  console.log(b);
}
a();
// Result: 35

// Challenge 5
function a(b, c) {
  console.log(b);
  console.log(c);
}
a(3, 5);
// Result: 3, 5

// Challenge 6
function a(b, c) {
  return b + c;
}
console.log(a(3, 5));
// Result: 8

// Challenge 7
function a(b, c) {
  return b * c;
}
console.log(a(3, 5));
// Result: 15

// Challenge 8
function a(b, c) {
  return b * 3 - c;
}
console.log(a(3, 2));
console.log(a(1, 1));
// Result: 7, 2

// Challenge 9
function a(b, c) {
  return b + c;
}
console.log(a(1, 1) + a(2, 2));
// Result: 6

// Challenge 10
function a(b, c) {
  return b + c;
}
console.log(a(1, a(2, 3));
// Result: 6

// Challenge 11
function a(b, c) {
  return b + c;
}
console.log(a(a(1, 2), a(2, 3)));
// Result: 8

// Challenge 12
function a(b, c) {
  return b + c;
}
console.log(a(a(1, 2), a(2, a(1, 2))));
// Result: 8

// Challenge 13
function a(b, c) {
  console.log(b);
  return b + c;
}
console.log(a(3, 2));
// Result: 3, 5