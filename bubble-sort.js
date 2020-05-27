// time complexity is O(n*n): Quadratic

// function bubbleSort(arr){
//     let i = arr.length;
//     while(i >= 0){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         i--;
//     }
//     return arr;
    
// }

// const swap = (arr, a, b) => [arr[a],arr[b]] = [arr[b],arr[a]];

// const bubbleSort = (arr) => {
    
//     let i = arr.length;
//     while(i >= 0){
//         for(let j=0; j < i -1; j++ ){
//             if(arr[j] > arr[j+1]) swap(arr, j, j+1);
//         }
//         i--;
//     }
//     return arr;

// }

// optimized with noSwaps for the nearly sorted arrays.
// the time complexity is linear O(n)

const swap = (arr, a, b) => [arr[a],arr[b]] = [arr[b],arr[a]];

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i >= 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
               swap(arr, j, j + 1);
               noSwaps = false;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5,1,2,3,4]));