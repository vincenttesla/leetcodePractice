/**
 * Two sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0;i<nums.length-1;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return new Array(i,j);
            }
        }
    }
    return 0;
};
var nums = new Array(3,2,4);
var target = 6;
console.log(twoSum(nums,target));