/* Day 12 */

/*
Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because
1^2 (1) + 2^2 (4) + 2^2 (4) = 9
*/

function squareSum(numbers) {
  numbers = numbers.map(n => Math.pow(n, 2)).reduce((acc, cv) => acc += cv, 0)
  return numbers
}