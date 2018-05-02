// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName and vice versa.
let myNumber = 42;
let myName = 'Jim Yoon';
myNumber = myName;
myName = myNumber;

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop
for (let i = -52; i < 1066; i += 1) {
  console.log(i);
}

// Don't Worry, Be Happy
// Create beCheerful(). Within it, console.log string 'good morning'. Call it 98 times.
function beCheerful() {
  console.log('good morning');
}
for (let i = 1; i < 99; i += 1) {
  beCheerful();
}

// Multiples of Three, but Not All
// Use FOR loop to print multiples of 3 from -300 to 0. Skip -3 and -6.
for (let i = -300; i < 1; i += 1) {
  if (i === -3 || i === -6) {
    continue;
  }
  else {
    console.log(i);
  }
}

// Printing Integers with WHILE
// Print integers from 2000 to 5280 using WHILE
let intEx = 2000;
while (intEx < 5281) {
  console.log(intEx);
  intEx += 1;
}

// You Say It's Your Birthday
// If given 2 numbers represent your birth month and day in either order, log 'How did you know?' else log 'Just another day'
function myBirthday (num1, num2) {
  if (num1 === 10 && num2 === 21) {
    console.log('How did you know?');
  }
  else {
    console.log('Just another day...');
  }
}

// Leap Year
// Write a function that determines whether a given year is a leap year.
function leapYear (year) {
  if (year / 4) {
    if (year / 100) {
      console.log('Just another year');
    }
    else if (year / 400) {
      console.log('LEAP YEAR');
    }
    else {
      console.log('LEAP YEAR');
    }
  }
  else {
    console.log('Just another year');
  }
}

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Then log how many numbers there are.
