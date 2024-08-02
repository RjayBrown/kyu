/* Day 1 */

/*
DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
    return num <= 0 ? num : num - num * 2
}

/* Day 2 */

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    // your code here
    let sum
    array.length === 0 ? sum = 0 : sum = array.reduce((acc, cv) => acc += cv);
    return sum ? sum / array.length : 0
}

/* Day 3 */

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 Examples:
*/

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


function solution(str, ending) {
    // TODO: complete
    return str.slice((str.length - ending.length)) === ending ? true : false
}


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

/* Day 5 */

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(v => typeof v !== 'string')
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


/* Day 7 */

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
    s = s.split(' ').sort((a, b) => a.length - b.length)
    return s[0].length
}