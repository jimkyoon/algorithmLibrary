// Quick Sort Alogrithm
// sorting based on using a pivot point to move smaller elements to the left and same with the greater elements to the right
function quickSort(array){
  // set new array to be returned
  let arr = array;
  // find the base case
  if(arr.length <= 1){
    return arr;
  }
  // find the swap position and value
  let pivot = Math.floor((arr.length-1)/2);
  let pivotVal = arr[pivot], less = [], more = [];
  arr = arr.slice(0, pivot).concat(arr.slice(pivot + 1));
  // for loop through the array, pushing values less than pivot to the less array, and the same for greater in the more array
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < pivotVal){
      less.push(arr[i]);
    }
    else{
      more.push(arr[i]);
    }
  }
  // return the concat full array sorted
  return (quickSort(less)).concat([pivotVal], quickSort(more));
}

console.log(quickSort([100,99,57,33,75,60,12,1]));
