//Problem 4 - Maximum Sum SubArray of Size K
function findMaxSumSubArray(k, arr) {
  let max = 0;
  let lenK = arr.length - k;

  for(let i=0; i<=lenK; i++){
      let sumK = 0;

      for(let j=i; j<i+k; j++){
          sumK += arr[j];
      }

      max = Math.max(max, sumK);
  }
  return max;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8