// create function that checks to see if the letters 'a' and 'b' are separated by 3

function abCheck(string) {
  const newStr = string.split('');
  for (let i = 0; i < newStr.length; i += 1) {
    if (newStr[i] === 'a') {
      if (newStr[i - 4] === 'b' || newStr[i + 4] === 'b') {
        return true;
      }
    }
  }
  return false;
}

console.log(abCheck('another one bites the dust'));
// result: false