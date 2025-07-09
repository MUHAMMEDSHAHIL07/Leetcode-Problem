/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const neg = x<0
    const a = x.toString().split("").reverse().join("")
    const result = parseInt(a)
    if (result > 2 ** 31 - 1) return 0;
    return neg ? -result : result
};