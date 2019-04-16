// Median of Two Sorted Arrays
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
  // work with array 1 being the smallest length of the two
  // check, if array 2 is smaller, switch it
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  // store lengths for easy use and low/high
  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  // working with nums1 since its the smaller of the two
  let high = x;
  // as long as low is lower or equal to high, run
  while (low <= high) {
    // find the half point for both X and Y arrays
    const midX = Math.floor((low + high) / 2);
    // finding mid point on Y, add 1 just in case of odd or even length
    const midY = Math.floor((x + y + 1) / 2) - midX;
    // use ternary operator to set the max and min of left and right
    let maxLeftX = (midX === 0) ? -Infinity : nums1[midX - 1];
    let minRightX = (midX === x) ? Infinity : nums1[midX];
    let maxLeftY = (midY === 0) ? -Infinity : nums2[midY - 1];
    let minRightY = (midY === y) ? Infinity : nums2[midY];
    // we have to make sure max left of X is less than min right of Y
    // same as max left of Y and min right of X
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // now get max of left elements and min of right elements
      // first case if both arrays are even length
      if ((x + y) / 2 === 0) return Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY) / 2;
      return Math.max(maxLeftX, maxLeftY);
    } else if (maxLeftX > minRightY) {
      // if too far on right side, go left
      high = midX - 1;
    } else {
      // if too far on left, go right
      low = midX + 1;
    }
  }
};
