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
        if (data < treeNode.data){
          if (treeNode.left === null){
            return null;
          }
          else{
            treeNode = treeNode.left;
          } 
          continue;
        }
        if (data > treeNode.data){
          if (treeNode.right === null){
            return null;
          }
          else{
            treeNode = treeNode.right;
          } 
          continue;
        }
      }
    }
  }

  remove(data) {
    let nodeBefore = this.tree;
    let treeNode = this.tree;
    if (treeNode !== null) {
      if (data == treeNode.data){
        let nLeft = treeNode.left;
        let nRight = treeNode.right;
        if (nRight) {
          if (!nLeft){
            this.tree = this.tree.right;
          }
          else{
            while(nLeft.right){
              nLeft = nLeft.right;
            }
            nLeft.right = nRight;
            this.tree = this.tree.left;
          }
        }
        else if(nLeft){
          this.tree = this.tree.left;
        }
        else{
          this.tree = null;
        }
        return;
      }
      while(true){
        if (data == treeNode.data){
          if (nodeBefore.data < treeNode.data){
            nodeBefore.right = treeNode.right;
            if (!nodeBefore.right) nodeBefore.right = treeNode.left;
            else nodeBefore.right.left = treeNode.left;
          }
          
          if (nodeBefore.data > treeNode.data){
            nodeBefore.left = treeNode.left;
            if (!nodeBefore.left) nodeBefore.left = treeNode.right;
            else nodeBefore.left.right = treeNode.right;
          }
         
          treeNode = null;
          break;
        }
        if (data < treeNode.data){
          if (treeNode.left === null){
            break;
          }
          else{
            let temp = treeNode;
            treeNode = treeNode.left;
            nodeBefore = temp;
          } 
          continue;
        }
        if (data > treeNode.data){
          if (treeNode.right === null){
            break;
          }
          else{
            let temp = treeNode;
            treeNode = treeNode.right;
            nodeBefore = temp;
          } 
          continue;
        }
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