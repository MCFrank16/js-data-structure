// naive iterative solution with )(n3) which is cubic time.
// but this is great in terms of space complexity.
function multiply(a,b){
    var result = new Array(a.length);

    for(let i = 0; i < result.length; i++){
        result[i] = new Array(b[i].length);
        for( let j = 0; j < a.length; j++){
            result[i][j] = 0;
            for(let k = 0; k < b.length; k++){
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

// naive method of splitting which will take n2: quadratic time.
// it returns a 2 * 2 matrix.
function split(m){
    let res = [];
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            let halfPoint = Math.ceil(m[i].length / 2);
            let firstHalf = m[i].splice(0, halfPoint);
            let secondHalf = m[i].splice(-halfPoint);
            if(secondHalf.length < 2) secondHalf.push(0);
            let wrap = [firstHalf, secondHalf];
            if(firstHalf.length === 2 && secondHalf.length === 2) res.push(wrap);
            
        }
    }
    return res;
}

var a = [[1,3,5,7], [2,4,6,9], [8,2,6,3], [6,4,1,5]];
var b = [[2,4,6,6], [2,7,4,2], [0,7,1,4], [0,9,3,0]];

console.log(split(a));

