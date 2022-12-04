/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = m + n - 1

    for(let i = 1 ; i<n+1; i++){
        console.log(x)
        nums1[x] = nums2[n-i]
        x=x-1
    }
    
    nums1.sort((a,b) => a-b)
    return nums1
};