/**
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1;
    let right = x;
    let result = 0;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(mid>x/mid){
            right = mid - 1
        }else {
            result = mid
            left = mid + 1
        }
    }
    return result
};