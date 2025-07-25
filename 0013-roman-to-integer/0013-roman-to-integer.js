/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const val ={
        "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000
    }
    let count = 0
    for(let i=0;i<s.length;i++){
        const a = val[s[i]]
        const b = val[s[i+1]]
        if(a<b){
           count -=a 
        }
        else{
            count+=a
        }
    }
    return count
};