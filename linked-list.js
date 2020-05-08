class Node {
    constructor(element){
        this.next = null;
        this.element = element;
    }
}

class LinkedList{
    constructor(element){
        this.length = 0;
        this.head = null;
    }

    size () {
        return this.length;
    }

    currentHead () {
        return this.head;
    }

    addElement(element){

      let newNode = new Node(element);

      if(this.head === null){
          this.head = newNode;
      } else {
          let current = this.head;
          // iterate to the end of the list.
          while(current.next){
              current = current.next
          }
          current.next = newNode;
      }
      this.length++;
    }

    removeElement(element){
        let currentNode = this.head;
        let previousNode;

        if(currentNode.element === element){
           this.head = currentNode.next;
        } else {
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty(){
        return this.length === 0;
    }

    indexOf(element){
        let currentNode = this.head;
        let index = -1;

        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            } 
            currentNode = currentNode.next;
        }
        return -1;
    }

    elementAt(index){
       let currentNode = this.head;
       let count = 0;

       while(count < index){
           count++;
           currentNode = currentNode.next;
       }
       return (currentNode !== null) ? currentNode.element : 'the element doesn\'t exist';
    }

    addAt(index, element){
        let node = new Node(element);

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index > this.length){
            return false;
        }

        if(index === 0){
          node.next = currentNode;
          this.head = node;
        }
        else{
          while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next
          }
          node.next = currentNode;
          previousNode.next = node;
        }
    }

    removeAt(index){
        let currentNode = this.head;
        let previousNode;
        let currentIndex =0;

        if(index >= this.length || index < 0){
            return null;
        }

        if(index === 0){
            this.head = currentNode.next;
        } else {
          while(currentIndex < index){
              currentIndex++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
        }
        this.length--;
        return currentNode.element;
    }
}

const newList = new LinkedList();
newList.addElement("Frank");
newList.addElement("Mutabazi");
newList.addElement("Cyuzuzo");
newList.removeElement("Cyuzuzo");
newList.addAt(2, "Cyuzuzo");
console.log(newList.indexOf("Cyuzuzo"));
console.log(newList.elementAt(1));
console.log(newList.elementAt(2));
console.log(newList.removeAt(2));
console.log(newList);