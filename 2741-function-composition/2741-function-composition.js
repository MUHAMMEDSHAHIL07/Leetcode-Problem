/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
      return functions.reduceRight((acc,cur)=>
         cur(acc),x
      )
    }
};