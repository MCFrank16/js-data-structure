class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current; 
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if (!this.head) return undefined;
        let headToRemove = this.head;

        this.head = headToRemove.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        return headToRemove;
    }

    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;

        let count = 0;
        let currentNode = this.head;

        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    
}
let newList = new SinglyLinkedList();

newList.push('Frank');
newList.push('Cyuzuzo');

newList.unshift('Mutabazi');
newList.push('Muzehe');

console.debug(newList.get(9));

// console.log(newList);