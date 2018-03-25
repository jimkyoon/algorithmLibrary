function usAdd(arr1, arr2) {
  const obj = {};
  const union = [];
  let in1 = 0;
  let in2 = 0;
  while (in1 < arr1.length || in2 < arr2.length) {
    if (obj.hasOwnProperty(arr1[in1])) {
      in1 += 1;
      continue;
    }
    if (obj.hasOwnProperty(arr2[in2])) {
      in2 += 1;
      continue;
    }
    if (arr1[in1] === arr2[in2]) {
      union.push(arr1[in1]);
      obj[arr1[in1]] = true;
      in1 += 1;
      in2 += 1;
    }
    else if (arr1[in1] < arr2[in2] || in2 === arr2.length) {
      union.push(arr1[in1]);
      obj[arr1[in1]] = true;
      in1 += 1;
    }
    else if (arr2[in2] < arr1[in1] || in1 === arr1.length) {
      union.push(arr2[in2]);
      obj[arr2[in2]] = true;
      in2 += 1;
    }
  }
  return union;
}