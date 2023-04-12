const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null;
  constructor(tree=null){
    this.tree = tree;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let node = new Node(data);
    let treeNode = this.tree;
    if (!treeNode) {
      this.tree = node;
    }
    else{
      while(true){
        if (node.data == treeNode.data){
          break;
        }
        if (node.data < treeNode.data){
          if (treeNode.left === null){
            treeNode.left = node;
            break;
          }
          else{
            treeNode = treeNode.left;
          } 
          continue;
        }
        if (node.data > treeNode.data){
          if (treeNode.right === null){
            treeNode.right = node;
            break;
          }
          else{
            treeNode = treeNode.right;
          } 
          continue;
        }
      }
    }
  }

  has(data) {
    let treeNode = this.tree;
    if (!treeNode) {
      return false;
    }
    else{
      while(true){
        if (data == treeNode.data){
          return true;
        }
        if (data < treeNode.data){
          if (treeNode.left === null){
            return false;
          }
          else{
            treeNode = treeNode.left;
          } 
          continue;
        }
        if (data > treeNode.data){
          if (treeNode.right === null){
            return false;
          }
          else{
            treeNode = treeNode.right;
          } 
          continue;
        }
      }
    }
  }

  find(data) {
    let treeNode = this.tree;
    if (!treeNode) {
      return null;
    }
    else{
      while(true){
        if (data == treeNode.data){
          return treeNode;
        }
        else if (data < treeNode.data){
          if (treeNode.left === null){
            return null;
          }
          else{
            treeNode = treeNode.left;
          } 
        }
        else if (data > treeNode.data){
          if (treeNode.right === null){
            return null;
          }
          else{
            treeNode = treeNode.right;
          } 
        }
      }
    }
  }

  remove(data) {
    let node = this.tree
    let prevNode = this.tree
    if (!node) return
    while(true){
      if (data === node.data) break
      else if (data < node.data){
        if (!node.left) return
        prevNode = node
        node = node.left
      }
      else if (data > node.data){
        if (!node.right) return
        prevNode = node
        node = node.right
      }
    }

    // case 1
    if (!node.left && !node.right){
      if (prevNode.left === node)  prevNode.left = null
      if (prevNode.right === node) prevNode.right = null
    } // case2
    else if (!node.left || !node.right){
      if (!node.left) {
        if (prevNode.left === node) prevNode.left = node.right
        else prevNode.right = node.right
      }
      else {
        if (prevNode.left === node) prevNode.left = node.left
        else prevNode.right = node.left
      }
    } // case 3
    else {
      let nextNode = node.right
      let prevNode = node.right
      while(nextNode.left){
        prevNode = nextNode
        nextNode = nextNode.left
      }
      node.data = nextNode.data
      if (nextNode.right){
        prevNode.left = nextNode.right
      }
      else {
        prevNode.left = null
      }
    }
  }

  min() {
    let treeNode = this.tree;
    if (!treeNode){
      return null;
    }
    else{
      while(treeNode.left){
        treeNode = treeNode.left;
      }
    }
    return treeNode.data;
  }

  max() {
    let treeNode = this.tree;
    if (!treeNode){
      return null;
    }
    else{
      while(treeNode.right){
        treeNode = treeNode.right;
      }
    }
    return treeNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
