function numberOfPairs(gloves) {
    var pairs = 0,
        counts = {};
    for (var color of gloves) {
        console.log("color:", color)
        if (!counts.hasOwnProperty(color)) {
            console.log("first, before:", counts)
            counts[color] = 0;
            console.log("first, after:", counts)
        }
        if (++counts[color] === 2) {
            console.log("second:", counts)
            counts[color] -= 2;
            pairs++;
        }
    }
    return pairs;
}

let input = ['red', 'green', 'blue', 'blue', 'blue', 'blue'];

console.log(numberOfPairs(input))