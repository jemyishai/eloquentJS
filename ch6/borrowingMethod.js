let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true

/*
______
solution:
*/

console.log(map.__proto__.hasOwnProperty.call(map,"hasOwnProperty"));
console.log(map.__proto__.hasOwnProperty.call(map,"three"));
console.log(map.__proto__.hasOwnProperty.call(map,"four"));
console.log(map.__proto__.hasOwnProperty.call(map,"hasProperty")); //change the methods in map to test


