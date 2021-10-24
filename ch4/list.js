let arrayToList = (input) => {
  let list = null;
  for (let i=input.length-1;i>=0;i--){
     list = {value : input[i], rest: list}
  }
  return list
}

let listToArray = (input) => {
  let node = input.rest;
  let output = [input.value];
  while (node != null){
    output.push(node.value);
    node=node.rest;
  }
  return output
}

let prepend = (el, list) => ({value: el, rest: list})

let nth = (list, num) => {
  let count = 0;

  function nthHelper(list,num,count){
  if (count === num){
    return list.value;
  }
  if (list.rest === null){
   return undefined;
  }
  return nthHelper(list.rest,num,count+1);
  }
  return nthHelper(list,num,count)
}
