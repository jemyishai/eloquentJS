class Group {
  constructor(){
   this.group = [];
  }

 add (item){
   if (!this.has(item)){
 	this.group=[...this.group,item]
   }
}

 delete (item){
  this.group = this.group.filter(existingItems => existingItems != item )
 }

  has(item) {
  return this.group.includes(item)
}

 static from (iterable){
   let newGroup = new Group();
   for (let item of iterable){
    newGroup.add(item);
   }
   let output = new GroupIterator(newGroup)
   return output;
 }
}

class GroupIterator {
  constructor(incomingGroup){
    this.iterableGroup = incomingGroup;
    this.values = incomingGroup.group;
    this.count = 0;
  }


  [Symbol.iterator](){
  //  fix this jank
    let val = this.values;
    let count = this.count;
    return {

      next(){
        let output = count >= val.length ?
          {
            value: null,
            done: true
          }
        :
       {
          value: val[count],
          done: false
        }
        count++;
        return output;
      }
    }
  }
}

// let group = Group.from([10, 20])
// let exposedNext = group[Symbol.iterator]()


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

// → a
// → b
