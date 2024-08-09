/* Day 8 */

/*
Description:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    // your code here
    let sum
    array.length === 0 ? sum = 0 : sum = array.reduce((acc, cv) => { return acc += cv });
    return sum ? sum / array.length : 0
}