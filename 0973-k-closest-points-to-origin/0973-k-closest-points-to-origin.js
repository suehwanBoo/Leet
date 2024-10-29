/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */


var kClosest = function(points, k) {
  const getDistance = (x, y) => x**2 + y**2
  function quick(left, right) {
    let pivotIdx = left;
    let pivotDistance = getDistance(...points[left]);
    for(let i = left + 1; i <= right; i++) {
        if(pivotDistance > getDistance(...points[i])) {
            [points[pivotIdx + 1], points[i]] = [points[i], points[pivotIdx + 1]];
            pivotIdx += 1;
        }
    }
    [points[pivotIdx], points[left]] = [points[left], points[pivotIdx]];
    return pivotIdx;
  }

  let left = 0;
  let right = points.length - 1;

  while(true) {
    let pivot = Math.floor(Math.random() * (right - left + 1)) + left;
    [points[pivot], points[left]] = [points[left], points[pivot]];
    pivot = quick(left,right);
    if(pivot == k - 1) break;
    else if(pivot < k -1) left = pivot + 1;
    else right = pivot - 1;
  }
  return points.slice(0,k);
};