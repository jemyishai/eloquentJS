 /*
  if (Object.is(comp1, comp2)) {
   return true;
 }
 */
let propCheck = (arr1,arr2) => arr1.every(x => arr2.includes(x))

let deepEqual = (comp1, comp2) => {
   if ((typeof(comp1) === 'object' && comp1 != null) &&
       (typeof(comp2) === 'object' && comp2 != null) ){
   	let keys1 = Object.keys(comp1);
   	let keys2 = Object.keys(comp2);

     if (keys1.length === keys2.length){
       //may only need one test here
     	if (propCheck(keys1,keys2) && propCheck(keys2,keys1)){
          //check value for each prop recursively - does this cover edge cases??
     		for (let sameKey of keys1){
             return deepEqual(comp1[sameKey],comp2[sameKey])
            }
     	} // may need another else false here
     } else{
      return false;
     }
  } else{
   return comp1 === comp2;
  }

  //can prob remove this due to initial else
  /*
  if (typeof(comp1) !== 'object' && typeof(comp2) !== 'object' && (comp1 === comp2) ){
   return true;
  }
  */
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
