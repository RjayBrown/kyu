/* Day 17 */

/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return str.split('')
    .filter(ltr => ltr === 'a' || ltr === 'e' || ltr === 'i' || ltr === 'o' || ltr === 'u')
    .length
}