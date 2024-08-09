/* Day 10 */

/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
let words = "This is an example!"

function reverseWords(str) {
    // Go for it
    str = str.split(' ')
    let reversed = str.map(word => word.split('').reverse().join(''))
    return reversed.join(' ')
}