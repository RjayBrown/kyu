/* Day 7 */

/*
Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  return [...string].map(ltr => ltr === ltr.toUpperCase() ? ` ${ltr}` : ltr).join('')
}