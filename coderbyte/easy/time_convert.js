// create a function that takes a number and returns the hours and minutes

function timeConvert(num) {
  const hour = Math.floor(num / 60);
  const minute = num % 60;
  return hour + ':' + minute;
}

console.log(timeConvert(123));
