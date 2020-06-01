// the time complexity of merge sort in worst,best and average case scenario is O(n log n)
// the space complexity is O(n)

function merge(arr1,arr2){
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]); 
            i++;
        } else {
            mergedArr.push(arr2[j]); 
            j++;
        }
    }

    while( j < arr2.length){
        mergedArr.push(arr2[j]);
        j++;
    }

    while( i < arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }
    
   return mergedArr;
}

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let half = Math.ceil(arr.length / 2);
    let firstHalf = mergeSort(arr.splice(0, half));
    let secondHalf = mergeSort(arr.splice(-half));
    return merge(firstHalf, secondHalf);
}

console.log(mergeSort([1,10,50,2,14,19,100]));
console.log(mergeSort([100,120,25,26,27,28,29,30]))