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

console.log(selectionSort([0,5,3,4,1,2]));