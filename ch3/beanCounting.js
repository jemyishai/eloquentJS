let countBs = word => countChar(word);

let countChar = (word, letter = "B") => {
  let bCount = 0;
  for (let i = 0;i< word.length; i++){
   	if (word[i] === letter){
     bCount++;
    }
  }
  return bCount;
}
