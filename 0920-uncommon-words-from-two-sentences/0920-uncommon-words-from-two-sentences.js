/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

    let arr1 = s1.split(" ")
    let arr2 = s2.split(" ")
    let join = arr1.concat(arr2)
    let words = join.filter((word)=>{
    return join.indexOf(word)==join.lastIndexOf(word)
   
  })
    return words 

};