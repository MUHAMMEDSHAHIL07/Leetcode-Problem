/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0
    let j = 0
    let join = ""
   while(i<word1.length || j<word2.length){
    if(i<word1.length) join+=word1[i++]
    if(j<word2.length) join+=word2[j++]
   }
   return join
};