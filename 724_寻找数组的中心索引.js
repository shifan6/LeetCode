/**
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
 * 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0
    var sum2 = 0
    for(var i=0; i<nums.length; i++){
        sum += nums[i]
    }
    for(var i=-1; i<nums.length-1; i++){
        if(i>=0){
            sum2 += nums[i];
        }
        if(sum2 * 2 + nums[i+1] === sum){
            return i + 1
        }
    }
    return -1
};