let isEven = num => {
  if (num < 0) {
   num *= -1;
  }
  if (num === 0){
   return true;
  }
  if (num === 1){
   return false;
  }

  return isEven(num-2);
};
