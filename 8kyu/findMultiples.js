/* Day 39 */

/*
Description:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

function findMultiples(integer, limit) {
  let multiples = []
  let value = 0
  for (let i = 1; value <= limit; i++) {
    value = integer * i
    if (value <= limit) {
      multiples.push(value)
    }
  }
  return multiples
}