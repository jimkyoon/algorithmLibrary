// create a function that determines which word has the greatest number of repeated letters

function letterCountI (string) {

  // first split each word in the string
  const strArray = string.split(" ");

  // track the words
  const trackWords = {

  };

  // now a for loop to go through each word
  for (let i = 0; i < strArray.length; i += 1) {
    // create obj to keep track of letters
    let trackLetters = {

    };
    // go through the word and check the letters
    for (let j = 0; j < strArray[i]; j += 1;) {
      if (trackLetters.hasOwnProperty(strArray[i][j]) === false) {
        trackLetters[strArray[i][j]] = 1;
      }
      else {
        trackLetters[strArray[i][j]] += 1;
      }
    }
    trackWords[strArray[i]] = trackLetters;
  }

  // check to see if any words have multiples
  if () {

  }
  else {
    return -1;
  }
}

// another users answer
function LetterCountI(str) { 
  var arr = str.toLowerCase().split(" ");
  var n = arr.length;
  var counter = 1;
  var maxcount = 0;
  var newarr = [];
  
  for (var i = 0; i < n; i++) {
      wordarr = arr[i].split("");
      wordarr.sort();
    
      for (var j = 0; j < wordarr.length; j++) {
        if (wordarr[j] == wordarr[j+1]) {
          counter++;
        }
        else {
          if (counter > maxcount) {
            maxcount = counter;
            counter = 1;
          }
        }
      }
      newarr.push([arr[i], maxcount])
        maxcount = 0;
    }

  newarr.sort(function(a, b) {return b[1] - a[1]});
                              
  if (newarr[0][1] == 1) {
    return -1;
  }
  else {
    return newarr[0][0]; 
  }     
}

// another users answer
function LetterCountI(str) { 
  const arr = str.split(' ')
  const letterCount = arr.map(item => {
    const store = {};
    item.split('').forEach(letter => {
      store[letter] = store[letter] + 1 || 1;
    })
    return Object.keys(store).map(key => store[key]).sort((a, b) => a - b).pop();
  });
  
  if (Math.max(...letterCount) === 1) {
    return -1;
  }
  return arr[letterCount.indexOf(Math.max(...letterCount))];
}