class MaxBinaryHeap{
    constructor(){
        this.values = [31, 27, 28, 42, 13, 8];
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let elIndex = this.values.length - 1;
        let elValue = this.values[elIndex];

        while( elIndex > 0 ){
            let parentIdx = Math.floor((elIndex - 1) / 2);
            let parValue = this.values[parentIdx];
            if ( elValue <= parValue) break;
            this.values[elIndex] = parValue;
            this.values[parentIdx] = elValue;
            elIndex = parentIdx; 
        }
    }

    extractMax(){
       const max = this.values[0];
       const end = this.values.pop();
       if(this.values.length > 0){
        this.values[0] = end;
        this.bubbleDown();
       }
       return max;

    }

    bubbleDown(){ 
        let idx = 0;
        const length = this.values.length;
        const el = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > el) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild < length) || 
                    (swap !== null && rightChild > leftChild)
                    ) {
                        swap = rightChildIdx;
                    }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = el;
            idx = swap;
        }

    }
}

let heap = new MaxBinaryHeap();

heap.insert(55)
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();


console.log(heap.values);

