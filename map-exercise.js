function processData(input) {
    //Enter your code here
    const n = parseInt(input[0], 10);
    const phoneBook = new Map();

    for(let i = 1; i <= n; i++){
        let info = input[i].split(" ");
        phoneBook.set(info[0], info[1]);
    }

    for(let q = n + 1; q < input.length; q++){
        let query = input[q];
        console.log(phoneBook.has(query) ? query + "=" + phoneBook.get(query) : 'Not found');
    }

}

processData(["3","sam 99912222","tom 11122222","harry 12299933","sam","edward","harry"]);