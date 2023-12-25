const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.value;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // let newValue = new ListNode(value);
    // if (this.value) {
    //   newValue.next = this.value;
    // }
    // this.value = newValue;

    let newValue = new ListNode(value);
    if (this.value) {
      let current = this.value;
      while (current.next) {
        current = current.next;
      }
      current.next = newValue;
    } else {
      this.value = newValue;
    }

  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let current = this.value;
    let previous = null;

    // while (current.next) {
    //   previous = current;
    //   current = current.next;
    // }

    // if (previous) {
    //   previous.next = null;
    // }

    if (current.next) {
      this.value = current.next;
    }

    return current.value;

  }
}

module.exports = {
  Queue
};
