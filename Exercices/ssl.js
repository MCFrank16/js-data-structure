class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        // YOUR CODE GOES HERE
        let newNode = new Node(value);
        if(this.length === 0){
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
        let previous = current;
        while(current.next){
            previous = current; 
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    get(index){
       if (index < 0 || index >= this.length) return null;
       let current = this.head;
       let count = 0;
       
       while(count !== index){
           current = current.next;
           count++;
       }
       return current;
    }

    
}

var singly = new SinglyLinkedList();

singly.push(5).push(10).push(15).push(20);
console.log(singly.get(4));
