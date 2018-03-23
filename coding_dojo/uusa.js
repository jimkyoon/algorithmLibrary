function uusa(arr1, arr2) {
  const obj = {};
  const union = [];
  let in1 = 0;
  let in2 = 0;
  while (in1 < arr1.length) {
    if (obj.hasOwnProperty(arr1[in1])) {
      union.push(arr1[in1]);
      obj[arr1[in1]] += 1;
      in1 += 1;
    }
    else {
      union.push(arr1[in1]);
      obj[arr1[in1]] = 1;
      in1 += 1;
    }
  }
  while (in2 < arr2.length) {
    if (obj.hasOwnProperty(arr2[in2])) {
      if (obj[arr2[in2]] === 0) {
        union.push(arr2[in2]);
      }
      else {
        obj[arr2[in2]] -= 1;
      }
      in2 += 1;
    }
    else {
      union.push(arr2[in2]);
      in2 += 1;
    }
  }
  return union;
}