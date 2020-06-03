// this sorting algorithm doesn't compare items like the ones we have
// looking at
// this is an integer sort algorithm
// it takes in an array of numbers and then sort the algorithm by taking
// the last index of the big number and then put all numbers that ends with it 
// in the same bucket.

// ===========================================================================

// helper functions in order to implement the radix sort.


// this is a helper function which get the digit at a certain position or index
// it counts from behind. so it is a rtl counting method.
// it is a 0 to n counting.

function getDigits(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

// this count the number of digits composes a single number.
function digitCount(num){
   return (num === 0) ? 1  : Math.floor(Math.log10(Math.abs(num)) + 1);
}

// this returns the count of the number with most digits
function mostNumber(arr){
   return arr.map(el => digitCount(el)).reduce((a,b) => Math.max(a,b));
}

// implementation of the radix sort algorithm

function radixSort(nums){
    const mostDigits = mostNumber(nums);
    for(let k = 0; k < mostDigits; k++){
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for(let i = 0; i < nums.length; i++){
            const digit = getDigits(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

const arr = Array.from({ length: 10 }, () => []);
console.log(radixSort([23,345,5467,12,2345,9853]));