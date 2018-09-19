// PRECOURSE CHALLENGES



// VARIABLE
// declare a constant lastName and assign it your last name, modify firstName to your own, then console.log
const firstName = "Jim";

// Try un-commenting the line below
console.log("Hi, " + firstName)

// ADD CODE HERE
const lastName = "Yoon";

// Uncomment the line below to check your work!
console.log("Hi, " + firstName + " " + lastName);



// VARIABLE REASSIGNMENT
// reassign firstName
let firstName = "Jenny";

// ADD CODE BELOW
firstName = "Jim";

// Uncomment the line below to check your work!
console.log("Hi, " + firstName);



// STRINGS
// declare a variable, myString, whose value is a string
// Uncomment the lines below to see examples of strings
console.log('A string can be written inside of single quotes.');
console.log("It can also be written inside of double quotes.");
console.log(`Backticks work, too.`);

// ADD CODE BELOW
let myString = "";

// Uncomment the line below to check your work!
console.log(myString);



// STRING CONCATENATION
// using string concatenation, join first, second, and third and assign it to a variable called welcomeStatement
const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW
let welcomeStatement = first + " " + second + " " + third;

// Uncomment the line below to check your work!
console.log(welcomeStatement);



// NUMBERS - ADDITION/SUBTRACTION
// create variable birthYear and set it equal to your birth, then create a variable age and set it to your current age, then create a variable in10Yrs and set it to your age plus 10
// ADD CODE BELOW
let birthYear = 1990;
let age = 27;
let in10Yrs = age + 10;

// Uncomment these to check your work!
console.log(birthYear);
console.log(age);
console.log(in10Yrs);


// NUMBERS - MULTIPLICATION/DIVISION
// multiply 20 by 4 and set it to twentyTimesFour, divide 9 by 3 and set it to nineOverThree, multiply 200.3 by 3 and save it to twoHundredTimesThree
// ADD CODE BELOW
let twentyTimesFour = 20 * 4;
let nineOverThree = 9 / 3;
let twoHundredTimesThree = 200.3 * 3

// Uncomment these to check your work!
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);



// BOOLEANS
// 1. compare small and large using >< and assign result to isSmaller; 2. compare num and string using == and assign it to isLooselyEqual, then compare using === and assign it to isStrictlyEqual; 3. compare isTrue and isFalse using !==, then assign it to isTrueNotFalse
// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string;
let isStrictlyEqual = num === string;

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);



// TYPE COERCION
// Uncomment the code below to test
console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");



// ARRAY - EXAMINING ELEMENTS
// create variable fourthItem and assign it a value of the fourth item in the horror array
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
let fourthItem = horror[3];

// Write a console.log statement below to check your work!
console.log(fourthItem);



// ARRAYS - ADDING ELEMENTS
// use a builtin JS method to add another show to netflixShows array
const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("Daredevil");

// Write a console.log statement below to check your work!
console.log(netflixShows)



// FOR LOOPS - FUNDAMENTALS
// using a for loop, decrement countDown by one teach time loop runs until 0
let countDown = 10;
// ADD CODE HERE
for (let i = countDown; i > 0; i--) {
  countDown = i;
}

// Uncomment the below line to check your work
console.log(countDown); // -> should print 0;



// FOR LOOPS AND ARRAYS
// iterate through synonyms array using a for loop and push a greeting string with format "Have a [synonyms] day!" in a greetings array; use a second for loop to iterate through greetings and console.log them
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i += 1) {
  greetings.push("Have a " + synonyms[i] + " day!");
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i < greetings.length; i += 1) {
  console.log(greetings[i]);
}



// FOR LOOPS AND ARRAY INDICES
// loop through the arrays and push a string with formate "My name is firstName lastName and I am from place" into bios array
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < 3; i += 1) {
  bios.push('My name is ' + firstNames[i] + ' ' + lastNames[i] + ' and I am from ' + places[i]);
}

console.log(bios);



// FOR LOOPS - CALCULATING ARRAY ELEMENTS
// use a for loop to iterate through the array and increase each number by 2
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i += 1) {
  increaseByTwo[i] = increaseByTwo[i] + 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];



// WHILE LOOPS - FUNDAMENTALS
// use a while loop to increment count by 2 on each repition of the block of code, run until 8
let count = 2;
// ADD CODE HERE
while (count < 8) {
  count += 2;
}

// Uncomment these to check your work!
console.log(count); 



// WHILE LOOPS - CONDITIONAL EXPRESSION
// initialize variable addThis to 0 and sum to 0; use a while loop to repeat code block as long as addThis is less than 10; code block should be adding value of addThis to sum and then increment addThis by 1; sum should be the sum of 0 to 9.
// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum += addThis;
  addThis += 1;
}

// Uncomment the line below to check your work!
console.log(sum);



// CONTROL FLOW - IF STATEMENTS
// use if statement to check if num is greater than 100; if num is greater than 100, reassign the value of final to null, else, set final to 2 times num
const num = 40;
let final;
// ADD CODE HERE
if (num > 100) {
  final = null;
}
else {
  final = num * 2;
}

// Log final to the console below to check your work
console.log(final);



// FIZZBUZZ
// use a loop to iterate 1 through 16; push each number into fb array; if divisible by 3, push fizz; if divisible by 5, push buzz; if divisible by both 3 and 5, push fizzbuzz
const fb = [];
// ADD CODE HERE
for (let i = 1; i < 17; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  }
  else if (i % 3 === 0) {
    fb.push("fizz");
  }
  else if (i % 5 === 0) {
    fb.push("buzz");
  }
  else {
    fb.push(i);
  }
}


// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
console.log(fb);



// CONTROL FLOW AND INTERATION
// iterate through array and multiply a number by 10 if it is greater than or equal to 5
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (let i = 0; i < timesTenIfOverFive.length; i += 1) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]



// OBJECTS - EXAMINING PROPERTIES
// use for...in loop to determine if object contains property foundNum; if it exists, reassign the value of found to 1
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let i in checkObj) {
  if (i === "foundNum") {
    found = 1;
  }
}



// ITERATING WITH FOR...IN
// use for...in loop to fill array with all numbers from checkObj if they are greater than or equal to 2
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let i in checkObj) {
  if (checkObj[i] >= 2) {
    objToArray.push(checkObj[i])
  }
}



// OBJECTS - ITERATING WITH A FOR LOOP
// use Object.values() method to return array of checkObj's values, and assign it to objToArray; use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6; if so, reassign the value of divBy6 to true
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj);
for (let i = 0; i < objToArray.length; i += 1) {
  if (objToArray[i] % 6 === 0) {
    divBy6 = true;
  }
}



// OBJECTS - NESTED ARRAYS
// use a for loop starting at 0, add 5 subarrays to nestedArr; each nested array contains the string 'loop' concatentated with the corresponding index in nestedArr, and the index as the second element
const nestedArr = [];
// ADD CODE HERE
for (let i = 0; i < 5; i += 1) {
  nestedArr.push(['loop' + i, i]);
}



// OBJECTS - ADDING PROPERTIES
// using a for loop, build the object divByThree so that each key is an element of possibleIterable that is divisible by 3, while the value of each key should be the array index in possibleIterable
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i < possibleIterable.length; i += 1) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}



// OBJECTS - EVALUATING KEYS
// use a for...in loop to iterate through keys of sumMe, if value corresponding to key is a number, add it to total
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for (let i in sumMe) {
  if (typeof sumMe[i] === 'number') {
    total += sumMe[i];
  }
}