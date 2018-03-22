const MyMath.coins = function(int) {
  const coins = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
  }

  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  for(var prop in coins) {
    while(int >= coins['prop']) {
      int -= coins[prop];
      change['prop'] += 1;
    }
  }
  console.log(change);
  return change;
}