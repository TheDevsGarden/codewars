// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // make it into an array
    // iterate through the array
    // join the array
    
  const array1 = num.toString().split('')
  
  const squaredString = array1.map(el => Number(el)**2).join('')
    
  return Number(squaredString)
  
  // experimenting with creating a custom "toNumber()" method
  // let o = new Object();
  //   o.method = Number();
  
  // Object.prototype.customMethod = function(){
  //     return this.Number() ; 
  // };
  
  
  }