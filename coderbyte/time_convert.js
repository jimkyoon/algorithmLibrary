// create a function that takes a number and returns the hours and minutes

function timeConvert(num){
  let hour = Math.floor(num/60);
  let minute = num%60;
  return hour + ":" + minute;
}

console.log(timeConvert(123));
