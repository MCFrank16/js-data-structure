// stack works with elements on a last in first out workflow.
// push: to put an element on top of the stack.
// pop: to remove an element on top of the stack.
// peek: to display the topmost element of the stack.
// length or size: which simply returns the length of the stack.

class Stack{
    constructor(){
        this.count = 0;
        this.storage = {};
    }

    push(value){
       this.storage[this.count] = value;
       this.count++;
    }

    pop(){
        delete this.storage[this.count - 1];
        this.count--;
    }

    peek(){
        return this.storage[this.count - 1];
    }

    size(){
        return this.count;
    }
}

const myStack = new Stack();
myStack.push("Frank");
myStack.push("Mutabazi");
myStack.push("Cyuzuzo");

myStack.pop();
myStack.push("Cyuzuzo");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack);