const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => acc+curr,0)
};

const multiply = function(arr) {
 return arr.reduce((acc, curr) => acc*curr,1)
};

const power = function(num, pow) {
	if (pow === 0) return 1;
  let res = num;
  for (let i = 1; i < pow; i++){
    res = res * num;
  }
  return res;
};

const factorial = function(num) {
	if (num <= 1) return 1;
  let res = 1;
  while (num > 1){
    res = res * num;
    num--;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
