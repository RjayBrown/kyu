/* Day  */

/*
*/

function titleCase(title, minorWords) {
    // iterate through words
    // convert to title unless minor word
    minorWords = minorWords.split(' ')
    let res = title.split(' ').map((word, i, arr) => {
        if (minorWords.includes(word) && arr.indexOf(word) !== 0) {
            return word
        } else {
            return word[0].toUpperCase() + word.substring(1).toLowerCase()
        }
    })

    return res.join(' ')
}