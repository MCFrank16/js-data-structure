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
}

let heap = new MaxBinaryHeap();

heap.insert(55)

console.log(heap.values);

