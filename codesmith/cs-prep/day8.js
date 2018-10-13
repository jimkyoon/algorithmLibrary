// CS Prep Day 8

// Closure

function once (inputFunction) {
  let counter = 0;
  let storedResult;
  function wrapperFunction (arg1) {
    if (counter === 0) {
      storedResult = inputFunction(arg1);
      counter += 1;
      return storedResult;
    }
    else {
      return storedResult;
    }
  }
  return wrapperFunction;
}

function multiplyBy2 (num) {
  return num * 2;
}

const onceMultiplyBy2 = once(multiplyBy2);

onceMultiplyBy2(2); // 4
onceMultiplyBy2(10); // 4