// create a function that determines if a number follows an arithmetic or geometric sequence

function arithGeo(array) {
  const arithCheck = array[1] - array[0];
  let arithChecker = false;
  const geoCheck = array[1] / array[0];
  let geoChecker = false;
  for (let i = 2; i < array.length; i += 1) {
    if (array[i] - array[i - 1] === arithCheck) {
      arithChecker = true;
    }
    else if (array[i] / array[i - 1] === geoCheck) {
      geoChecker = true;
    }
    else {
      return -1;
    }
  }
  if (arithChecker === true) {
    return 'Arithmetic';
  }
  if (geoChecker === true) {
    return 'Geometric';
  }
}

console.log(arithGeo([1, 2, 3, 4, 5, 6]));