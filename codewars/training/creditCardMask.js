// 7 kyu
// Create a function that would hide the credit card number except the last 4 digits

function maskify (cc) {
  let newCC = "";
  for (let i = 0; i < cc.length; i += 1) {
    if (i < cc.length - 4) {
      newCC += "#";
    }
    else {
      newCC += cc[i];
    }
  }
  return newCC;
}