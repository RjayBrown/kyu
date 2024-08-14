/* Day 23 */

/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

a^p + a^p+1 + b^p+2 + c^p+3 +...)=n∗k
If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p) {
    // split the digits of n into array
    // loop to square digits by values based on p
    // divide results by n and check if n is an integer

    let sum = 0;
    nArr = String(n).split('')
    for (let i = 0; i < n.length; i++) {
        sum += Math.pow(nArr[i], p)
        p++
    }
    let k = sum / n
    return Number.isInteger(k) ? k : -1
}

// 2 positive integers
// returns k, num of squares using n's digits starting from p to equal n
// if none exists return -1

// 89, 1 => 1
// 92, 1 => -1