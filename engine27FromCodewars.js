function numberOfPairs(gloves) {
    var pairs = 0,
        counts = {};
    for (var color of gloves) {
        if (!counts.hasOwnProperty(color)) {
            console.log(counts)
            counts[color] = 0;
        }
        if (++counts[color] === 2) {
            console.log(counts)
            counts[color] -= 2;
            pairs++;
        }
    }
    return pairs;
}

let input = ['red', 'green', 'blue', 'blue', 'blue', 'blue'];

console.log(numberOfPairs(input))