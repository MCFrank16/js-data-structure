// a simple example of using dynamic programming.
// the complexity is O(2^N) Baaaaddddd if we dont
// use memoization, but with memoization it takes O(n)
// the top-down approach using recursion

// function fib(n, memo){
//     if(memo[n] !== undefined) return memo[n];
//     if (n <= 2) return 1;
//     var res = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = res;
//     return res;
// }


// Tabulated Version
// the bottom up approach using iteration
// Time complexity is also O(n)
function fib(n){
    var fibNums = [0,1,1];
    if(n <= 2) return 1;
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fib(10000));

// the better solution between these 2 implementations is the tabulation version
// Imagine if we try to compute the fibonacci of 100000, the function will crash
// and this is because of the many recursive calls we made which took up too much
// space in the recursion stack. so that is why tabulation is better than memoization.
