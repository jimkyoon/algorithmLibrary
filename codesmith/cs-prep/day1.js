// CS Prep Day 1

// Functions
// Functions give programs complex, reusable units of behavior. Just like variables, they have to be declared. To do this, we use the function keyword. Here's an example of a function declaration:

// function sayHello() {
//   console.log('hello');
// }
// Let's make another function:

// function sayGoodbye() {
//   console.log('goodbye'); 
// }
// Now we have two functions named sayHello and sayGoodbye. We can invoke a function by writing its name (or the name of a variable that points to it) followed by parentheses. If the function takes any arguments, we put these inside the parentheses.

// sayHello(); // prints 'hello'
// sayGoodbye(); // prints 'hello'
// Directions
// With your partner, decide which laptop you would like to use. (Since the two of you will be pair programming, you will only need to type on one computer).
// Add your code in the editor on the left.
// After each challenge, uncomment the console.log and run your code with the button marked "run code".
// Make sure that the output you see in the console (the black area at the bottom left of the window) matches the expected output (what the function "should print"). If it does not, edit your code until it does.

// Comparisons
// The logical operators && (and), || (or), and ! (not) help you establish powerful control flow.

// A && B evaluates to true only if A and B are both true
// A || B evaluates to true if one or both the items are true
// ! inverts a true to a false, or a false to a true
// Here are some examples:

// true && true    // true
// true && false   // false
// false && true   // false
// false && false  // false

// true  || true   // true
// false || true   // true
// true  || false  // true
// false || false  // false

// !true   // false
// !false  // true
// !!true  // true

// var isYoung = true;
// var isTall = false;

// isYoung && isTall   // false
// isYoung && !isTall  // true
// When we compare two values using a comparison operator, the result is a Boolean value. JavaScript's comparison operators include the following:

// == (equals)
// === (strictly equals, in data type and value)
// != (does not equal)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// Here are some examples:

// 6 == 5    // false
// 6 === 5   // false
// 6 != 5    // true
// '5' == 5  // true
// '5' === 5 // false
// '5' != 5  // false
// '5' !== 5 // true
// 6 > 5     // true
// !(6 > 5)  // false
// 6 >= 5    // true
// 6 >= 6    // true
// 6 > 6     // false
// 7 < 8     // true
// 7 <= 7    // true
// Control Flow
// We can use a combination of Boolean expressions and control flow statements to control the flow of the program and create "if this, then that" functionality.

// Here are some examples:

// if (someCondition) {
//   // code that will run if someCondition evaluates to true
// }

// if (someCondition) {
//   // code that will run if someCondition evaluates to true
// } else {
//   // code that will run if someCondition evaluates to false
// }

// if (condition1) {
//  // code that will run if condition1 evaluates to true
// } else if (condition2) {
//  // code that will run if condition1 evaluates to false and
//  // condition2 evaluates to true
// }

// if (condition1) {
//  // code that will run if condition1 evaluates to true
// } else if (condition2) {
//  // code that will run if condition1 evaluates to false and
//  // condition2 evaluates to true
// } else {
//  // code that will run if both condition1 and condition2
//  // evaluate to false
// }
// Loops
// Another type of control flow statement is a loop. We can use a loop to do things repeatedly. A for loop typically uses a variable called an iterator to do something a certain number of times.

// Here is an example:

// for (var i = 0; i < 5; i++) {     
//   // code that will run 5 times   
// }
// A for loop typically consists of three statements:

// An iterator initialization followed by a semicolon
// A break condition, which will stop the loop when it evaluates to false, followed by a semicolon
// An incrementation statement that changes the value of the iterator (In the example above, the ++ operator increases the value of i by 1 at the end of each loop).
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// // This would print 0, 1, 2, 3, 4



// Function Challenges

////////////////////////////
//     Challenge 1
////////////////////////////

// Write a function called printDriverHeight that logs the driver's height when invoked.

function printDriverHeight() {
  console.log('Driver\'s height is ...');
}

// Uncomment the line below to test your code
printDriverHeight();
// should print the driver's height



////////////////////////////
//     Challenge 2
////////////////////////////

// Declare a function called printNavigatorName that prints the navigator's name.
// The functions your wrote above are neat, but they can only log the values you hard-coded into them. We can expand the behavior of functions with parameters:

// function howTall(height) {
//   console.log('I am ' + height + ' tall');
// }
// howTall('5 feet'); // prints 'I am 5 feet tall'
// In the example above, the function howTall accepts a parameter called height, and its behavior changes depending on this input. In the following challenges, you'll write functions with parameters.

function printNavigatorName() {
  console.log('Navigator\'s name is Jordan');
}

// Uncomment the line below to test your code
printNavigatorName();
// should print the navigator's name



////////////////////////////
//     Challenge 3
////////////////////////////

// Declare a function called printName.
// It will take in a parameter name and print that name.
// Call printName with the driver's name as a parameter.
// Call printName with the navigator's name as a parameter.

function printName(driver, navigator) {
  return driver + ' and ' + navigator; 
}

console.log(printName('Jordan', 'Jim'));

// When you run your code, it should print the driver's name followed by the navigator's name



////////////////////////////
//     Challenge 4
////////////////////////////

// Declare a function called printGroupName.
// It will take two parameters driverName and navigatorName.
// It will print the two parameters with the word 'and' between them.
// Usually, in addition to side effects like printing things, we want our functions to return a value so that it can be used elsewhere. We can store this return value in a variable:

// function timesTwo(age) {
//   return age * 2;
// }
// var myAge = 26;
// var twiceMyAge = timesTwo(myAge); // twiceMyAge === 52
// If we don't use the return keyword when defining our function, it will return undefined.

// function timesTwo(age) {
//   console.log(age * 2);
// }
// var myAge = 26;
// var twiceMyAge = timesTwo(myAge); // twiceMyAge === undefined
// In the challenges below, you will write functions with return statements.

function printGroupName(driverName, navigatorName) {
  console.log(driverName + ' and ' + navigatorName);
}



// Uncomment the line below to test your code
printGroupName('Jordan', 'Jim');



////////////////////////////
//     Challenge 5
////////////////////////////

// Declare a function called multiplyHeight.
// It will take two parameters driverHeight and navigatorHeight.
// It should return the product of the heights.

function multiplyHeight(driverHeight, navigatorHeight) {
  return driverHeight * navigatorHeight;
}

// Uncomment the line below to test your code
console.log('Challenge 5:', multiplyHeight(66, 72) === 4752);
// should print 'Challenge 5: true'



////////////////////////////
//     Challenge 6
////////////////////////////

// Declare a function called square..
// It will take number as a parameter.
// It will return the square of the number.

function square(number) {
  return number * number;
}

// Uncomment the line below to test your code
console.log('Challenge 6:', square(3) === 9 && square(-4) === 16);
// should print 'Challenge 6: true'



////////////////////////////
//     Challenge 7
////////////////////////////

// Declare a function getArea.
// It will take radius as a parameter.
// It will use the function square to calculate the square of the radius.
// It should return 3.14 times the square of the radius.

function getArea(radius) {
  let output = square(radius);
  output *= 3.14;
  return output;
}

// Uncomment the line below to test your code
console.log('Challenge 7:', getArea(5) === 78.5);
// should print 'Challenge 7: true'



// Control Flow Challenges



////////////////////////////
//     Challenge 8
////////////////////////////

// Write a function greeting that accepts a string name and a boolean casual.
// The function should log 'Hey ' + name if causal is true or 'Hello ' + name if casual is false.
// Call your function with the navigator's name and true.
// Call your function with the driver's name and false.

const greeting = (name, casual) => {
  if (casual === true) {
    console.log('Hey ' + name);
  } else {
    console.log('Hello ' + name);
  }
};

greeting('Jim', true);
greeting('Jordan', false);
// When you run it, it should print the following:
// Hey followed by the navigator's name
// Hello followed by hte driver's name



////////////////////////////
//     Challenge 9
////////////////////////////

// Write a function isCodesmithOpen that accepts a time parameter (a number).
// If the time is greater than 9, log 'Codesmith is open.'
// Otherwise, log 'Sorry, Codesmith is closed.'

const isCodesmithOpen = (time) => {
  if (typeof time === 'number') {
    if (time > 9) {
      console.log('Codesmith is open.');
    }
    else {
      console.log('Sorry, Codesmith is closed.');
    }
  }
  else {
    return 'Expected a number';
  }
};

// Uncomment the lines below to test your code
isCodesmithOpen(10);
isCodesmithOpen(9);
// should print 'Codesmith is open.'
// followed by 'Challenge 8B: Sorry, Codesmith is closed.'



////////////////////////////
//     Challenge 10
////////////////////////////

// Write a function smallMediumOrLarge that will accept a number howHungry, which will represent how hungry you are on a scale of 1 to 5.
// If howHungry is 5, log 'Large please!'
// If howHungry is 3 or 4, log 'Medium please!'
// Otherwise log 'Small please!'

const smallMediumOrLarge = (howHungry) => {
  if (howHungry === 5) {
    console.log('Large please!');
  }
  else if (howHungry === 3 || howHungry === 4) {
    console.log('Medium please!');
  }
  else {
    console.log('Small please!');
  }
};

// Uncomment the lines below to test your code
smallMediumOrLarge(5);
smallMediumOrLarge(4);
smallMediumOrLarge(3);
smallMediumOrLarge(2);
smallMediumOrLarge(1);
// should print 'Large please!'
// followed by 'Medium please!' twice
// followed by 'Small please!' twice



////////////////////////////
//     Challenge 11
////////////////////////////

// Write a function called isAGoodBoy that takes in two boolean parameters: wellBehaved and isCute.
// If the dog is wellBehaved and isCute, log 'pet'.
// Otherwise log 'train'.

const isAGoodBoy = (wellBehaved, isCute) => {
  if (wellBehaved && isCute) {
    console.log('pet');
  }
  else {
    console.log('train');
  }
};

// Uncomment the lines below to test your code
isAGoodBoy(true, true);
isAGoodBoy(true, false);
isAGoodBoy(false, true);
isAGoodBoy(false, false);
// Should print pet, train, train, train



////////////////////////////
//     Challenge 12
////////////////////////////

// Write a function shouldEatBanana that accepts color and smellsGood parameters.
// Log 'eat' if the banana's color is 'yellow' and if smellsGood is true
// Otherwise, if the banana's color is 'green', log 'wait'.
// Otherwise log 'don't eat'.

const shouldEatBanana = (color, smellsGood) => {
  if (color === 'yellow' && smellsGood) {
    console.log('eat');
  }
  else if (color === 'green') {
    console.log('wait');
  }
  else {
    console.log('don\'t eat');
  }
};

// Uncomment the lines below to test your code
shouldEatBanana('yellow', true);
shouldEatBanana('yellow', false);
shouldEatBanana('green', true);
shouldEatBanana('green', false);
shouldEatBanana('red', true);
// Should print 'eat', "don't eat", 'wait', 'wait', "don't eat"



////////////////////////////
//     Challenge 13
////////////////////////////

// Write a function countTo5 that uses a for loop to log the numbers 1 through 5.

const countTo5 = () => {
  for (let i = 1; i < 6; i += 1) {
    console.log(i);
  }
};

// Uncomment the line below to test your code
countTo5();
// should print '1, 2, 3, 4, 5'



////////////////////////////
//     Challenge 14
////////////////////////////

// Write a function countMost that uses a for loop to loop over the numbers 1 to 5.
// Log all the numbers except 3.

const countMost = () => {
  for (let i = 1; i < 5; i += 1) {
    if (i === 3) {
      continue;
    }
    else {
      console.log(i);
    }
  }
};

// Uncomment the line below to test your code
countMost();
// should print '1, 2, 4, 5'