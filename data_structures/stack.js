// Stack
// LIFO - last in, first out

// Class/constructor and methods ES6 - O(1)
// create the stack
class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // add to stack
  push(input) {
    this.storage[this.count] = input;
    this.count += 1;
  }

  // remove last item and return it
  pop() {
    // check if stack is empty first
    if (this.count === 0) return 'Stack is empty!';
    // else, reduce the count
    this.count -= 1;
    // store the last item then delete it
    const lastItem = this.storage[this.count];
    delete this.storage[this.count];
    // return stored item
    return lastItem;
  }

  // return size of stack
  size() {
    return this.count;
  }

  // return the last item
  peek() {
    return this.storage[this.count - 1];
  }

  // check if stack is empty or not
  isEmpty() {
    return this.count === 0;
  }
}



// // Class/constructor and prototype methods v1 - O(1)
// // create the stack
// const Stack = function () {
//   this.storage = {};
//   this.count = 0;
// };

// // add to the stack
// Stack.prototype.push = function (input) {
//   this.storage[this.count] = input;
//   this.count += 1;
// };

// // remove last item and return it
// Stack.prototype.pop = function () {
//   // first check to see if stack is empty
//   if (this.count === 0) return 'Stack is empty!';
//   // after checking, reduce the count
//   this.count -= 1;
//   // store the last item
//   const lastItem = this.storage[this.count];
//   // delete the last item
//   delete this.storage[this.count];
//   // return the stored item
//   return lastItem;
// };

// // return the size of the stack
// Stack.prototype.size = function () {
//   return this.count;
// };

// // return the last item
// Stack.prototype.peek = function () {
//   return this.storage[this.count - 1];
// };

// // check if stack is empty or not
// Stack.prototype.empty = function () {
//   return this.count === 0;
// };



// // Simpliest method with array
// // create the stack
// const stack = [];
// // push to add to stack
// stack.push('a');
// // pop to remove and method to save item popped
// const popData = stack.pop();
// console.log(popData);
// // peek to view top item
// const lastData = stack[stack.length - 1];
// console.log(lastData);
// // check to see if stack is empty (boolean)
// const empty = stack.length === 0;
// console.log(empty);
// // return the size of the stack
// const size = stack.length;
