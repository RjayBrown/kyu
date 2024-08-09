/* Day 20 */
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
    //...
    let repeat = 0
    str = str.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
    for (let i = 0; i < str.length; i++) {
        str[i] === str[i + 1] ? repeat++ : repeat
    }
    return repeat === 0 ? true : false
}