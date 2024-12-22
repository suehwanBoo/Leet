/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const N1 = nums1.length, N2 = nums2.length;
    let p1 = 0, p2 = 0, pointer = 0;
    let value = [], arr = [];
    while(value.length  < 2) {
        pointer = arr.length;
        if(p1 < N1 && p2 < N2) {
            if(nums1[p1] < nums2[p2]) {
                arr.push(nums1[p1]);
                p1++;
            } else {
                arr.push(nums2[p2]);
                p2++;
            }
        } else if (p2 >= N2) {
            arr.push(nums1[p1]);
            p1++;
        } else if (p1 >= N1) {
            arr.push(nums2[p2]);
            p2++;
        }
        if(pointer === Math.floor((N1 + N2 - 1) / 2)) value.push(arr[pointer]);
        if(pointer === Math.ceil((N1 + N2 - 1) / 2)) value.push(arr[pointer]);
    }
    return (value[0] + value[1]) / 2;
};