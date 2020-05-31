function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j;
        for(j = i - 1; j >= 0 && current < arr[j]; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = current;
    }
    return arr;
}

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

console.log(insertionSort(unsortedArr));