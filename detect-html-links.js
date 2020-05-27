function processData(input) {
    //Enter your code here
    let arr = [];

    arr.push(input.match(/(?<=\>)\w+(?=\<)/g)[0]);
    arr.push(input.match(/(?<=\").*(?=\")/g)[0]);
    return arr;
}

console.log(processData("<a href=\"http://www.hackerrank.com\"><h1><b>HackerRank</b></h1></a>"));