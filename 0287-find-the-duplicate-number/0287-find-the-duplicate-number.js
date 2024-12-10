/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]; // 1칸씩 움직일 포인터
    let fast = nums[0]; // 2칸씩 움직일 포인터
    while(true) {
        slow = nums[slow]; // 1칸씩 움직이기 
        fast = nums[nums[fast]]; // 2칸씩 움직이기
        if(slow === fast) break; // 사이클이 존재하기에 무조건 만남
    }
    let result = nums[0]; // 시작 포인터, 위의 사이클 존재를 알아낸 포인터 한칸씩 움직였을때 처음으로 만난 지점이 사이클의 시작 시점(중복 시점)
    while(result !== slow) {
        slow = nums[slow];
        result = nums[result];
    }
    return result;
};