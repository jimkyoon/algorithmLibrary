// create a function that takes in a string and capitalize the first letter of every word
// example: input is "hello world" result should be "Hello World"

function letterCapitalize(str){
  var newStr = "";
  newStr += str[0].toUpperCase();
  for(var i = 1; i < str.length; i++){
    if(str[i-1] === " "){
      newStr += str[i].toUpperCase();
    }
    else{
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(letterCapitalize("hello world"));
// result should be "Hello World"
