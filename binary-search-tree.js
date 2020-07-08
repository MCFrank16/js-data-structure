class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
   constructor(){
       this.root = null;
   }

   insert(val){
       let newNode = new Node(val);

       if(this.root === null){
           this.root = newNode;
           return this;
       }

       var current = this.root;
       while(true){
           if(val < current.value){
               if(current.left === null){
                   current.left = newNode;
                   return this;
               }
               current = current.left;
           } else {
               if(current.right === null){
                   current.right = newNode;
                   return this;
               }
               current = current.right;
           }
       }
   }
}

let newBST = new BST();

newBST.insert(45);
newBST.insert(35);
newBST.insert(50);
newBST.insert(55);
newBST.insert(60);
newBST.insert(40);
newBST.insert(25);

console.log(newBST.root.left.right.value);