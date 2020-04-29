// implementing set using ES5
// sets doesn't follow any particular order.

class Set{
   constructor(){
       this.collection = [];
   }
   
   // this method checks if the set has a certain method.
   has(item){
     return (this.collection.indexOf(item) !== -1);
   }
   
   // this method add an element to the set.
   add(value){
     this.collection.push(value);
   }

   // this method removes an element from the set.
   remove(item){
       const itemIndex = this.collection.indexOf(item);
       return (this.has(item)) ? this.collection.splice(itemIndex, 1) : 'the item is\'nt available.'
   }
   
   // this method returns all the values in a set.
   values(){
       return this.collection;
   }

   // this method returns the union of 2 sets.
   union(otherSet){
       const unionSet = [...this.collection, ...otherSet];

       return unionSet.filter((val, i) => unionSet.indexOf(val) === i);
   }

   // this method returns the intersection of 2 sets.
   intersection(otherSet){
       return this.collection.filter(el => otherSet.includes(el));
   }

   // this method will test if the set is a subset of another set.
   subset(otherSet){
       const firstSetValues = this.values();
       return firstSetValues.every((val) => otherSet.has(val));
   }
}

const mySet = new Set();

mySet.add("Frank");
mySet.add("Mutabazi");
mySet.add("Cyuzuzo");
mySet.add("Castro");

const mySet2 = new Set();

mySet2.add("Castro");
mySet2.add("Munyaneza");
mySet2.add("Kanuma");
mySet2.add("Mutabazi");
console.log(mySet.subset(mySet2));
