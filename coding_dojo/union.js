function union(arr1, arr2) {
  const inUnion = [];
  let in1 = 0;
  let in2 = 0;
  while (in1 < arr1.length || in2 < arr2.length) {
    if (arr1[in1] === arr2[in2]) {
      inUnion.push(arr1[in2]);
      in1 += 1;
      in2 += 1;
    }
    if (arr1[in1] < arr2[in2] || in2 === arr2.length) {
      union.push(arr1[in1]);
      in1 += 1;
    }
    if (arr2[in2] < arr1[in1] || in1 === arr1.length) {
      union.push(arr2[in2]);
      in2 += 1;
    }
  }
  return inUnion;
}