function subsets (str) {
  const arr = [];
  (function helper (str.parts) {
    if (parts.length === 0) {
      return
    }
    let temp = parts.splice(0, 1)[0];
    arr.push(str + temp);
    helper(str + temp, parts.slice());
    helper(str, parts.slice());
  }('', str.split('')));
  return arr;
}