const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  tree = null;

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.tree = addNewData(this.tree, data);

    function addNewData(node, data) {

      if (!node) {
        node = new Node(null);
      }

      if (!node.data) {
        node.data = data;
        return node;
      }

      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node.left = addNewData(node.left, data);
      } else {
        node.right = addNewData(node.right, data);
      }

      return node;
  }

  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return nodeWithData(this.tree, data);

    function nodeWithData(node, data) {

      if (!node || !node.data) {
        return null;
      }

      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return nodeWithData(node.left, data);
      } else {
        return nodeWithData(node.right, data);
      }

    }

  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {

      if (!node) {
        return null;
      }

      if (data === node.data) {

        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);

      } else if (data < node.data) {

        node.left = removeNode(node.left, data);

      } else {

        node.right = removeNode(node.right, data);

      }

      return node;

    }

  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.tree;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.tree;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};