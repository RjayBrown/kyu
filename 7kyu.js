/* Day 4 */

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


/* Day 6 */

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
    let i = Math.round(s.length / 2)
    return s.length % 2 === 0 ? `${s[i - 1]}${s[i]}` : `${s[i - 1]}`
}

/* Day 9 */

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    return str.split('')
        .filter(ltr => ltr === 'a' || ltr === 'e' || ltr === 'i' || ltr === 'o' || ltr === 'u')
        .length
}