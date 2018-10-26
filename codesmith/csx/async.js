// ASYNCHRONOUS JAVASCRIPT



// setTimeout
// write code to log 'I am at the beginning of the code'; then undernearth, set a timer to log out 'I am in the setTimeout callback function' after 600ms; then at the end log 'I am at the end of the code'; change ms from 600 to 0;
console.log('I am at the beginning of the code');
const sayMid = function() {
  console.log('I am in the setTimeout callback function');
};
setTimeout(sayMid, 0);
console.log('I am at the end of the code');



// forEach
// 