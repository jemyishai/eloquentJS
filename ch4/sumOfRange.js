let range = (start,end, step = 1) => {
  let output = [];
  for (let i=start; i != end; i+=step){
     output.push(i);
  }
  	output.push(end);
    return output;
}

let sum = (arrONum) => {
  let sum = 0;
  for (let number of arrONum){
    sum += number;
  }
  return sum;
}
