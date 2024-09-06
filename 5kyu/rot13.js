/* Day 37 */

/*

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

*/

function rot13(str) {

    let chars = 'abcdefghijklmnopqrstuvwxyz'
    let capChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let newStr = ''
    let convertChar = (char) => {
        if (chars.includes(char)) {
            if (chars.indexOf(char) < 13) {
                newStr += chars[chars.indexOf(char) + 13]
            } else if (chars.indexOf(char) > 12) {
                newStr += chars[chars.indexOf(char) - 13]
            }
        } else if (capChars.includes(char)) {
            if (capChars.indexOf(char) < 13) {
                newStr += capChars[capChars.indexOf(char) + 13]
            } else if (capChars.indexOf(char) > 12) {
                newStr += capChars[capChars.indexOf(char) - 13]
            }
        } else {
            newStr += char
        }
    }

    for (let i = 0; i < str.length; i++) {
        convertChar(str[i])
    }

    return newStr
}