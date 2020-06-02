// best case scenario: O(n log n)
// average case scenario: O(n log n)
// worst case scenarion: O(n * n)

// space complexity: O(log n)

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

console.log(quickSort([4,8,2,-9,1,5,-1,7,6,3]));