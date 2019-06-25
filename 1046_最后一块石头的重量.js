/**
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if(stones.length == 1){ return stones[0] }
  stones.sort((a, b) => {
    return a - b
  })
  if(stones[stones.length-1] == stones[stones.length-2]){
    stones.splice(stones.length-2, 2)
  }else {
    stones[stones.length-1] = stones[stones.length-1] - stones[stones.length-2]
    stones.splice(stones.length-2, 1)
  }
  return stones.length == 0 ? 0 : lastStoneWeight(stones)
};