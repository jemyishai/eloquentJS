class Group {
  constructor(){
   this.group = [];
  }

 add (item){
   if (!this.has(item)){
    // this.group.push(item)
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
   return newGroup;
   //return iterable.forEach( (item) => newGroup.add(item))
 }
}
