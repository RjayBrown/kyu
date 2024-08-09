/* Day 12 */

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
    //your awesome code here
    array[0] === false ? arr = 0
        : arr = array.map((txtLine, i) => txtLine = `${i + 1}: ${txtLine}`)
    return arr
}