// Given a sorted array of distinct integers and a target value, return the index if the target is found

var searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return "match does not found";
};

const nums = [1, 3, 5, 6];
target = 5;
console.log(searchInsert(nums, target));
