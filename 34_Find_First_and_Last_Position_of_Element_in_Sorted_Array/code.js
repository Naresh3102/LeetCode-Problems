var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  if (nums.length == 0) {
    return [-1, -1];
  }

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      let first = (second = mid);

      while (0 <= first && nums[first] == target) {
        first--;
      }

      while (second < nums.length && nums[second] == target) {
        second++;
      }

      return [first + 1, second - 1];
    }
  }

  return [-1, -1];
};
