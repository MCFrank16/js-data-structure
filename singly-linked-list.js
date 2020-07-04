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

    set(val, index){
        let nodeToUpadte = this.get(index);

        if(nodeToUpadte){
            nodeToUpadte.value = val;
            return true;
        } 
        return false;

    }

    insert(val, index){

        if (index < 0 && index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        
        let previousNode = this.get(index - 1);
        let temp = previousNode.next;
        let newNode = new Node(val);

        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let previousNode = this.get(index - 1);
        let idxToRemove = previousNode.next;
        previousNode.next = idxToRemove.next;
        this.length--;
        return idxToRemove;
    }

    reverse(){

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
        }

        return this;


    }
    
}
let newList = new SinglyLinkedList();

newList.push('Frank');
newList.push('Cyuzuzo');

newList.unshift('Mutabazi');
newList.push('Muzehe');

newList.insert("Boss", 2);
newList.set("Manu", 2)
newList.get(2);
newList.reverse();

console.log(newList);