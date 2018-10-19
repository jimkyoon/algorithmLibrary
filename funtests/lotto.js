// Lotto Algorithms for SuperLotto Plus, MEGA Millions, POWERBALL and bonus function that takes in parameters for max numbers

// superlotto plus
// 6 numbers: 5 numbers (1-70) and 1 number (1-25)

const superLotto = () => {
  // the array to return
  const result = [];
  // first adding in the 5 numbers between 1 and 70
  while (result.length < 5) {
    // generate the random number
    const randNum = Math.floor(Math.random() * (47 - 1 + 1) + 1);
    // if the result array already has the number included, "restart" the process
    if (result.includes(randNum)) {
      continue;
    }
    // if it isnt, add it to the result array
    else {
      result.push(randNum);
    }
  }
  // sort it from smallest to largest to make it easier to write down
  result.sort((a, b) => a - b);
  // finally, add in the mega number, as a string, to differeniate from the other numbers
  result.push(Math.floor(Math.random() * (27 - 1 + 1) + 1).toString());
  return result;
};

console.log('Your SuperLotto Plus numbers are: ', superLotto());



// mega million
// 6 numbers: 5 numbers (1-70) and 1 number (1-25)

const megaMillion = () => {
  // the array to return
  const result = [];
  // first adding in the 5 numbers between 1 and 70
  while (result.length < 5) {
    // generate the random number
    const randNum = Math.floor(Math.random() * (70 - 1 + 1) + 1);
    // if the result array already has the number included, "restart" the process
    if (result.includes(randNum)) {
      continue;
    }
    // if it isnt, add it to the result array
    else {
      result.push(randNum);
    }
  }
  // sort it from smallest to largest to make it easier to write down
  result.sort((a, b) => a - b);
  // finally, add in the mega number, as a string, to differeniate from the other numbers
  result.push(Math.floor(Math.random() * (25 - 1 + 1) + 1).toString());
  return result;
};

console.log('Your MEGA Millions numbers are: ', megaMillion());



// power ball
// 6 numbers: 5 numbers (1-69) and 1 number (1-26)
const powerBall = () => {
  // the array to return
  const result = [];
  // first adding in the 5 numbers between 1 and 70
  while (result.length < 5) {
    // generate the random number
    const randNum = Math.floor(Math.random() * (69 - 1 + 1) + 1);
    // if the result array already has the number included, "restart" the process
    if (result.includes(randNum)) {
      continue;
    }
    // if it isnt, add it to the result array
    else {
      result.push(randNum);
    }
  }
  // sort it from smallest to largest to make it easier to write down
  result.sort((a, b) => a - b);
  // finally, add in the powerball number, as a string, to differeniate from the other numbers
  result.push(Math.floor(Math.random() * (26 - 1 + 1) + 1).toString());
  return result;
};

console.log('Your POWERBALL numbers are: ', powerBall());



// universal lotto number picker
// this time with parameters for the max of the regular and mega numbers
const lottoNumbers = (regMax, megaMax) => {
  // the array to return
  const result = [];
  // first adding in the 5 numbers between 1 and the regMax
  while (result.length < 5) {
    // generate the random number
    const randNum = Math.floor(Math.random() * (regMax - 1 + 1) + 1);
    // if the result array already has the number included, "restart" the process
    if (result.includes(randNum)) {
      continue;
    }
    // if it isnt, add it to the result array
    else {
      result.push(randNum);
    }
  }
  // sort it from smallest to largest to make it easier to write down
  result.sort((a, b) => a - b);
  // finally, add in the mega number, as a string, to differeniate from the other numbers
  result.push(Math.floor(Math.random() * (megaMax - 1 + 1) + 1).toString());
  return result;
};

console.log('Your random numbers are: ', lottoNumbers(100, 50));
