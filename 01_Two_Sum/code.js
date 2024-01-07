var twoSum = function (nums, target) {
  let comp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (comp.has(diff)) {
      return [i, comp.get(diff)];
    }

    comp.set(nums[i], i);
  }
};

twoSum([2, 7, 11, 15], 9);
