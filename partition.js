const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

function partition (arr, low = 0, high = arr.length){
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j){
        do {
            i++;
        } while (arr[i] <= pivot);
    
        do {
            j--;
        } while (arr[j] > pivot);
    
        if(i < j) swap(arr, arr[i], arr[j]);
    }

    swap(arr, pivot, arr[j]);
    console.log(arr);
  return j;
}

// function quickSort(arr){

// }

console.log(partition([10,16,8,12,15,6,3,9,5]));