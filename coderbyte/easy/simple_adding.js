// create a function that takes a number and adds all the numbers from 1 to that numbers

function simpleAdding(num) {
  let sum = 0;
  for (let i = num; i > 0; i -= 1) {
    sum += i;
  }
  return sum;
}

console.log(simpleAdding(5));
