/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(String(num).length!==1){
    let a = num.toString().split("").map(Number)
    let sum = a.reduce((a,b)=>a+b,0)
    num = sum
  }
    return num
};