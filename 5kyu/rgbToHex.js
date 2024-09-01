/* Day 36 */

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b) {
    // store rgb  values in array
    const rgb = [r, g, b]

    //loop to convert values
    let hexValues = rgb.map(v => {
        // check for non valid int
        if (v < 0) v = 0
        if (v > 255) v = 255

        // conversion formula
        let v1 = Math.floor(v / 16)
        let v2 = v % 16


        let convertToHex = val => {
            switch (val) {
                case 10:
                    val = 'A'
                    break
                case 11:
                    val = 'B'
                    break
                case 12:
                    val = 'C'
                    break
                case 13:
                    val = 'D'
                    break
                case 14:
                    val = 'E'
                    break
                case 15:
                    val = 'F'
                    break
                default:
                    val = val
            }
            return val
        }

        // convert to hex pair(string)
        return `${convertToHex(v1)}${convertToHex(v2)}`
    })
    // return hex value
    return hexValues.join('')
}

rgbToHex(255, 255, 255)