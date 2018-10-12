// 6 kyu
// Given an array, find the 1 num that isn't like the others
// ex. [1, 1, 1, 1, 2, 1] // result: 2

function findUniq (arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return "They are all same";
}

// final solution
function findUniq (arr) {
  const refObj = arr.reduce((refObj, ele) => {
    if (refObj[ele] === undefined) {
      refObj[ele] = 1;
    }
    else if (refObj[ele] !== undefined) {
      refObj[ele] += 1;
    }
    return refObj;
  }, {});
  const refObjEntries = Object.entries(refObj);
  for (let i = 0; i < refObjEntries.length; i += 1) {
    if (refObjEntries[i][1] === 1) {
      return Number(refObjEntries[i][0]);
    }
  }
  return "They are all the same";
}