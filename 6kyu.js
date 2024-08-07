/* Day 8 */

/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array.
*/


function score(dice) {
    // Fill me in!
    let nums = [1, 2, 3, 4, 5, 6]
    let otherNums = [2, 3, 4, 6]
    let score = 0
    let mp = 100
    if (!dice.includes(1) && !dice.includes(5)) {
        otherNums.map((num) => {
            let thisNum = num
            let filtered = dice.filter(num => num === thisNum)
            filtered.length >= 3 ? score += num * mp
                : score
        })
    } else {
        for (let num of nums) {
            let thisNum = num
            let filtered = dice.filter(num => num === thisNum)
            console.log(filtered)
            filtered.length < 3 && num === 1 ? score += filtered.length * num * mp
                : filtered.length < 3 && num === 5 ? score += filtered.length * num * (mp / 10)
                    : filtered.length >= 3 && num === 1 ? score += num * mp * 10 + (filtered.length - 3) * mp
                        : filtered.length >= 3 && num === 5 ? score += num * mp + (filtered.length - 3) * num * (mp / 10)
                            : filtered.length >= 3 ? score += num * mp
                                : score
        }
    }
    return score
}

/* Day 10 */

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
    //...
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    let t = 0
    for (let i = 0; i < chars.length; i++) {
        string.toLowerCase().includes(chars[i]) ? t++ : t
    }
    return t >= 26 ? true : false
}