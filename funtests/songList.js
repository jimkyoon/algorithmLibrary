// given a list of songs, determine the shortest way to reach a desired song from current song
// can only go forward or backwards by one
// going to beginning or end of the list will take you back to end or beginning depending on which direction

const songTrack = (songList, current, target) => {
  // only if current and target are same already
  if (current === target) return 'You are already on the song';
  // variables to keep track on left and right positions, their booleans, and count
  let leftCheck = false;
  let rightCheck = false;
  let leftPosition = current;
  let rightPosition = current;
  let leftMoves = 0;
  let rightMoves = 0;
  // while loop to keep going until left and right are both true
  while (leftCheck === false || rightCheck === false) {
    // check to see if current is at the target
    // if so, change check to true
    // if false, change position to next one
    // left side
    if (leftPosition === target) {
      leftCheck = true;
    } else {
      leftPosition -= 1;
      leftMoves += 1;
      // if the position is negative, then reset to end of the array
      if (leftPosition < 0) {
        leftPosition = songList.length - 1;
      }
    }
    if (rightPosition === target) {
      rightCheck = true;
    } else {
      rightPosition += 1;
      rightMoves += 1;
      // if the position is negative, then reset to end of the array
      if (rightPosition > songList.length - 1) {
        rightPosition = 0;
      }
    }
  }
  // after finding how many moves left or right needs, return which is lowest
  if (leftMoves < rightMoves) return `Go left, only ${leftMoves} skips!`;
  return `Go right, only ${rightMoves} skips!`;
};
