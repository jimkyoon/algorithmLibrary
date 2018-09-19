function buildSentence (word1, word2, word3) {
  // take first word, grab the first character, uppercase it, then add it back to the rest
  let firstWord = word1.charAt(0).toUpperCase() + word1.slice(1);
  // return the sentence concatenated with the new firstWord and a period after word 3
  return firstWord + " " + word2 + " " + word3 + ".";
}

function characterExists (word, character) {
  // change word into an array of the characters
  const wordTester = word.split('');
  // create a checker with default false
  let result = false;
  // go through the for loop to test each element in the array to check if it matches the character, if it does, set the checker "result" to true
  for (let i = 0; i < wordTester.length; i += 1) {
    if (wordTester[i] === character) {
      result = true;
    }
  }
  return result;
}

function premiumCustomers (array) {
  // create a result array to return at the end
  const result = [];
  // use a for loop to go through each element in the array
  for (let i = 0; i < array.length; i += 1) {
    // store customer name to push into result if they bought over 100 dollars
    let customer = array[i].name;
    // cost variable to store purchase amounts
    let cost = 0;
    // grab all purchase price into an array
    const purchase = Object.values(array[i].purchases);
    // for loop to add up all the prices
    for (let j = 0; j < purchase.length; j += 1) {
      cost += purchase[j].price;
    }
    // test to see if customer bought over 100, if so, push customer name into result array
    if (cost > 100) {
      result.push(customer);
    }
  }
  return result;
}
var customers = [ { "name": "Sandra", "id": 57453, "purchases": [{"id": 0, "price": 65}, {"id": 1, "price": 8}, {"id": 2, "price": 10}] }, { "name": "Rodrigo", "id": 09767, "purchases": [{"id": 0, "price": 27}, {"id": 1, "price": 72}, {"id": 2, "price": 13}] }, { "name": "Smithers", "id": 25667, "purchases": [{"id": 0, "price": 7}, {"id": 1, "price": 82}, {"id": 2, "price": 18}] } ];