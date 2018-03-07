// create a function that takes in a string as a parameter and modify it to replace every letter with the following letter in the alphabet. also capitalize all vowels
// example: input is "Hello World" should be "Ifmmp XpsmE"

// still needs work
function letterChange(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    let current = str[i];
    if (current === 'z') {
      current = 'a';
    }
    else if (str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
      current = String.fromCharCode(str.charCodeAt(i) + 1);
    }
    if (current === 'a' || current === 'e' || current === 'i' || current === 'o' || current === 'u') {
      current = current.toUpperCase();
    }
    result += current;
  }
  return result;
}

console.log(letterChange("Hello World"));
