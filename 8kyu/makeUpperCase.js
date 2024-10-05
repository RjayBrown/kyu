/* Day 55 */

/*
Write a function which converts the input string to uppercase.
*/

function makeUpperCase(str) {
  let res = ''
  for (let char of str) {
    res += (char.toUpperCase())
  }
  return res
}