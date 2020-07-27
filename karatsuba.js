function split(int){
    const n = int.toString().length;

    if (!isFinite(int) || int === 1) throw Error('can not split number');

    const n2 = Math.floor(n/2);
    const divider = 10 ** n2;

    const num1 = Math.floor(int/divider);
    const num2 = int % divider;
    
    return [num1, num2];
}


// karatsuba multiplication formula is ((10^2)*ac)+((10^n/2)*(ad+bc))+bd.
function karatsuba(x,y){
  // base case to stop the recursion
  if ( x < 10 || y < 10){
      return x * y;
  }

  // this is the length of the longest number
  const n = Math.max(x.toString().length, y.toString().length);

  // this is the half of the longest number 
  const n2 = Math.floor(n/2);

  const [a,b] = split(x);
  const [c,d] = split(y);

  const ac = karatsuba(a,c);
  const bd = karatsuba(b,d);
  const abcd = karatsuba(a+b, c+d);
  const magic = abcd - ac - bd;

  return ac * 10 ** (2 * n2) + magic * 10 ** n2 + bd;
}

console.log(split(3))
console.log(karatsuba(5872, 6713));