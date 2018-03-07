// Insertion Sort Algorithm
// One side will be a sorted portion while the other side will be unsorted. We will take one element from the unsorted into the sorted and insert them in the correct index
function insertionSort(array) {
  // create new array to return at the end
  const arr = array;
  let val;
  let i;
  let j;
  for (i = 1; i < arr.length; i += 1) {
    // store the current value in case of shift
    val = arr[i];
    j = i;
    // create a while loop to go through the unsorted portion
    // if value in sorted portion is greater than the value in unsorted, we will shift all items in sorted section over by one then insert
    for (j = i - 1; j > -1 && arr[j] > val; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
}

console.log(insertionSort([88, 55, 32, 1, 40, 5]));
