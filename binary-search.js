function binarySearch(arr, x){
    let start = 0;
    let end = arr.length - 1;

    if(start > end) return false;

    let halfIndex = Math.floor((start + end) / 2);
    if (arr[halfIndex] === x) return true;
    if (arr[halfIndex] > x) {
        return binarySearch(arr, x)
    }else {
        return binarySearch(arr, x);
    }
}

console.log(binarySearch([1,2,5,7,8,9], 2));