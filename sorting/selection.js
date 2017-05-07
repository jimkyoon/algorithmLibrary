// Selection Sorting Algorithm
function selectionSort(array){
  // make a new array to return a brand new sorted array at the end
  let arr = array;
  let min;
  for(let i = 0; i < arr.length; i++){
    // set a minimum
    min = i;
    // create a second loop to check the rest of the array
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    // now swap min if not in the right place yet
    if(i != min){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([99,77,33,55,22,88,1]));
