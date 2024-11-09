/* Day 73 */

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function countChars(string) {
    const count = {}
    for (let i = 0; i < string.length; i++) {
        if (!count[string[i]])
            count[string[i]] = 1
        else
            count[string[i]]++
    }
    return count
}