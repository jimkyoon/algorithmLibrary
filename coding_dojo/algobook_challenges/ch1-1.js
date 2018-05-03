// Chapter 1 - Fundamentals
// pg 15

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
let printerCounter = 512;
let fiveCounter = 0;
while (printerCounter =< 4096) {
  if (printerCounter % 5 === 0) {
    console.log(printerCounter);
    fiveCounter += 1;
  }
  printerCounter += 1;
}
console.log(fiveCounter);

// Multiples of Six
// Print multiples of 6 up to 60,000 using WHILE
let mult6 = 0;
while (mult6 <= 60,000) {
  if (mult6 % 6 === 0) {
    console.log(mult6);
  }
  mult6 += 1;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print 'Coding' instead. If by 10, also print ' Dojo'.
for (let i = 1; i <= 100; i += 1) {
  if (i % 5 === 0 && i % 10 === 0) {
    console.log('Coding Dojo');
  }
  else if (i % 5 === 0) {
    console.log('Coding');
  }
  else {
    console.log(i);
  }
}

// What Do You Know?
// Your function will be given an input parameter 'incoming'. Please console.log this value.
const msg = 'incoming';
function whatDoYouKnow (message) {
  console.log(message);
}
whatDoYouKnow(msg);

// Whoa, That Sucker's Huge
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
let sum = 0;
for (let i = -300000; i < 300001; i += 1) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);
// Will come back to the shortcut

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (except 0) without a FOR loop
let start = 2016;
while (start > 0) {
  if (start % 4 === 0) {
    console.log(start);
  }
  start -= 1;
}

// Flexible Countdown
// Based on 'Countdown by Fours', given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using FOR loop.
function countDownBy (lowNum, highNum, mult) {
  for (let i = highNum; i > lowNum; i -= 1) {
    if (i % mult === 0) {
      console.log(i);
    }
  }
}

// Final Countdown
// Based on 'Flexible Countdown', given the new 4 parameters, (param1, param2, param3, param4) print the multiples of param1, start at param2, extending to param 3. However, if number is multiples of param4, skip it. Use WHILE.
function finalCountdown (param1, param2, param3, param4) {
  let start = param2;
  while (start < param3) {
    if (start % param4 === 0) {
      start += 1;
    }
    else if (start % param1 === 0) {
      console.log(start);
      start += 1;
    }
    else {
      start += 1;
    }
  }
}