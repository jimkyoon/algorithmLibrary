// Given an unsorted array and a number, make a function that takes in both as argument and returns the index of the array that contains the number Given
function linearSearch(array, num) {
  const checker = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === num) {
      return i;
    }
  }
  return checker;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
// 2

console.log(linearSearch([1, 2, 3, 4, 5], 6));
// false
