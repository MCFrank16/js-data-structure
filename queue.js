class Queue {
    constructor(){
        this.collection = [];
    }

    enqueue(value){
       return this.collection.push(value);
    }

    dequeue(){
        return this.collection.shift();
    }

    frontElement(){
        return this.collection[0];
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return (this.collection.length === 0);
    }

    print(){
        return this.collection;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Frank");
myQueue.enqueue("Cyuzuzo");
myQueue.enqueue("Mutabazi");
myQueue.dequeue();
myQueue.enqueue("Frank");
console.log(myQueue.size());
console.log(myQueue.print());
