//leetcode 232. Implement Queue using Stacks
//Idea here is to use two stacks, one for enqueue operation and another for dequeue operation.
//When we need to dequeue and out_stack is empty, we pop all elements from in_stack and push them to out_stack.
//This reverses the order and allows us to dequeue in FIFO order.


var MyQueue = function() {
    this.in_stack = [];
    this.out_stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.in_stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek();
    return this.out_stack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.out_stack.length<=0){
        while(this.in_stack.length>0){
            this.out_stack.push(this.in_stack.pop())
        }
    }
    return this.out_stack[this.out_stack.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.in_stack.length<=0 && this.out_stack.length<=0
};