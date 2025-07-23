/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum =0
    let n = nums.length
    for(let i =0;i<nums.length;i++){
        sum+=nums[i]
    }
    let expSum = n * (n + 1) / 2;
    let missing = expSum-sum
    return missing
};