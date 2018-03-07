// create a function that takes a string and returns true if there are equal number of x's and o's

function exOh(string) {
  const newStr = string.split('');
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < newStr.length; i += 1) {
    if (newStr[i] === 'x') {
      xCounter += 1;
    }
    else if (newStr[i] === 'o') {
      oCounter += 1;
    }
  }
  if (xCounter === oCounter) {
    return true;
  }
  return false;
}