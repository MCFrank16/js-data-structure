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

   contains(val){
       if(this.root === null) return false;

       var current = this.root, found = false;

       while(current && !found){
           if(val < current.value){
               current = current.left;
           } else if(val > current.value) {
               current = current.right;
           } else {
               return true;
           }
       }
       return false;
   }

   find(val){
    if(this.root === null) return false;

    var current = this.root, found = false;

    while(current && !found){
        if(val < current.value){
            current = current.left;
        } else if(val > current.value) {
            current = current.right;
        } else {
            found = true;
        }
    }
    if(!found) return undefined;
    return current;
    }

    BFS(){
        var data = [], queue = [], node = this.root;

        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        return data;

    }

    DFSPreorder(){
        var data = [];

        function traverse(node){
            data.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostorder(){
        var data = [];

        function traverse(node){
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data; 
    }

    DFSInorder(){
        var data = [];

        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data; 
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

console.log(newBST.DFSInorder());

// console.log(newBST.root.left.right.value);