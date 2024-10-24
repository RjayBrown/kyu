/* Day 67 */

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 2"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {

    const res = []
    num = String(num).split('')

    num.forEach((n, i) => {
        if (+n) {
            res.push(n.padEnd(num.length - i, '0'))
        }
    })
    return res.join(' + ')
}