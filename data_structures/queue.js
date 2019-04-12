// Queue
// FIFO - First In, First Out
// Time Complexity - O(1)

class Queue {
  constructor() {
    this.storage = {};
    this.startIndex = 0;
    this.count = 0;
  }

  // enqueue - add to queue
  enqueue(input) {
    this.storage[this.startIndex + this.count] = input;
    // after adding, increase the count
    this.count += 1;
  }

  // dequeue - remove the first item
  dequeue() {
    // check if the queue is empty
    if (this.count === 0) return undefined;
    // save the first item under temp
    const firstItem = this.storage[this.startIndex];
    // delete the first item
    delete this.storage[this.startIndex];
    // move start index to next
    this.startIndex += 1;
    // finally, return the saved item
    return firstItem;
  }

  // size - how many items in the queue
  size() {
    return this.count - this.startIndex;
  }

  // show the next in line
  peek() {
    return this.storage[this.startIndex];
  }

  // check if queue is empty
  isEmpty() {
    // if startIndex and count are the same, then there's nothing left in queue
    return this.startIndex === this.count;
  }
}
