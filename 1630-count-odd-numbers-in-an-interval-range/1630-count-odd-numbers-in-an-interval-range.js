/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
   let count = 0
   if(low%2==0){
    low+=1
   }
   for(let i=low;i<=high;i+=2){
    count++
   }
   return count
};