// Binary Search Tree
// Tree with Left (Less than) and Right (Greater than) Nodes
// Time Complexity - O(n) or O(log n); best/worst; n based on how high the tree

// Nodes
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert data
  insert(data) {
    // create a node with data
    const newNode = new Node(data);
    // do a check to see where the node should go
    if (this.root === null) {
      this.root = newNode;
    } else {
      // call the insertNode function that will find the correct plac and insert
      this.insertNode(this.root, newNode);
    }
  }

  // method to insert a node into the tree by going through the tree
  insertNode(node, newNode) {
    // check first if the newNode's data is less than or greater
    // if less than, go left
    if (newNode.data < node.data) {
      // check if the node on left is empty or not
      if (node.left === null) {
        // if it is, assign here
        node.left = newNode;
      } else {
        // otherwise, keep going down
        this.insertNode(node.left, newNode);
      }
    } else {
      // otherwise, go right
      // check if the node on right is empty or not
      if (node.right === null) {
        // if it is, assign here
        node.right = newNode;
      } else {
        // otherwise, keep going down
        this.insertNode(node.right, newNode);
      }
    }
  }

  // removing a node
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    // check if the tree is empty or not
    if (node === null) {
      return null;
    } else if (key < node.data) {
      // if the key is less than data, go left to find the correct node
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      // if the key is greater, then go right to find correct node
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // if similar, then delete
      // if node has no left or right
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // check for node left or right
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
    }
  }
}
