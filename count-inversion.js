// naive solution
// brute force

function arrHolder(arr){
    let inversionCount = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
           if (arr[i] > arr[j]){
               inversionCount++;
           }
        }
    }
    return inversionCount;
}

// divide and conquer optimization

function countSplitInv(arr1, arr2){
   let invCount = 0;
   let i = 0;
   let j = 0;
   let sortedArr = [];


   while (i < arr1.length && j < arr2.length){
       if(arr1[i] > arr2[j]){
           sortedArr.push(arr2[j]);
           j++;
       } else {
           invCount++;
           sortedArr.push(arr1[i]);
           i++;
       }
   }

   while(i < arr1.length){
    sortedArr.push(arr1[i]);
    i++;
   }

   while(j < arr2.length){
    sortedArr.push(arr2[j]);
    j++;
   }
//    console.log(invCount)
   return sortedArr;
}

function count(arr){
  if (arr.length <= 1) return arr;
  let half = Math.ceil(arr.length / 2);
  let left = count(arr.splice(0, half));
  let right = count(arr.splice(-half));

  console.log(left, right);

  return countSplitInv(left, right);
}

// console.log(count([8,4,2,1]));
// console.log(count([1,2,3]));
console.log(count([1,3,5,2,4,6]))