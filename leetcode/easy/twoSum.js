// Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// first attempt
// run: 140ms memory: 15.4mb
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// best answer found
// run: 68ms memory: 16mb
const twoSum = (nums, target) => {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let map = {};
  for(let i = 0; i < len; i++) {
    let n = target - nums[i];
    let find = map[n];
    if(find !== undefined) return [find, i];
    else map[nums[i]] = i;
  }
};

// my next attempt using map
// run: 60ms memory: 35.2mb
const twoSum = (array, target) => {
  const memo = new Map();
  for (let i = 0; i < array.length; i += 1) {
    const complement = target - array[i];
    if (memo.has(complement)) return [memo.get(complement), i];
    memo.set(array[i], i);
  }
  return 'None found';
};

// wanted to check if map had better performance than standard object
// nearly same results
// run: 60ms memory: 35.6mb
const twoSum = (array, target) => {
  const memo = {};
  for (let i = 0; i < array.length; i += 1) {
    const complement = target - array[i];
    if (memo.hasOwnProperty(complement)) return [memo[complement], i];
    memo[array[i]] = i;
  }
  return 'None found';
};
