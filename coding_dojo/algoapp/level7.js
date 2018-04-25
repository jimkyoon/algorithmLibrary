// Level 7 of Coding Dojo AlgoApp

// Challenge 1
for (var i = 0; i < 100; i++) {
  if (i == 10) {
    break;
  }
  console.log(i);
}
// Result: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// Challenge 2
for (var i = 13; i <= 20; i++) {
  if (i == 50) {
    break;
  }
  console.log(i);
}
// Result: 13, 14, 15, 16, 17, 18, 19, 20

// Challenge 3
for (var i = 1; i <= 20; i++) {
  if (i > 5) {
    break;
  }
  else {
    console.log('hello');
  }
}
// Result: 'hello', 'hello', 'hello', 'hello', 'hello'

// Challenge 4
for (var i = 9; i <= 20; i++) {
  if (i == 10) {
    break;
  }
  else {
    console.log('hello');
  }
  console.log(i);
}
// Result: 'hello', 1, 'hello', 2, 'hello', 3, 'hello', 4, 'hello', 5, 'hello', 6, 'hello', 7, 'hello', 8, 'hello', 9

// Challenge 5
var message = 'CodingDojo';
for (var i = 5; i <= 20; i++) {
  if (i == message.length) {
    break;
  }
  console.log(i);
}
// Result: 5, 6, 7, 8