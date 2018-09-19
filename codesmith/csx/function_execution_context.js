// FUNCTIONS AND EXECUTION CONTEXT CHALLENGES



// addTwo
// create a function addTwo that accepts a number and returns the number plus 2
// ADD CODE HERE
function addTwo (num) {
  return num + 2;
}
// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12



// addS
// create a function addS that accepts a string and returns the string with "s" added to the end
// ADD CODE HERE
function addS (string) {
  return string + "s";
}
// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'



// PASSING ARGUMENTS
// determine what arguments must be passed into isX1 and isX2 so they can both be true
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true



// INVOKING FUNCTIONS
// try to make calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to function jerry
let calls = "";

function jerry(str) {
	str = "Jerry";
  return kramer(str);
}

function george(str) {
  str = str + "George";
	return elaine(str);
}

function elaine(str) {
  str = str + "Elaine";
	return str;
}

function kramer(str) {
	str = str + "Kramer";
  return george(str); 
}



// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);



// getRemainder
// create a function getRemainder that takes two numbers and returns the remainder value of deviding the larger number by the smaller
function getRemainder(num1, num2) {
  //your code goes here...
	let large;
  let small;
  if (num1 > num2) {
    large = num1;
    small = num2;
  }
  else {
    large = num2;
    small = num1;
  }
  return large % small;
}

//Uncomment the lines below to test your code

// console.log(getRemainder(17, 5)); //=> 2
// console.log(getRemainder(20, 5)); //=> 0
// console.log(getRemainder(8, 22)); //=> 6
// console.log(getRemainder(7, 42)); //=> 0



// lastLetter
// create function lastLetter that takes a word and returns the last character of the word
function lastLetter(word) {
  //your code goes here...
	for (let i = 0; i < word.length; i += 1) {
    if (i === word.length - 1) {
      return word[i];
    }
  }
}

//Uncomment the lines below to test your code

// console.log(lastLetter("hello")); //=> "o"
// console.log(lastLetter("goodbye!")); //=> "!"
// console.log(lastLetter("ZeltoiD")); //=> "D"
// console.log(lastLetter("I love Javascript")); //=> "t"



// gradeCalculator
// create a function gradeCalculator that takes a grade and console.logs the letter grade
function gradeCalculator(grade) {
  //your code goes here...
	if (grade >= 90) {
    return "A";
  }
  else if (grade >= 80) {
    return "B";
  }
  else if (grade >= 70) {
    return "C";
  }
  else if (grade >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}

//Uncomment the lines below to test your code

//console.log(gradeCalculator(92)); //=> "A"
//console.log(gradeCalculator(84)); //=> "B"
//console.log(gradeCalculator(70)); //=> "C"
//console.log(gradeCalculator(61)); //=> "D"
//console.log(gradeCalculator(43)); //=> "F"



// wereAwesome
// create a function wereAwesome that takes you and your pair programming partner's name and returns the string of "your buddy and you are awesome!"
function wereAwesome(you, yourBuddy) {
  // your code here...
	return yourBuddy + " and " + you + " are awesome!"; 
}


//Comment in the code below to test your function:

// console.log(wereAwesome("Dave", "Will")); //=> "Will and Dave are awesome!"
// console.log(wereAwesome("Victoria", "Jenny")); //=> "Jenny and Victoria are awesome!"
// console.log(wereAwesome("Chris", "Jac")); //=> "Jac and Chris are awesome!"
// console.log(wereAwesome("Phillip", "Skyler")); //=> "Phillip and Skyler are awesome!"



// disemvowel
// create function that takes in a string and returns a new string with all vowels removed
function disemvowel(string) {
  // your code here...
	let newString = "";
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < string.length; i += 1) {
    if (vowels.indexOf(string[i]) !== -1) {
      continue;
    }
    else {
      newString += string[i];
    }
  }
  return newString;
}

//Comment in the code below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'



// arrayBuilder
// create a function arrayBuilder that takes in a count object and returns an array filled with appropriate numbers of elements, if elements repeat, group them
function arrayBuilder(obj) {
  // your code here...
	const result = [];
  for (let i in obj) {
    let counter = obj[i];
    while (counter > 0) {
      result.push(i);
      counter--;
    }
  }
  return result;
}

//Comment in the code below to test your function:

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []