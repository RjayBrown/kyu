/* Day 58 */

/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

function reverseLetter(str) {
  let arr = str.split('')
  let valid = 'abcdefghijklmnopqrstuvwxyz'
  return arr.reverse().filter(char => {
    if (valid.includes(char.toLowerCase())) {
      return char
    }
  }).join('')
}