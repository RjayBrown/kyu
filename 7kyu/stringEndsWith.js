/* Day 9 */

/*
Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
    // TODO: complete
    return str.slice((str.length - ending.length)) === ending ? true : false
}