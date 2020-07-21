class HashTable{
    constructor(size){
        this.bucket = new Array(size);
    }

    hash(key){
        let total = 0;
        let weird_prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weird_prime + value) % this.bucket.length;
        }
        return total;
    }

    set(key, value){
        let hashKey = this.hash(key);
        if(!this.bucket[hashKey]){
            this.bucket[hashKey] = [];
        }
        this.bucket[hashKey].push([key, value]);
    }

    get(key){
        let index = this.hash(key);
        if(this.bucket[index]){
            for(let i = 0; i < this.bucket[index].length; i++){
                if(this.bucket[index][i][0] === key){
                    return this.bucket[index][i][1];
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        
        for(let i = 0; i < this.bucket.length; i++){
            if(this.bucket[i]){
                for(let j = 0; j < this.bucket[i].length; j++){
                    if(!valuesArr.includes(this.bucket[i][j][1])){
                        valuesArr.push(this.bucket[i][j][1]);
                    }
                }
            }
        }

        return valuesArr;
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.bucket.length; i++){
            if(this.bucket[i]){
                for(let j = 0; j < this.bucket[i].length; j++){
                    if(!keysArr.includes(this.bucket[i][j][0])){
                        keysArr.push(this.bucket[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

console.log(ht.keys())





