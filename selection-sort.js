// selection sort algorithm
// the time complexity is quadratic O(n*n)

// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         if(i !== min){
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
        
//     }
//   return arr;
// }

// ES2015 SOLUTION

const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        i !== min && swap(arr, i, min);
    }
    return arr;
}
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

console.log(selectionSort(unsortedArr));