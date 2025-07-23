/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reverse = a.split("").reverse().join("")
    if(a==reverse){
    return true
    }
   else{
   return false
   }
};