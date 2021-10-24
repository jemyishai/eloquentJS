function loop (value, test, update, body){
    for (let val = value; test(val) ; val=update(val)){
  		body(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
