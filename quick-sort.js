// best case scenario: O(n log n)
// average case scenario: O(n log n)
// worst case scenarion: O(n * n)

// space complexity: O(log n)


// iterative solution
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

function pivotHelper(arr, start = 0, end= arr.length - 1){
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, swapIndex, start);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    
    if(left < right){
        let pivotIndex = pivotHelper(arr, left, right);
        // left recursion
        quickSort(arr, left, pivotIndex - 1);
        // right recursion
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}


// another solution
function quickSort(arr){
    if (arr.length <= 1) return arr;

    let pivot = Math.floor((arr.length - 1) / 2);

    let val = arr[pivot], less = [], more = [];

    arr.splice(pivot, 1);

    arr.forEach((el, i, arr) => {
        el < val ? less.push(el) : more.push(el);
    });

    return (quickSort(less)).concat([val], quickSort(more));
}

console.log(quickSort([4,8,2,-9,1,5,-1,7,6,3]));