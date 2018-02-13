let Stack = (function(){
  function Stack(){
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(item){
    this.dataStore.push(item);
  }
  Stack.prototype.pop = function(){
    this.dataStore.pop();
  }
  Stack.prototype.display = function(){
    console.log(this.dataStore);
  }
  return Stack;
})();
module.exports = Stack;
