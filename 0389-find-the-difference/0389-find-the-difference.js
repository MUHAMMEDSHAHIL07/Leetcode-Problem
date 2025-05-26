/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var a = s.split("")
    for(var i =0;i<t.length;i++){
        var b = t[i]
        var c = a.indexOf(b)
        if(c===-1){
            console.log(b)
            break;
        }
        else{
           a.splice(c, 1);
        }
    }
    return b
};