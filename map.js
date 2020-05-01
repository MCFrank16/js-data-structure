class Map{
    constructor(){
        this.collection = {};
        this.count = 0;
    }

    size(){
        return this.count;
    }

    set(key,value){
        this.collection[key] = value;
        this.count++;
    }

    has(key){
        return (key in this.collection);
    }

    get(key){
        return (this.has(key) === true) ? this.collection[key] : null;
    }

    delete(key){
      if(this.has(key)){
          delete this.collection[key];
          this.count--;
          return 'Deleted';
      }
      return 'The item doesn\'t exist.'
    }

    values(){
        let result = new Array();
        for(let i of Object.keys(this.collection)){
            result.push(this.collection[i]);
        }
        return (result.length > 0) ? result : null;
    }

    clear(){
        this.collection = {};
        this.count = 0;
        return 'Clear';
    }

}

const map = new Map();
map.set("Frank", 16)
map.set("Cyuzuzo", 15)
map.set("Mutabazi", 14)
map.set("Castro", 13)
console.log(map.size());
console.log(map.collection);
console.log(map.get("Mutabazi"))
console.log(map.count);
console.log(map.delete("Castro"));
console.log(map.collection);
console.log(map.values());
console.log(map.clear());
console.log(map.collection);