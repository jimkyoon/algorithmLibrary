// create a function that determines if the numbers in an array can add up to a certain number in the array

function arrayAdditionI (array) {

  // finding max value in array
  const max = Math.max(...array);
  
  // moving max value to end of the array
  if (array.indexOf(max) !== array.length - 1) {
    let temp = max;
    array[array.indexOf(max)] = array[array.length - 1];
    array[array.length - 1] = max;
  }

  // check for sums to equal max
  for (let i = 0; i < array.length; i += 1) {
    let sum = array[i];
    for (let j = 0; j < array.length; j += 1) {
      sum += array[j];
      if (sum === max) {
        return true;
      }
    }
  }
  return false;
}