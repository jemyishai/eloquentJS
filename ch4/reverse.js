let reverseArray = (input) => {
 let output = [];
 for (let i = input.length-1;i>=0;i--){
 	output.push(input[i]);
 }
  return output;
}

let reverseArrayInPlace = (input) => {
  let end = input.length-1;
  for (let beg = 0; beg < (input.length)/2; beg++){
    let tempBeg = input[beg];
    let tempEnd = input[end];
    input[beg] = tempEnd;
    input[end] = tempBeg;
   	end--;
  }
  return input;
}
