// create a function that takes in a string and return it in a reverse order
// example: input is "hello world", output should be "dlrow olleh"

// function firstReverse(str){
//   var newStr = "";
//   for(var i = str.length-1; i >= 0; i--){
//     newStr += str[i];
//   }
//   return newStr;
// }

// version 2 (improved)
// using methods instead of for loops
function firstReverse(str) {
  const newStr = str.split('');
  newStr.reverse();
  return newStr.join('');
}

console.log(firstReverse('Hello World!'));
// result should be '!dlorW olleH'