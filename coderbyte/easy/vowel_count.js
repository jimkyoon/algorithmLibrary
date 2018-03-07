// create a function that counts all the vowels in a string

function vowelCount(string) {
  const str = string.split('');
  const vowelList = 'aeiouAEIOU';
  let vowelCounter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vowelCounter += 1;
    }
  }
  return vowelCounter;
}

console.log(vowelCount('Hello World'));
// result: 3