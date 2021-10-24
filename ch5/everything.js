// for loop

function every(array, test) {
  for (let el of array){
   if (!test(el)) return false;
  }
  return true;
}

let every = (array, test) => !array.some((el)=>!test(el))
