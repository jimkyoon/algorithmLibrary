// Level 9 of Coding Dojo AlgoApp

// Challenge 1
var number = '';
var x = 5;
while (x < 10) {
  number += x;
  x++;
}
console.log(number);
// Result: 56789

// Challenge 2
var count = 1;
while (count < 5) {
  console.log('Dojo');
  count++;
}
// Result: 'Dojo', 'Dojo', 'Dojo', 'Dojo'

// Challenge 3
var x = 1;
var y = 48;
while (x < 100) {
  if (x == y) {
    break;
  }
  x++;
}
console.log(x);
// Result: 48

// Challenge 4
var message = 'Coding';
var x = 1;
while (x < 100) {
  x++;
}
console.log(message);
// Result: 'Coding'

// Challenge 5
var x = 7;
var message = 'boom';
while (x > message.length) {
  console.log(message + x);
  x--;
}
// Result: 'boom7', 'boom6', 'boom5', 'boom4', 'boom3', 'boom2', 'boom1', 'boom0'