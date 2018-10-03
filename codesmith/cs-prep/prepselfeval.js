/****** Challenge 1 - printGridByRow ******/

function printGridByRow(grid) {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      console.log(grid[i][j]);
    }
  }
}

// Uncomment to test code // Should print 1,8,2,6,4,0,-2,1,10
printGridByRow([
  [1,8,2],
  [6,4,0],
  [-2,1,10]
])


/****** Challenge 2 - printGridByCol ******/

function printGridByCol(grid) {
  let tracker = 0;
  const length = grid[0].length;
  while (length > tracker) {
    for (let i = 0; i < grid.length; i += 1) {
      console.log(grid[i][tracker]);
    }
    tracker += 1;
  }
}

// Uncomment to test code // Should print 1,6,-2,8,4,1,2,0,10
printGridByCol([
  [1,8,2],
  [6,4,0],
  [-2,1,10]
])


/****** Challenge 3 - goToZero ******/

function goToZero(num) {
  let tracker = num;
  console.log(tracker);
  while (tracker > 1) {
    if (tracker % 2 === 0) {
      tracker = tracker / 2;
      console.log(tracker);
    }
    else {
      tracker = tracker - 1;
      console.log(tracker);
    }
  }
}

// Uncomment to test code
goToZero(17) // should print 17, 16, 8, 4, 2, 1
goToZero(11) // should print 11, 10, 5, 4, 2, 1
goToZero(82) // should print 82, 41, 40, 20, 10, 5, 4, 2, 1


/****** Challenge 4 - objectToArray ******/

function objectToArray(obj) {
  const result = [];
  for (let prop in obj) {
    result.push([prop, obj[prop]]);
  }
  return result;
}

// Uncomment to test code // should print [['one', 'more'], ['challenge', 'to'], ['go', '!']]
console.log(objectToArray({
  one: 'more',
  challenge: 'to',
  go: '!'
}))


/****** Challenge 5 - incrementX and addToX ******/

let x = 0;

function incrementX(){
  x += 1;
}

function addToX(num){
  for (let i = num; i > 0; i -= 1) {
    incrementX();
  }
}

// Uncomment the following 4 lines to test your code
incrementX();
console.log('Test 1 passing: ', x === 1);
addToX(5);
console.log('Test 2 passing: ', x === 6);
