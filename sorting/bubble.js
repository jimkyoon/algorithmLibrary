// Bubble Sort Algorithm
function bubbleSort(array){
  // going to return a new array that is sorted
  let arr = array;
  let len = array.length;
  let change;
  // outer loop for the amount of times needed to go through the array
  for(let i = 0; i < len-1; i++){
    change = false;
    // inside loop will go through to the second to last index and do comparative operators for the elements next to each other in the array
    for(let j = 0; j < len-1; j++){
      if(arr[j] > arr[j+1]){
        // once change is found, swapping begins
        change = true;
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    // if no change has happened through one iteration of an array, just return the array since it was checked that it is sorted
    if(!change){
      return arr;
    }
  }
  return arr;
}

console.log(bubbleSort([10,5,6,8,1,2]));
