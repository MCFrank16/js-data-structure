class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        let nodeToRemove = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = nodeToRemove.prev;
            this.tail.next = null;
            nodeToRemove.prev = null;

        }
        this.length--;
        return nodeToRemove;
    }

    shift(){
        if(this.length === 0) return undefined;
        let shiftedNode = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {

            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.length--;
        return shiftedNode;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index > this.length) return undefined;
        
        let count;
        let current;
        
        if(index < this.length / 2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;

            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
        
    }

    set(index, val){
        let foundNode = this.get(index);
        if(!foundNode) return false;
        foundNode.value = val;
        return true;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let prevNode = this.get(index - 1), newNode = new Node(val), nextNode = prevNode.next;
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;

        this.length++;
        return true;
    }
}

let newList = new DoublyLinkedList();

newList.push(20);
newList.push(30);
newList.push(40);
newList.unshift(50);

newList.set(3, 45);
newList.insert(2, 25);
console.log(newList.get(2));

// console.log(newList);