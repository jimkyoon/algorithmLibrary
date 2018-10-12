// 7 kyu
// Given a number, if the number is a square, then return the next square number
// ex. Given 121, should return 144

// final solution
function findNextSquare (sq) {
  if (Math.sqrt(sq) % 1 === 0) {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq);
  }
  else {
    return -1;
  }
}