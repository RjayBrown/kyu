/* Day 49 */

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }

    let res = walk.reduce((map, d) => {
        if (!map[d]) {
            map[d] = 1
        } else {
            map[d] += 1
        }
        return map
    }, {})

    let n2s = res['n'] + res['s'] || 0
    let e2w = res['e'] + res['w'] || 0

    if (n2s % 2 === 0 && e2w % 2 === 0 && res['n'] === res['s'] && res['e'] === res['w']) {
        return true
    }
    return false
}