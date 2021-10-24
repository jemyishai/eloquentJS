function rowConstruct(length,char1,char2){
 let row = '';
  for (let i = 0;i<length;i++){
   row+= char1;
   row+= char2;
  }
  return row;
}

function boardBuild(width, height){
  let output= '';
  for (let i=0;i<height;i++){
    if (i%2===0){
      output += rowConstruct(width/2,' ','#');
    } else {
    output += rowConstruct(width/2,'#', ' ');
    }
    output += "\n";
  }
  return output
}

console.log(boardBuild(4,8));
