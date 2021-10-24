let fizzBuzz = () => {
  for (let i = 1; i<=100; i++){
    let output = "";
    let modBy3 = i%3 === 0;
    let modBy5 = i%5 === 0;

    if (modBy3){
     output += "Fizz";
    }
    if (modBy5){
     output += "Buzz";
   }
    if (!modBy3 && !modBy5) {
     output += ` ${i} `;
   }
    console.log(output);
  };
}

console.log(fizzBuzz())
