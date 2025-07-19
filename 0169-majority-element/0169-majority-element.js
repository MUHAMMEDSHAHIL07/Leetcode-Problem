/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let n = nums.length
    for(let i =0;i<n;i++){
        let num = nums[i]
        obj[num]=(obj[num]||0)+1
        if(obj[num]>Math.floor(n/2)){
            return num
        }
    }
};