// create a function that counts how many words there are in a string

function wordCount(string) {
  return string.split(' ').length;
}

console.log(wordCount('Hello World'));
// result: 2