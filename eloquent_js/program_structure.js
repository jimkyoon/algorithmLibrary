// Chapter 2
// Program Structure

// Looping a triangle
function makeTriangle(){
  let star = "";
  for(let i = 1; i < 8; i++){
    star += "#";
    console.log(star);
  }
}

makeTriangle();

// FizzBuzz
// Print 1-100, but if divisble by 3 say Fizz; if divisble by 5, say Buzz, if divisble by both, then say FizzBuzz
function fizzBuzz(){
  for(let i = 1; i < 101; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    }
    else if(i%3 === 0){
      console.log("Fizz");
    }
    else if(i%5 === 0){
      console.log("Buzz");
    }
    else{
      console.log(i);
    }
  }
}

fizzBuzz();

// Make a chessboard with grid of 8x8
function chessBoard(){
  const grid = 8;
  let line = "";
  for(let i = 1; i < grid+1; i++){
    line = "";
    for(let j = 1; j < grid+1; j++){
      if((i+j)%2 === 0){
        line += "#";
      }
      else{
        line += " ";
      }
    }
    console.log(line);
  }
}

chessBoard();
