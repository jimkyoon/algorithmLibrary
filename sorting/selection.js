// Selection Sorting Algorithm
function selectionSort(array) {
  // make a new array to return a brand new sorted array at the end
  const arr = array;
  let min;
  for (let i = 0; i < arr.length; i += 1) {
    // set a minimum
    min = i;
    // create a second loop to check the rest of the array
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // now swap min if not in the right place yet
    if (i !== min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([99, 77, 33, 55, 22, 88, 1]));
