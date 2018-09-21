function intersection (array) {
  const result = [];
  const tracker = {};
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (!tracker.array[i][j]) {
        tracker.array[i][j] = 1;
      }
      else {
        tracker.array[i][j] += 1;
      }
    }
  }
  console.log(tracker);
}

var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3]));