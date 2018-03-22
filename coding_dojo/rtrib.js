// still working on this

function tribStarter(n) {
  const arr = [0, 0, 1];
  function rTrib(n) {
    if (n >= arr.length) {
      arr.push(rTrib(n - 1));
    }
    return arr[n];
  }
  return trib(n);
}