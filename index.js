/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let shuffledArray = new Array(2 * n).fill(0);

  for (let i = 0; i < n; i++) {
      shuffledArray[i * 2] = nums[i];
      shuffledArray[i * 2 + 1] = nums[n + i];
  }

  return shuffledArray;
}

console.log(shuffle([1,2,3,5,6,7], 3))