/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function(nums, target) {
    // 왼쪽이 중간보다 작다면 이는 왼쪽 ~ 중간까지의 정렬 순서를 보장한다.
    // 이때 만약 타겟이 중간보다 작다면 (왼쪽에서 중간 - 1) 이분탐색을 정상적으로 돌리는것과 동일하다.
    // 하지만 만약 타겟이 중간보다 크다면 (중간 + 1 ~ 오른쪽)으로 이분탐색
    // 왼쪽이 중간보다 크다면 중간부터 오른쪽 까지는 정렬 순서를 보장한다.
    // 이때 만약 타겟이 중간보다 크다면 (중간 + 1 ~ 오른쪽)으로 이분탐색
    // 만약 타겟이 중간보다 작다면 (왼쪽에서 중간 -1)로 이분탐색 진행
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(mid)
        const leftValue = nums[left];
        const rightValue = nums[right];
        const midValue = nums[mid];
        if(midValue === target) return mid;

        if(leftValue <= midValue) {
            if(target < midValue && target >= leftValue) right = mid - 1;
            else left = mid + 1;
        } else {
            if(target > midValue && target <= rightValue) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
};