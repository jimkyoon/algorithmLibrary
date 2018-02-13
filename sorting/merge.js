// Merge Sort Alogrithm
// This sort will take an array, break it down to several smaller arrays, sort those, then merge them back
// We will need to make two functions, one is the actual merge sort and the other is the merge function
function mergeSort(array){
  // new array
  let arr = array;
  // base case
  if(arr.length < 2){
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];
  let indexL = 0;
  let indexR = 0;
  // create a while loop that will check the numbers in the arrays and push them accordingly
  while(indexL < left.length && indexR < right.length){
    if(left[indexL] < right[indexR]){
      result.push(left[indexL++]);
    }
    else{
      result.push(right[indexR++]);
    }
  }
  return result.concat(left.slice(indexL)).concat(right.slice(indexR));
}

console.log(mergeSort([9,99,7,88,65,45,2,22,34,1,100]));
