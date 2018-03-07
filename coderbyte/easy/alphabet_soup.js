// create a function that takes in a string and returns a string with the letters in alphabetical order

function alphabetSoup(string) {
  const str = string.split('');
  const newStr = str.sort();
  return newStr.join('');
}

console.log(alphabetSoup('Hello World'));
// result: HWdellloor